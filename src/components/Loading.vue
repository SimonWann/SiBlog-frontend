<template>
  <div class="loading">
    <span class="loading-symbol">
      
    </span>
  </div>
</template>
<script setup lang="ts">
  import { ref,toRefs } from 'vue'

  const props = defineProps<{
    isDone: boolean
  }>()
</script>
<style lang="sass">
  @import '@sass'
  @keyframes loading-span
    0%
      transform: scale(100%)
      background: $blueberry500
    50%
      transform: scale(160%)
      background: $blueberry700
    100%
      transform: scale(100%)
      background: $blueberry500
  .loading
    width: 100vw
    height: 100vh
    box-sizing: border-box
    position: fixed
    background: #fff
    left: 0
    top: 0
    +setFlex(center, center)
    z-index: 9999
    .loading-symbol
      animation: loading-span 1.2s infinite
      background: $blueberry700
      width: 20px
      height: 20px
      border-radius: 100px
</style>