<template>
    <div class="wrapper">
        <div class="content">
            1
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Nav from '@/components/Nav.vue';

  @Component({
    components: {Nav}
  })
  export default class Layout extends Vue {

  }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;

        > .content {
            border: 1px solid red;
            flex-grow: 1;
            overflow: auto;
        }

    }
</style>