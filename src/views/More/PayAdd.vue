<template>
    <Layout>
        <div class="payadd-wrapper">
            <Header>
                <span>添加支出分类</span>
                <button class="add" @click="submit">确定</button>
            </Header>
            <div class="input">
                <IconWithBorder :name="selectedIcon"/>
                <label>
                    <input type="text" placeholder="自定义输入名字，限三个字">
                </label>
            </div>
            <div class="list-wrapper">
                <div class="icon-list" >
                    <IconWithBorder :name="name" v-for="(name,index) in iconName" :key="index" @click.native="x(name)"/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                    <IconWithBorder/>
                </div>
            </div>

        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import IconWithBorder from '@/components/IconWithBorder.vue';

  @Component({
    components: {Header, IconWithBorder}
  })
  export default class PayAdd extends Vue {
    iconName: string[] = ['dog3', 'breakfast', 'lunch', 'sancan', 'traffic', 'amusement', 'chufang', 'travel', 'close', 'girlfriend'];
    selectedIcon = ''
    x(value: string){
      this.selectedIcon = value
    }
    submit() {
      console.log('x');
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/reset.scss";
    @import "~@/assets/styles/helper.scss";

    .payadd-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;

        > .input {
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
    }

</style>