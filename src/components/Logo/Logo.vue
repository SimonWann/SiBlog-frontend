<template>
    <div class="logo">
        <router-link :to="link.url"><span>{{link.name}}</span></router-link>
    </div>
</template>
<script lang="ts" setup>
import Link from '@/interface/Link'

const props = defineProps<{
    link: Link
}>()

</script>
<style lang="sass">
    @import '@sass'
    .logo
        a
            color: $silver100
            transition: color 0.25s
            &:hover
                color: darken($silver100, 0.5)
</style>