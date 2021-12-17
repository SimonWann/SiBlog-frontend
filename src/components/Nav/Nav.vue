<template>
    <nav class="nav">
        <Logo
        :link="homeLink"
        ></Logo>
        <Social
        :links="socialLink"
        ></Social>
    </nav>
</template>
<script lang="ts" setup>
    import Social from '@components/Social/Social.vue'
    import Logo from '@components/Logo/Logo.vue'
    import useLink from '@/components/Nav/link'

    const { homeLink, socialLink } = useLink()

</script>
<style lang="sass">
@import '@sass'
.nav
    +setFlex
    padding: 10px 14px
    
</style>