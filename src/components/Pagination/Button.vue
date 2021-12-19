<template lang="">
  <button 
  @click="click" 
  class="button button-group-item"
  :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits([
  'click'
])
function click(e: Event) {
  emit('click', e)
}
defineProps<{
  disabled ?: boolean
}>()

</script>
<style lang="sass">
@import '@sass'
.button
  border: 1px solid $strawberry500
  background: $strawberry100
  box-sizing: border-box
  min-width: 40px
  height: 30px
  padding: 0 14px
  // overflow: hidden
  border-radius: 6px
  box-shadow: 0 0 0 $strawberry500
  transition: ease 0.25s
  cursor: pointer
  user-select: none
  +setFont(400, 12px, $silver100)
  &:hover
    background: transparentize($strawberry100, 0.1) 
    box-shadow: 0 0 4px $strawberry300
  &:active
    background: $strawberry300
  &:disabled
    background: $strawberry300
    box-shadow: 0 0 0px $strawberry300
</style>