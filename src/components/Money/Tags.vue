<template>
    <div>
        <ol class="tags-list">
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
                <span>宠物</span>
            </li>
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </ol>
        <div class="dots">
            <span></span><span></span><span></span>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';

  @Component({
    components: {IconWithBorder}
  })
  export default class Tags extends Vue {

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";
    .tags-list {
        width: 87vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        > li {
            min-width: 38px;
            min-height: 38px;
            margin: 23px 4vw 0 4vw;

            > span {
                padding-top: 4px;
            }
        }

        > :last-child {
            margin-right: auto;
        }

        > i {
            min-width: 38px;
            margin: 0 4vw;
        }
    }

    .dots {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        > :nth-child(1){
            margin-right: 10px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $color-d;
        }
        > :nth-child(2){
            margin-right: 10px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: $color-highlight;
        }
        > :nth-child(3){
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $color-d;
        }
    }
</style>