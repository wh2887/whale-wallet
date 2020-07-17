<template>
    <Layout :money-to-layout="show" @getReply="toggle">
        Details.vue
        <Money v-show="show" class="money"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Money from '@/views/Money.vue';

  @Component({
    components: {Money}
  })
  export default class Details extends Vue {

    show = true;

    toggle(param: boolean) {
      this.show = param;
    }
  }
</script>

<style lang="scss" scoped>
    .money{

    }
</style>