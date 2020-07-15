<template>
    <Layout>
        123
        <Nav/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Nav from '@/components/Nav.vue';

  @Component({
    components: {Nav, Layout}
  })
  export default class Money extends Vue {

  }
</script>

<style lang="scss" scoped>
</style>