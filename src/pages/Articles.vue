<template>
    <div class="articles">
        <section class="articles-top">
            <Nav></Nav>
        </section>
        <main class="articles-main">
            <ArticleBody
            :article="testArticle"
            ></ArticleBody>
        </main>
    </div>
</template>
<script setup lang="ts">
import Nav from '@components/Nav/Nav.vue'
import ArticleBody from '@components/ArticleBody/ArticleBody.vue'
import { ref } from 'vue'



const testArticle = ref('# Providers' +
    '\nProviders 是 Nest 中的基本概念。Providers 主要作为“依赖”被注入到某处。这样的话，对象与对象之间的联系能够灵活变化（解藕），由对象实例连接起来的函数能被灵活传入到 Nest 运行时系统中。\t' +
    '\n## Service' +
    '\n * List1' +
    '\n * List2' +
    '\n * List3\n' +
    '\nService 用于响应 数据存储 与 数据获取，由 Controller 调用。Service 是 Provider 的典型运用。'+
    '\n*** @injdectable() *** 装饰器用来将 Service 纳入到 Nest IoC 容器的管理中。'+
    '\n## 依赖注入'+
    '\n ```' +
    '\n const a = 1' +
    '\n const b = 3' +
    '\n const c = 2' +
    '\n ```' +
    '\n一个类 A 中某个属性需要用到另一个类 B 。这一段描述被称为 A 类 依赖 B 类。若 A 类内部自己初始化 B 类，则导致代码死板，后期难以维护。依赖注入则是将外部初始化好的 B类实例通过传参的形式直接传入到 A 类中。Nest 中，Service 实例会被 Nest 创建并传入（如果实例因为在某处被依赖而早已存在则返回这个已经存在的实例） 控制器的构造器中。' +
    '\n## Scopes（作用域）' +
    '\nProviders 的作用域指生命周期。这个生命周期与应用的生命周期同步。引用启动时，所有依赖被处理好（也就是说所有provider 被实例化）。应用关闭时，所有 provider 被销毁。' +
    '\n## 自定义 providers' +
    '\nNest 内置的 IoC 容器处理 providers 间的关系。这项特性与依赖注入特性相联系，但它更强大。Nest中可以使用基本类型，类，同步或异步工厂来作为 providers.' +
    '\n## 可选 providers' +
    '\n [linnnnnnnkkkkkk](https://baidu.com)' +
    '\n在不需要providers的场景下，可以通过在构造器中使用 *** @Optional *** 装饰器来让optional变为可选。' +
    '\n## 基于属性的依赖' +
    '\n*** @Inject() *** 装饰器可以让子类快速注入providers 而避免调用 *** super() *** 的繁琐步骤。' +
    '\n## Provider 注册' +
    '\nservice 需要通过 module 注入，才能被 nest 进行依赖注入。')

</script>
<style lang="sass">
@import '@sass'
.articles
    .articles-top
        padding: 4px 0
        background: $strawberry300
        border-bottom: 1px solid $strawberry900
        box-shadow:  0px 0px 5px $strawberry300, inset -1px -2px 3px $strawberry100
        border-radius: 0 0 4px 7px
        width: 100%
        position: fixed
    .articles-main
        +setFlex(center)
        padding: 2.5rem
</style>