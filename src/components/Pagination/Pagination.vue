<template lang="">
  <div class="pagination">
    
  </div>
</template>
<script setup lang="ts">
import { ref,reactive, computed } from "vue";

const pageNum = ref<number>(1)
const total = ref<number>(10)
const currentPage = computed<Page>(() => generatePage(pageNum.value))


interface Page{
  pageNum: number,
  // 遍历两次，
  lastPage: Page,
  nextPage: Page,
  isFirst: boolean,
  isLast: boolean
}
function beforePageNum(lastPage: Page): number {
  return PageNum(lastPage, 'lastPage')
}
function afterPageNum(nextPage: Page): number {
  return PageNum(nextPage, 'nextPage')
}
function PageNum(Page: Page, direction: string): number {
  let result : number = 0
  while(Page != null) {
    if(result >= 2) break
    result++ 
    Page = direction === 'lastPage' ? Page.lastPage : Page.nextPage
  }
  return result
}
function generatePage(pageNum: number): Page {
  const lastPage = generatePage(pageNum - 1)
  const nextPage = generatePage(pageNum + 1)
  return {
    pageNum,
    lastPage,
    nextPage,
    isFirst: lastPage == null,
    isLast: nextPage == null
  }
}

</script>
<style lang="sass">
  
</style>