<template>
    <div class="home">
        <section class="home-top">
            <Nav></Nav>
            <div class="profile-container">
                <Profile
                :profile="profile"
                ></Profile>
            </div>
        </section>
        <section class="home-bottom">
            <ArticleListVue
            :list="articleList"
            ></ArticleListVue>
        </section>
    </div>
</template>
<script setup lang="ts">
import Nav from '@components/Nav/Nav.vue'
import Profile from '@components/Profile/Profile.vue'
import ArticleListVue from '@/components/ArticleList/ArticleList.vue';
import { shallowReactive } from 'vue';
import profileInterface from '@/components/Profile/profile'
import ArticleCard from '@/interface/ArticleCard'

const profile = shallowReactive<profileInterface>({
    nickname: 'Simooo',
    gender: 'male',
    introduce: '人们在湿滑的路面跌倒，流血，摔断手，扭伤脚；民宅和工厂起火。一切都在今天发生：霜，热，雾，光，雨，虹，雪，血，火。这就是春天。',
    avatar: undefined
})
const articleList = shallowReactive<ArticleCard[]>([
    {
        title: 'Nest.js 中的provider',
        introduce: 'Providers 是 Nest 中的基本概念。Providers 主要作为“依赖”被注入到某处.',
    },
    {
        title: 'Nest.js 中的provider',
        introduce: 'Providers 是 Nest 中的基本概念。Providers 主要作为“依赖”被注入到某处.',
    },
])

</script>
<style lang="sass">
    @import '@sass'
    .home
        
        min-height: 400px
        box-sizing: border-box
        overflow: hidden
        .home-top
            background: $strawberry300
            +setFlex(flex-start, space-between, column)
            .profile-container
                +setFlex(center)
</style>