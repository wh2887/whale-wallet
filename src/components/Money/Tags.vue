<template>
    <div>
        <ol class="tags-list">
            <li v-for="(tag) in tags" :key="tag.iconName"
                @click="$emit('update:icon',tag.iconName)">
                <IconWithBorder :name=" tag.iconName "/>
                <span>{{tag.tagText}}</span>
            </li>

            <li @click="addTags">
                <IconWithBorder :name=" 'add' "/>
                <span>添加</span>
            </li>
            <i></i><i></i><i></i><i></i>
        </ol>
        <ul class="dots">
            <li :class="{selected:type=== '1'}" @click="getPage('1')"></li>
            <li :class="{selected:type=== '2'}" @click="getPage('2')"></li>
            <li :class="{selected:type=== '3'}" @click="getPage('3')"></li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';
  import tagListModel from '@/models/tagListModel';


  @Component({
    components: {IconWithBorder}
  })
  export default class Tags extends Vue {
    @Prop() tagDataSource: string[] | undefined;
    @Prop() tagsPage!: object;
    @Prop() recordType!: string;
    tags = tagListModel.fetch();
    type = '1';
    startIndex = 0;
    endIndex = 7;

    addTags() {
      if (this.recordType === '-') {
        this.$router.push({path: '/more/payedit', query: {type: '-'}});
      } else if (this.recordType === '+') {
        this.$router.push({path: '/more/incomeedit', query: {type: '+'}});
      }
    }

    getPage(type: string) {
      if (type !== '1' && type !== '2' && type !== '3') {
        throw new Error('type is unknown');
      } else if (type === '1') {
        this.type = type;
        this.startIndex = 0;
        this.endIndex = 7;
      } else if (type === '2') {
        this.type = type;
        this.startIndex = 7;
        this.endIndex = 14;
      } else if (type === '3') {
        this.type = type;
        this.startIndex = 14;
        this.endIndex = 20;
      }
      this.$emit('update:page', this.type);
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

        > li {
            min-width: 38px;
            min-height: 38px;
            margin: 23px 4vw 0 4vw;

            > span {
                padding-top: 4px;
            }
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
        padding-top: 10px;

        > li {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $color-d;
            margin: 0 10px;

            &.selected {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: $color-highlight;
            }
        }
    }
</style>