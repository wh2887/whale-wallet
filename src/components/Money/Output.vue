<template>
    <div class="output-wrapper">
        <IconWithBorder :name=" updateIcon "/>
        <label>
            <input type="text" :value="updateOutput">
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';


  @Component({
    components: {IconWithBorder}
  })
  export default class Output extends Vue {
    @Prop() updateIcon = '';
    @Prop() updateOutput = '';

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .output-wrapper {
        font-family: Consolas monospace;
        width: 87vw;
        min-height: 45px;
        border: 1px solid $color-highlight;
        margin-top: 16px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        position: relative;
        padding: 2px 2px;

        > :nth-child(1) {
            font-size: 1.5em;
            line-height: 1.5em;
            margin-left: 4px;
            padding: 0 6px;
            border: 1px solid $color-highlight;
            border-radius: 10px;
            z-index: 3;
        }

        > :nth-child(2) {
            min-width: 40%;
            position: absolute;
            right: 10px;

            > input {
                @extend %clearFix;
                text-align: right;
                width: 70vw;
                font-size: 1.5em;
                line-height: 1.5em;
                border: none;
            }
        }
    }
</style>