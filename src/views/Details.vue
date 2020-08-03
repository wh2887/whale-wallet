<template>
    <Layout :money-to-layout="show" @getReply="toggle">
        <Money v-show="show" class="money"/>
        <div class="details-wrapper">
            <DetailsHeader/>
            <Tab :data-source="array" :value.sync="interval"/>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Money from '@/views/Money.vue';
  import DetailsHeader from '@/components/Details/DetailsHeader.vue';
  import Tab from '@/components/Money/Tab.vue';
  import defaultRecordList from '@/constants/defaultRecordList';


  @Component({
    components: {Tab, DetailsHeader, Money}
  })
  export default class Details extends Vue {
    interval = 'day';
    show = false;  //设置Money组件 默认是否显示 true默认显示 false默认不显示
    record = defaultRecordList;
    array = [
      {text: '按月', value: 'month'},
      {text: '按周', value: 'week'},
      {text: '按天', value: 'day'},
    ];

    toggle(param: boolean) {
      this.show = param;
    }
  }
</script>

<style lang="scss" scoped>
    .money ::v-deep {
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

    .details-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 14px;
    }
</style>