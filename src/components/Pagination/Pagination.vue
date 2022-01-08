<template lang="">
  <div class="pagination">
    <ButtonGroup
    v-slot:default="slotProps"
    >
      <Button
      class="pagination-head"
      @click="firstButton.click"
      :disabled="firstButton.disabled || !beforePage"
      >{{firstButton.text}}</Button>
      <Button class="pagination-spcaer" v-if="beforePage && beforePage.pageNum !== start || currentPage.pageNum !== start" :disabled="true">{{spacer}}</Button>
      <Button @click="setPage(beforePage.pageNum)" v-if="beforePage">{{beforePage.pageNum}}</Button>
      <Button :disabled="true">{{currentPage.pageNum}}</Button>
      <Button @click="setPage(afterPage.pageNum)" v-if="afterPage">{{afterPage.pageNum}}</Button>
      <Button class="pagination-spcaer" v-if="afterPage && afterPage.pageNum !== total || currentPage.pageNum !== total" :disabled="true">{{spacer}}</Button>
      <Button
      class="pagination-tail"
      @click="lastButton.click"
      :disabled="lastButton.disabled || !afterPage"
      >{{lastButton.text}}</Button>
    </ButtonGroup>
  </div>
</template>
<script setup lang="ts">
import { ref,reactive, computed, onMounted } from "vue";
import Button from '@components/Pagination/Button.vue'
import ButtonGroup from '@components/Pagination/ButtonGroup.vue'

class Page{
  pageNum: number
  constructor(pageNum: number) {
    this.pageNum = pageNum
  }
}
class ButtonEle {
  text: string | number
  disabled: boolean
  click: Function
  pageNum ?: number
  constructor(text: string, disabled: boolean, click: Function, pageNum ?: number) {
    this.text = text
    this.disabled = disabled
    this.click = click
    this.pageNum = pageNum
  }
}

const slotProps = ref(null)
const start = ref(1)
const total = ref(10)
const pageNum = ref(1)
const spacer = ref('...')
const pages: Page[] = reactive<Page[]>([])
for (let i = start.value; i <= total.value; i++) {
  pages.push(new Page(i))
}
const currentPageIndex = computed<number>(() => pages.findIndex(ele => ele.pageNum === pageNum.value))
const currentPage = computed<Page>(() => pages[currentPageIndex.value])
const beforePage = computed<Page | null>(() => (currentPageIndex.value - 1) >= 0? pages[currentPageIndex.value - 1] : null)
const afterPage = computed<Page | null>(() => ((currentPageIndex.value + 1) < pages.length) ? pages[currentPageIndex.value + 1] : null)
function setPage(num: number) {
  if(num < start.value) return
  if(num > total.value) return
  pageNum.value = num
}
function toAfterPage() {
  setPage(pageNum.value + 1)
}
function toBeforePageA() {
  setPage(pageNum.value - 1)
}

const firstButton = reactive<ButtonEle>(new ButtonEle(
  'Head',
  false,
  () => {setPage(1)}
))
const lastButton = reactive<ButtonEle>(new ButtonEle(
  'Tail',
  false,
  () => {setPage(pages[pages.length - 1].pageNum)}
))

onMounted(() => {
  
})


</script>
<style lang="sass">

@media screen and (max-width: 410px)
  .pagination
    margin-top: 15px
</style>