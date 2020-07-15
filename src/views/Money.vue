<template>
    <Layout class-prefix="layout">
        <div class="moneyBG">
            888
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Money extends Vue {
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;

        > .moneyBG {
            height: 80vh;
            background: #ffffff;
            border-radius: 36px 36px 0 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        }
    }
</style>
<style lang="scss" scoped>

</style>