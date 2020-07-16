<template>
    <Layout class-prefix="layout" :money-to-layout="show" @getReply="toggle">
        <div class="moneyBG" v-show="show">
            <div>xxx</div>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
            <span>999</span><br/>
        </div>
    </Layout>
</template>

<script lang="js">
  export default {
    data() {
      return {
        show: false,
      }
    },
    methods: {
      toggle(param) {
        this.show = param
      }
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