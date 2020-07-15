<template>
    <nav>
        <div class="item">
            <Icon name="statistics"/>
            <span>报表</span>
        </div>
        <div class="item">
            <Icon name="NavAdd"/>
            <span>加一笔</span>
        </div>
        <div class="item">
            <Icon name="more"/>
            <span>更多</span>
        </div>
    </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';

  @Component({
    components: {Icon}
  })
  export default class Nav extends Vue {

  }
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;

        .item {
            width: 33.3333%;

        }
    }
</style>