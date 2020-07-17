<template>
    <div>
        <ol>
            <li>
                <IconWithBorder :name=" 'dog3' "/>
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
        </ol>
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

</style>