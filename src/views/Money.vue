<template>
    <div class="moneyBG">
        <Type/>
        <Output/>
        <Tags/>
        <!--            <div>Tags:标签分类</div>-->
        <!--            <div>Notes:备注</div>-->
        <!--            <div>NumberPad:数字按钮</div>-->
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Money/Type.vue';
  import Output from '@/components/Money/Output.vue';
  import Tags from '@/components/Money/Tags.vue';

  @Component({
    components: {Tags, Output, Type}
  })
  export default class Money extends Vue {
  }
</script>
<style lang="scss">
    .moneyBG {
        display: flex;
        flex-direction: column;
    }
</style>
<style lang="scss" scoped>

</style>