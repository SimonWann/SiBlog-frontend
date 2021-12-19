<template lang="">
  <div class="button-group">
    <slot :items="item"></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const item = ref<string[]>(["hello", "asd"])

</script>
<style lang="sass" >
@import '@sass'
.button-group
  +setFlex(flex-start)
  .button-group-item
    border-radius: 0
    // border-left-width: 0
    border-right-width: 0
    &:first-child
      border-radius: 6px 0 0 6px
    &:last-child
      border-radius: 0 6px 6px 0
      border-right-width: 1px
</style>