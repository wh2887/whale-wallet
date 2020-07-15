<template>
    <Layout class-prefix="layout">
        <div class="moneyBG" v-show="show">
            <div>xxx</div>
            <span>999</span>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Money extends Vue {
    show = true;
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;

        > .moneyBG {
            height: 88vh;
            background: #ffffff;
            border-radius: 36px 36px 0 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        }
    }
</style>
<style lang="scss" scoped>

</style>