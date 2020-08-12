<template>
    <div class="tags-wrapper">
        <ol class="tags-list">
            <li @click="$emit('update:tag',other)">
                <IconWithBorder name="other"/>
                <span>一般</span>
            </li>
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
    other: Tag = {
      id: '',
      iconName: 'other',
      type: this.recordType,
      tagText: '一般'
    };

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
        }
      }
      if (type === '-') {
        return payTagList;
      } else if (type === '+') {
        return incomeTagList;
      } else {
        return;
      }
    }

    addTags() {
      if (this.recordType === '-') {
        this.$router.push({path: '/more/payedit'});
      } else if (this.recordType === '+') {
        this.$router.push({path: '/more/incomeedit'});
      }
    }


  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .tags-wrapper {
        .tags-list {
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
    }
</style>