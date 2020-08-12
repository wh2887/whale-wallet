<template>
    <Layout class-prefix="more">
        <MoreList setting-name="设置预算" @click.native="setMonthlyBudget" class="more-list"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import MoreList from '@/views/More/MoreList.vue';

  @Component({
    components: {MoreList}
  })
  export default class More extends Vue {
    setMonthlyBudget() {
      const monthlyBudget = window.prompt('请输入您的月预算：');
      if (monthlyBudget === null) return;
      this.$store.state.monthlyBudget = parseInt(monthlyBudget);
    }
  }
</script>

<style lang="scss" scoped>
    .more-wrapper ::v-deep {
        > .more-content {
            display: flex;
            align-items: center;
            flex-direction: column;
            > .more-list{
                width: 100%;
                display: flex;
                justify-content: center;

            }
        }
    }
</style>