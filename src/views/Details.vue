<template>
    <Layout :money-to-layout="show" @getReply="toggle">
        <Money v-show="show" class="money"/>
        <div class="details-wrapper">
            <DetailsHeader/>
            <Tab :data-source="intervalList" :value.sync="interval"/>
            <div class="detail-list">
                <DetailList :data-source="result"/>
            </div>
        </div>
        <div>
            <ol>
                <li v-for="(group,index) in result" :key="index">
                    <h3>{{group.title}}</h3>
                    <ol v-for="item in group.items" :key="item.id">
                        {{item.createdAt}} ||||
                        {{item.amount}}
                    </ol>
                </li>
            </ol>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Money from '@/views/Money.vue';
  import DetailsHeader from '@/components/Details/DetailsHeader.vue';
  import Tab from '@/components/Money/Tab.vue';
  import intervalList from '@/constants/intervalList';
  import DetailList from '@/components/Details/DetailList.vue';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';


  @Component({
    components: {DetailList, Tab, DetailsHeader, Money}
  })
  export default class Details extends Vue {
    show = false;  //设置Money组件 默认是否显示 true默认显示 false默认不显示
    interval = 'day';
    intervalList = intervalList;

    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get result() {
      const {recordList} = this;
      type HashTableValue = { title: string; items: RecordItem[] }

      const newList = clone(recordList).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      return [];
    }

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