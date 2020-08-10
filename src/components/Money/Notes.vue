<template>
    <div class="notes-wrapper">
        <label>
            <!--            <input type="text" placeholder="添加备注" :value="value" @input=" value = $event.target.value">-->
            <input type="text" placeholder="添加备注" v-model="value">
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';


  @Component
  export default class Notes extends Vue {
    @Prop({default: '', type: String}) recordNote!: string;
    value = '';


    @Watch('value')
    onValueChanged() {
      this.$emit('update:value', this.value);
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .notes-wrapper {
        position: relative;
        margin-top: 20px;

        > label {

            width: 87vw;

            > input {
                width: 100%;
                font-size: 1.6em;
                line-height: 1.6em;
                padding: 0 15px;
                border: 1px solid $color-d;
                border-radius: 15px;

                &::placeholder {
                    text-align: center;
                    color: $color-d;
                }
            }

        }
    }

</style>