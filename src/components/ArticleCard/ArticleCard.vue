<template>
    <div class="article-card">
        <h3 class="article-card-title">
            {{props.card.title}}
        </h3>
        <p class="article-card-introduce">
            {{props.card.introduce.length > 30 ? props.card.introduce.substring(0, 29) + '......' : props.card.introduce}}
        </p>
    </div>
</template>
<script lang="ts" setup>
import { shallowReactive } from 'vue';
import ArticleCard from '@/interface/ArticleCard';

const props = defineProps<{card: ArticleCard}>()


</script>
<style lang="sass">
@import '@sass'
.article-card
    width: 260px
    height: 200px
    border-radius: 8px
    scroll-snap-align: center
    background: $blueberry300
    border: 1px solid $blueberry700
    box-shadow: -1px 2px 3px $silver300, inset 0px -2px 3px $blueberry500
    transition-property: box-shadow, transform
    transition-duration: 0.25s
    user-select: none
    padding-left: 24px
    cursor: pointer

    +setFlex(center, flex-start, column)
    .article-card-title
        +setFont(500, 24px, $silver100)
        width: 60%
        line-height: 26px
    .article-card-introduce
        margin-top: 10px
        +setFont(400, 12px, $silver100)
        width: 80%
    &:hover 
        transform: translate(4px, -4px)
        box-shadow: -4px 4px 5px $silver300
</style>