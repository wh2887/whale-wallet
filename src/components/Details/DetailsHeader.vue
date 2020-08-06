<template>
    <div class="surplus-wrapper">
        <div>
            <span>7月结余</span>
            <span>￥ 1500.00</span>
        </div>
        <Tab :value.sync="record.type" :data-source="recordTypeList" class-prefix="header"
             @click.native="getType(record.type)"/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import defaultRecordList from '@/constants/defaultRecordList';
  import Tab from '@/components/Money/Tab.vue';
  import recordTypeList from '@/constants/recordTypeList';


  @Component({
    components: {Tab}
  })
  export default class DetailsHeader extends Vue {
    @Prop() type!: string;
    record = defaultRecordList;
    recordTypeList = recordTypeList;


    getType(value: string) {
      this.$emit('update:value', value);
    }

  }
</script>

<style lang="scss" scoped>

    .surplus-wrapper {
        width: 90vw;
        height: 15vh;
        background: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;

        > :first-child {
            display: flex;
            flex-direction: column;
            margin-top: 10px;

            > :first-child {
                font-size: 0.6em;
            }

            > :last-child {
                font-size: 1em;
            }
        }

        .header-tab-item {

        }


    }

</style>