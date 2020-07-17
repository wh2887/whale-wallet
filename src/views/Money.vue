<template>
    <Layout class-prefix="layout" :state="state">
        <div class="moneyBG">
            <Type/>
            <Output/>

            <!--            <div>Output:输出</div>-->
            <!--            <div>Tags:标签分类</div>-->
            <!--            <div>Notes:备注</div>-->
            <!--            <div>NumberPad:数字按钮</div>-->
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Money/Type.vue';
  import Output from '@/components/Money/Output.vue';

  @Component({
    components: {Output, Type}
  })
  export default class Money extends Vue {
    //控制 Nav 是否出现  false nav出现  true nav消失
    state = true;
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
        height: 50vh;
        > .moneyBG {
            height: 88vh;
            overflow: hidden;
            background: #ffffff;
            border-radius: 36px 36px 0 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }
</style>
<style lang="scss" scoped>

</style>