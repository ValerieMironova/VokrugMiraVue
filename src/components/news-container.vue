<template>
    <div class="news-container">
        <h1 class="news-container__title">{{ title }}</h1>
        <div class="news-container__content">
            <slot></slot>
        </div>
        <p v-if="author" class="news-container__author">{{author}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            author: String
        },
        name: "news-container"
    }
</script>

<style lang="scss">
    .news-container {
        background-color: white;
        padding: 20px;

        &__title{
            font-size: 30px !important;
            line-height:30px !important;
            color: black;
        }

        &__content {
            padding-left: 20px;
            margin: 0 auto;
        }

        &__author{
            font-size: 14px;
            font-style: italic;
        }
    }
</style>