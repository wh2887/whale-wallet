<template>
    <div>
        <div class="input">
            <IconWithBorder :name="selectedIcon"/>
            <label>
                <input type="text" placeholder="自定义输入名字，限 2 个字" v-model="tag.tagText">
            </label>
        </div>
        <div class="list-wrapper">
            <div class="icon-list">
                <IconWithBorder :name="value" v-for="(value,index) in iconName" :key="index"
                                @click.native="select(value)"/>
                <IconWithBorder/>
                <IconWithBorder/>
                <IconWithBorder/>
                <IconWithBorder/>
                <IconWithBorder/>
                <IconWithBorder/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';

  @Component({
    components: {IconWithBorder}
  })
  export default class TagForm extends Vue {
    @Prop({required: true}) iconName!: string[];
    @Prop({required: true}) selectedIcon!: string;
    @Prop({required: true}) tag!: Tag;

    select(name: string) {
      this.$emit('update:selectedIcon',name)
    }

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/reset.scss";
    @import "~@/assets/styles/helper.scss";

    .input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 16px;
        @extend %bottomShadow;

        > label {
            > input {
                border: none;
                background: inherit;
                font-size: 1.5em;

                &::placeholder {
                    font-size: 0.7em;
                    color: $color-nearblack;
                }
            }
        }
    }

    .list-wrapper {
        flex-grow: 1;
        overflow: auto;

        > .icon-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 20px 11px;

            > * {
                margin: 10px;
            }

            > :nth-last-child(1), :nth-last-child(2), :nth-last-child(3), :nth-last-child(4), :nth-last-child(5), :nth-last-child(6), {
                border: none;
            }
        }
    }
</style>