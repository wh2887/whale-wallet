<template>
    <div>
        <div class="input">
            <IconWithBorder :name="selectedIcon"/>
            <label>
                <input type="text" maxlength="10" placeholder="自定义输入名字，限 2 个字" :value="value"
                       @input="value = $event.target.value">
                <button class="delete" v-if="deleteToggle" @click="removeTag">
                    <Icon name="delete"/>
                </button>
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
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import IconWithBorder from '@/components/IconWithBorder.vue';
  import store from '@/store';

  @Component({
    components: {IconWithBorder}
  })
  export default class TagForm extends Vue {
    @Prop({required: true}) iconName!: string[];
    @Prop({required: true}) selectedIcon!: string;
    @Prop({required: true}) deleteToggle!: boolean;
    @Prop() tag!: Tag;
    value = '';

    created() {
      if (this.tag != undefined) {
        this.value = this.tag.tagText;
      }
    }

    @Watch('value')
    OnValueChanged() {
      this.$emit('update:input', this.value);
    }

    select(name: string) {
      this.$emit('update:selectedIcon', name);
    }

    removeTag() {
      if (this.tag) {
        this.$store.commit('removeTag', this.tag.id);
        // 删除失败怎么办？
      }
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
        padding: 4px 5px;
        @extend %bottomShadow;

        > label {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            > input {
                border: none;
                background: inherit;
                font-size: 1.5em;

                &::placeholder {
                    font-size: 0.7em;
                    color: $color-nearblack;
                }
            }

            > .delete {
                border: none;
                background: inherit;
                font-size: 1.5em;
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