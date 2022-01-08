<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import Loading from '@components/Loading.vue'
  import { useRouter } from "vue-router";

  const router = useRouter()
  
  onMounted(() => {
    router.beforeEach((to, from) => {
      loading.value = true
    })
    router.afterEach((to, from) => {
      loading.value = false
    })
  })
  const loading = ref<boolean>(true)
</script>

<template>
  <transition name="app-loading">
    <router-view></router-view>  
  </transition>
  <Loading
  v-if="loading"
  ></Loading>
</template>

<style lang="sass">
.app-loading-enter-active
  transition: all 0.8s
  opacity: 0
.app-loading-enter-to
  opacity: 1
.app-loading-leave-active
  transition: all 0.25s
  opacity: 1
.app-loading-leave-to
  opacity: 0
</style>
