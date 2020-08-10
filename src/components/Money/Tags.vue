<template>
    <div>
        <ol class="tags-list">
            <li v-for="tag in getCurrentTagList(recordType)" :key="tag.iconName"
                @click="$emit('update:tag',tag)">
                <IconWithBorder :name=" tag.iconName "/>
                <span>{{tag.tagText.slice(0,2)}}</span>
            </li>
            <li @click="addTags">
                <IconWithBorder :name=" 'add' "/>
                <span>添加</span>
            </li>
            <i class="space"></i>
            <i class="space"></i>
            <i class="space"></i>
            <i class="space"></i>
        </ol>
        <ul class="dots">
            <li :class="{selected:currentPage=== 1}" @click="selected(1)"></li>
            <li :class="{selected:currentPage=== 2}" @click="selected(2)"></li>
            <li :class="{selected:currentPage=== 3}" @click="selected(3)"></li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';


  @Component({
    components: {IconWithBorder},
  })

  export default class Tags extends Vue {
    @Prop() recordType!: string;
    currentPage = 1;
    startPage = 0;
    endPage = 6;

    created() {
      this.$store.commit('initTags');
    }

    get tagList() {
      return this.$store.state.tagList;
    }

    getCurrentTagList(type: string) {
      const oldTagList = this.tagList;
      const payTagList = [];
      const incomeTagList = [];
      for (let i = 0; i < oldTagList.length; i++) {
        if (oldTagList[i].type === '-') {
          payTagList.push(oldTagList[i]);
        } else if (oldTagList[i].type === '+') {
          incomeTagList.push(oldTagList[i]);
        } else {
          return window.alert('暂无标签，先新建标签吧！');
        }
      }
      if (type === '-') {
        return payTagList.filter((item, index) => index >= this.startPage && index <= this.endPage);
      } else if (type === '+') {
        return incomeTagList;
      }
    }

    addTags() {
      if (this.recordType === '-') {
        this.$router.push({path: '/more/payedit', query: {type: '-'}});
      } else if (this.recordType === '+') {
        this.$router.push({path: '/more/incomeedit', query: {type: '+'}});
      }
    }

    selected(page: number) {
      this.currentPage = page;
      if (this.currentPage === 1) {
        this.startPage = 0;
        this.endPage = 6;
      } else if (this.currentPage === 2) {
        this.startPage = 7;
        this.endPage = 13;
      } else if (this.currentPage === 3) {
        this.startPage = 14;
        this.endPage = 21;
      }
    }

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .tags-list {
        width: 87vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 10px;

        > li {
            width: 38px;
            height: 38px;
            margin: 0 10px 28px 10px;


            > span {
                padding-top: 2px;
                font-size: 0.8em;
            }
        }

        > .space {
            margin: 0 10px;
        }

        > :last-child {
            margin-right: auto;
        }

        > i {
            min-width: 38px;
            margin: 0 4vw;
        }
    }

    .dots {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > li {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $color-d;
            margin: 0 10px;

            &.space {
            }

            &.selected {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: $color-highlight;
            }
        }
    }
</style>