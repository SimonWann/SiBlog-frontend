<template lang="">
  <div class="article-list">
    <ArticleCard 
    v-for="val in props.list"
    :card="val"
    />
  </div>
</template>
<script setup lang="ts">
import ArticleCardInterface from '@/interface/ArticleCard'
import ArticleCard from '@components/ArticleCard/ArticleCard.vue'

const props = defineProps<{list: ArticleCardInterface[]}>()


</script>
<style lang="sass">
@import '@sass' 
.article-list
  margin: 0 auto
  margin-top: 80px
  display: grid
  padding-bottom: 40px
  grid-template-columns: 1fr 1fr 1fr
  width: 1000px
  // grid-template-rows: 2
  grid-column-gap: 30px
  grid-row-gap: 20px
@media screen and (max-width: 480px)
  .article-list
    width: 89vw
    overflow: auto
    padding: 4px 0px 10px 4px
    scroll-snap-type: x mandatory
    &::-webkit-scrollbar
      display: none
</style>