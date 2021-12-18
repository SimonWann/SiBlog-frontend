<template>
    <div class="profile">
        <div class="profile-avatar">
            <img v-if="profile.avatar" :src="profile.avatar" alt="" class="profile-avatar-img">
            <span v-else class="profile-avatar-text">{{profile.nickname?.substr(0, 1) ?? 'N'}}</span>
        </div>
        <h3 class="profile-nickname">
            {{profile.nickname}}
        </h3>
        <p class="profile-introduce">
            {{profile.introduce}}
        </p>
    </div>
</template>
<script lang="ts" setup>
import profileInterface from '@/components/Profile/profile'
import { toRef, toRefs } from 'vue'
    const props = defineProps<{profile: profileInterface}>()
    const {profile} = toRefs(props)
</script>
<style lang="sass">
    @import '@sass'
    .profile
        width: 330px
        padding: 70px 0 70px 
        +setFlex(center, flex-start, column)
        .profile-avatar
            width: 64px
            height: 64px
            background: $blueberry100
            border: 1px solid $blueberry700
            box-shadow: -1px 2px 2px $bubblegum700
            transition-property: box-shadow, transform
            transition-duration: 0.3s
            transition-timing-function: ease-in-out
            border-radius: 32px
            user-select: none
            margin-bottom: 16px
            overflow: hidden
            +setFlex(center, center)
            img
                width: 100%
                height: 100%
            .profile-avatar-text
                +setFont(400, 34px, $blueberry700)
            &:hover
                box-shadow: -3px 4px 2px $bubblegum900
                transform: translate(4px, -4px)
                // border: 2px solid $cocoa700
        .profile-nickname
            +setFont(700, 40px, $silver100)
        .profile-introduce
            margin-top: 10px
            +setFont(400, 13px, $silver100)
</style>