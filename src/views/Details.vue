<template>
    <Layout :money-to-layout="show" @getReply="toggle" class-prefix="details">
        <Money v-show="show" class="money"/>
        <div class="detail-wrapper">
            <DetailsHeader :value="type" @update:value="onTypeChanged" :money="useMoney"/>
            <div class="bottom">
                <DetailList :data-source="groupedList" @update:value="onValueChanged"/>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Money from '@/views/Money.vue';
  import DetailsHeader from '@/components/Details/DetailsHeader.vue';
  import Tab from '@/components/Money/Tab.vue';
  import DetailList from '@/components/Details/DetailList.vue';
  import clone from '@/lib/clone';
  import dayjs from 'dayjs';


  @Component({
    components: {DetailList, Tab, DetailsHeader, Money}
  })
  export default class Details extends Vue {
    show = true;  //设置Money组件 默认是否显示 true默认显示 false默认不显示
    type = '-';
    useMoney = 0;

    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    onTypeChanged(value: string) {
      this.type = value;
    }

    onValueChanged(value: number) {
      this.useMoney = value;
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get groupedList() {
      const {recordList} = this;
      const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      if (newList.length === 0) {return [];}
      type Result = { title: string; total?: number; items: RecordItem[] }[]
      const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
        }
      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => {
          return sum + item.amount;
        }, 0);
      });
      return result;
    }

    toggle(param: boolean) {
      this.show = param;
    }
  }
</script>

<style lang="scss" scoped>
    .details-wrapper ::v-deep{
        position: relative;
        .details-content{
            width: 100%;
            > .money {
                z-index: 1;
                width: 100%;
                position: absolute;
                bottom: 0;
                height: 96vh;
                display: flex;
                align-items: center;
                background: #ffffff;
                border-radius: 36px 36px 0 0;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
            }

            .detail-wrapper {
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                margin-top: 14px;
                overflow: auto;

                > :first-child {
                }

                > .bottom {
                    width: 90%;
                    /*隐藏滚动条*/
                    -ms-overflow-style: none;

                    ::-webkit-scrollbar {
                        width: 0
                    }

                    border-radius: 10px;
                    overflow: hidden;
                    height: 100%;
                }
            }

        }

    }

</style>