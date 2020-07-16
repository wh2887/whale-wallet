<template>
    <Layout class-prefix="layout" :money-to-layout="show" @getReply="toggle">
        <div class="moneyBG" v-show="show">
            <div>Money.vue</div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Money extends Vue {
    show = true;

    toggle(param: boolean) {
      this.show = param;
    }
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;

        > .moneyBG {
            height: 88vh;
            overflow: auto;
            background: #ffffff;
            border-radius: 36px 36px 0 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        }
    }
</style>
<style lang="scss" scoped>

</style>