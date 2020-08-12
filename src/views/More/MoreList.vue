<template>
    <div class="more-list-wrapper">
        <ul>
            <li>
                <span>{{settingName}}</span>
                <Icon name="right"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class MoreList extends Vue {
    @Prop({required: true, type: String}) settingName!: string;
  }
</script>

<style lang="scss" scoped>
    .more-list-wrapper {
        > ul {
            width: 87%;

            > li {
                border-radius: 10px;
                background: white;
                padding: 15px 20px;
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>