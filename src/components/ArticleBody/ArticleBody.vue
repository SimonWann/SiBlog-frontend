<template lang="">
  <div class="article-body">
    <div class="article-body-container" v-html="article"></div>
  </div>
</template>
<script lang="ts" setup>
import { marked } from 'marked'
import { onMounted, ref } from 'vue'

const props = defineProps<{article: string}>()
const article = ref<string>('<div></div>')
onMounted(() => {
  article.value = marked.parse(props.article)
})

</script>
<style lang="sass">
@import '@sass'
.article-body
  max-width: 64ch
  font-size: 16px
  .article-body-container
    font-size: 16px
    h1
      +setFont(700, 1.8em, $cocoa900)
      margin: 3em 0 1.5em
    h2
      +setFont(700, 1.5em, $cocoa900)
      margin: 2em 0 1em
    h3
      +setFont(700, 1.2em, $cocoa900)
      margin: 2em 0 1em
    h4
      +setFont(700, 1em, $cocoa900)
      margin: 1.5em 0 0.75em
    pre
      margin: 0.45em 0
      padding: 0.875em
      background: transparentize($cocoa100, 0.9) 
      border-radius: 4px
      overflow-x: auto
      code
        +setFont(400, 1em, $cocoa500)
        line-height: 1.5rem
    strong
      +setFont(400, 1em, $cocoa900)
    p
      +setFont(400, 1em, $cocoa500)
    a
      +setFont(400, 1em, $cocoa300)
      border-bottom: 1px solid $cocoa500
      transition-duration: 0.25s
      transition-property: color, border
      &:hover
        color: $cocoa700
        border-bottom: 1px solid $cocoa900
    ul
      margin-bottom: 1.25em
      li
        +setFont(400, 1em, $cocoa900)
        margin: 0.5em 0 
        &::before
          content: '-'
          padding-right: 0.875em
</style>