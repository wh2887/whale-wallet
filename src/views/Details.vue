<template>
    <Layout :money-to-layout="show" @getReply="toggle">
        <Money v-show="show" class="money"/>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Money from '@/views/Money.vue';

  @Component({
    components: {Money}
  })
  export default class Details extends Vue {

    show = true;  //设置Money组件 默认是否显示 true默认显示 false默认不显示

    toggle(param: boolean) {
      this.show = param;
    }
  }
</script>

<style lang="scss">
    .money {
        position: absolute;
        bottom: 0;
        z-index: 1;
        width: 100vw;
        height: 96vh;
        display: flex;
        align-items: center;
        background: #ffffff;
        border-radius: 36px 36px 0 0;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    }
</style>