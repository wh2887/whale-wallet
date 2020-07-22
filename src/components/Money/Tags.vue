<template>
    <div>
        <ol class="tags-list">
            <li v-for="(tag) in tagDataSource" :key="tag.iconName" @click="$emit('update:icon',tag.iconName)">
                <IconWithBorder :name=" tag.iconName "/>
                <span>{{tag.tagText}}</span>
            </li>
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </ol>
        <ul class="dots">
            <li :class=" type === '1' && 'selected'" @click="getPage('1')"></li>
            <li :class=" type === '2' && 'selected'" @click="getPage('2')"></li>
            <li :class=" type === '3' && 'selected'" @click="getPage('3')"></li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';


  @Component({
    components: {IconWithBorder}
  })
  export default class Tags extends Vue {
    @Prop() tagDataSource: string[] | undefined;
    type = '1';

    getPage(type: string) {
      if (type !== '1' && type !== '2' && type !== '3') {
        throw new Error('type is unknown');
      } else {
        this.type = type;
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