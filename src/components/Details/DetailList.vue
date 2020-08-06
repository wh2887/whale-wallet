<template>
    <ol class="list" v-if="dataSource.length>0">
        <li v-for="(group,index) in dataSource" :key="index">
            <div class="top">
                <h3>{{beautify(group.title)}}</h3>
                <h3>支： ￥{{group.total}}</h3>
            </div>
            <ol class="bottom" v-for="item in group.items" :key="item.id">
                <div class="left">
                    <IconWithBorder name="dog3"/>
                    <div class="left-text">
                        <p>{{item.tagsName}}</p>
                        <p>备注：{{item.note || '无备注'}}</p>
                    </div>
                </div>
                <div class="right">
                    <p>￥{{item.amount}}</p>
                </div>
            </ol>
        </li>
    </ol>
    <div v-else>
        目前没有相关记录
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import dayjs from 'dayjs';
  import {Component, Prop} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';

  @Component({
    components: {IconWithBorder}
  })
  export default class DetailList extends Vue {
    @Prop() dataSource!: object;

    beautify(string: string) {
      const day = dayjs(string);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (day.isSame(now, 'year')) {
        return day.format('MM月DD日');
      } else {
        return day.format('YYYY年MM月DD日');
      }

    }

  }
</script>

<style lang="scss" scoped>
    .list {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        > li {
            width: 90vw;
            background: white;
            border-radius: 10px;
            padding: 10px;
            margin-top: 10px;

            > .top {
                display: flex;
                justify-content: space-between;
            }

            > .bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 5px;

                > .left {
                    display: flex;
                    align-items: center;

                    > .left-text {
                        display: flex;
                        margin-left: 10px;
                        flex-direction: column;
                        justify-content: flex-start;

                        > :first-child {
                            text-align: start;
                        }

                        > :last-child {
                            color: #7D7878;
                        }
                    }
                }
            }
        }
    }
</style>