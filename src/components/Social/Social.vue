<template>
    <ul class="social">
        <li
        v-for="(val) in links"
        :key="val.name"
        >
            <a target="_blank" :href="val.url">
                <TwitterIcon
                v-if="val.name === 'twitter'"
                ></TwitterIcon>
                <GithubIcon
                v-else-if="val.name === 'github'"
                ></GithubIcon>
            </a>
        </li>
    </ul>
</template>
<script lang="ts" setup>
    import { ref, toRefs, shallowReactive, computed } from 'vue'
    import Link from '@/interface/Link'
    import TwitterIcon from '@svg/icons/推特_twitter.svg?component'
    import GithubIcon from '@svg/icons/github-one_github-one.svg?component'

    const props = defineProps<{
        links: Link[]
    }>()
    const { links } = toRefs<{
        links: Link[]
    }>(props);
    function findIcon(name: string) {
        let result = null
        switch (name) {
            case 'twitter':
                result = TwitterIcon
                break;
            case 'github':
                result = GithubIcon
                break;  
        }
        return result
    }
    // const renderLinks = computed(() => props.links.map(val => ({...val, icon: findIcon(val.name)})))
</script>
<style lang="sass">
@import '@sass'
.social
    +setFlex
    li
        margin-right: 8px
        svg
            path
                // fill: #fff
                // stroke: #fff
        &:last-child
            margin-right: 0
</style>