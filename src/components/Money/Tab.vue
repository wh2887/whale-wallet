<template>
    <ul class="type-wrapper">
        <li v-for="item in dataSource" :key="item.value"
            :class="liClass(item)"
            @click="selectType(item)"
        >
            {{item.text}}
        </li>
    </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = { text: string; value: string }

  @Component
  export default class Type extends Vue {
    @Prop({required: true, type: String}) readonly value!: string;
    @Prop() dataSource!: DataSourceItem[];
    @Prop(String) readonly classPrefix!: string;

    liClass(item: DataSourceItem) {
      return {
        selected: item.value === this.value,
        [this.classPrefix + '-tab-item']: this.classPrefix
      };
    }


    selectType(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .type-wrapper {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        line-height: 2.5em;
        margin: 9px auto 0;
        border: 1px solid $color-highlight;
        border-radius: 10px;

        li:first-child {
            border-radius: 10px 0 0 10px;
        }

        li:last-child {
            border-radius: 0 10px 10px 0;
        }

        > li {
            padding: 0 35px 0 35px;
            white-space: nowrap;

            &.selected {
                background: darken($color-highlight, 6%);
                color: white;
            }
        }


    }
</style>