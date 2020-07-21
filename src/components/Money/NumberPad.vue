<template>
    <div class="number-wrapper">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="remove">删除</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button class="ok">OK</button>
        <button @click="inputContent">+</button>
        <button @click="inputContent">0</button>
        <button @click="inputContent">.</button>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {

    output = '0';

    emit() {
      this.$emit('update:output', this.output);
    }

    inputContent(event: MouseEvent) {
      this.emit();
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      if (this.output.length === 16) {return;}
      if ('+'.indexOf(input)>=0) {
        console.log('+'.indexOf(input));
      }
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          //如果是其中一个就直接替换默认的0位其中的
          this.output = input;
          this.emit();
        } else {
          //如果输入点'.' 就直接往后加
          this.output += input;
          this.emit();
        }
        return;
      }
      //判断 有.了，就不能再加.
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      //判断 有 + 了，就不能再加.
      this.output += input;
      this.emit();
    }

    //删除功能
    remove() {
      if (this.output.length === 1) {
        //只有一个了再删除就是0
        this.output = '0';
        this.$emit('update:output', this.output);
      } else {
        //不然就点一次删除就删除最后一个
        this.output = this.output.slice(0, -1);
        this.$emit('update:output', this.output);
      }
    }

    clear() {
      this.output = '0';
      this.$emit('update:output', this.output);
    }
  }

</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .number-wrapper {
        @extend %clearFix;
        width: 87vw;
        height: 322px;
        margin-top: 8px;
        border: 1px solid $color-d;
        border-radius: 10px;
        font-family: Consolas monospace;

        > button {
            width: 68px;
            height: 68px;
            border: none;
            background: #E4E4E4;
            border-radius: 10px;
            margin: 6px;
            font-size: 1.5em;
            float: left;

            &:active {
                color: white;
                background: $color-highlight;
            }

            &.ok {
                height: 68*2 + 10px;
                float: right;
                margin-right: 10px;

            }
        }

    }
</style>