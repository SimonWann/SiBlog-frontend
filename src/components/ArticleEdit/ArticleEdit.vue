<template lang="">
  <div class="article-edit">
    
  </div>
</template>
<script setup lang="ts">
import Quill from 'quill'
import { ref, onMounted, shallowReactive, onUnmounted } from 'vue'

let quill = ref<Quill | null>(null)
const options = {
  debug: 'info',
  // modules: {
  //   toolbar: '#toolbar'
  // },
  placeholder: 'Compose an epic...',
  readOnly: true,
  theme: 'snow'
};
onMounted(() => {
  quill = ref<Quill>(new Quill('.article-edit', options))
})
onUnmounted(() => {
  quill = ref<Quill | null>(null)
})
</script>
<style lang="sass">
.article-edit
</style>