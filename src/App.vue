<template>
    <div>
        <default-layout>
            <router-view/>
        </default-layout>
    </div>
</template>

<script>
    import DefaultLayout from "./layouts/default.vue";

    export default {
        components: {
            DefaultLayout
        }
    }
</script>

<style lang="scss">
 @import "src/assets/scss/style.scss";
    body {
        padding: 0;
        margin: 0;
        font-size: 18px;
        line-height: 24px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: black;
        background-color: lavender;
        min-width: 1040px;
    }
</style>
