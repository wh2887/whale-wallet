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
        <button @click="inputContent">.</button>
        <button @click="inputContent" class="zero">0</button>
        <button @click="ok" class="ok">OK</button>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    @Prop(Number) value!: number;
    output = this.value.toString();

    @Watch('output')
    onOutputChanged() {
      this.emit();
    }

    emit() {
      this.$emit('update:value', parseFloat(this.output));
    }

    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      if (this.output.length === 16) {return;}
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          //如果是其中一个就直接替换默认的0位其中的
          this.output = input;
        } else {
          //如果输入点'.' 就直接往后加
          this.output += input;
        }
        return;
      }
      //判断 有.了，就不能再加.
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      //判断 有 + 了，就不能再加.
      this.output += input;
    }

    //删除功能
    remove() {
      if (this.output.length === 1) {
        //只有一个了再删除就是0
        this.output = '0';
      } else {
        //不然就点一次删除就删除最后一个
        this.output = this.output.slice(0, -1);
      }
    }

    clear() {
      this.output = '0';
    }

    ok() {
      this.$emit('submit', parseFloat(this.output));
      this.output = '0';
    }
  }

</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .number-wrapper {
        @extend %clearFix;
        width: 87%;
        margin-top: 8px;
        border: 1px solid $color-d;
        border-radius: 10px;
        font-family: Consolas monospace;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-grow: 1;

        > button {
            width: 25%;
            height: 25%;
            border: 1px solid $color-highlight;
            background: #E4E4E4;
            font-size: 1.5em;

            &:active {
                color: white;
                background: $color-highlight;
            }
            &:nth-child(1){
                border-radius: 10px 0 0 0;
            }
            &:nth-child(4){
                border-radius: 0 10px 0 0;
            }
            &:nth-child(13){
                border-radius: 0 0 0 10px;
            }
            &:nth-child(14){
                border-radius: 0 0 10px 0;
            }

            &.zero, &.ok {
                width: 50%;
            }


        }

    }
</style>