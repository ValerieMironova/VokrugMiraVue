<template>
    <div class="default-template">
        <header-component></header-component>
        <login-popup></login-popup>
        <register-popup></register-popup>
        <main class="default-template__main">
            <slot>
            </slot>
        </main>
        <footer-component></footer-component>
        <up-button></up-button>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/layouts/header";
    import FooterComponent from "@/components/layouts/footer";
    import UpButton from "@/components/layouts/up-button";
    import LoginPopup from "@/components/login-popup";
    import RegisterPopup from "@/components/register-popup";

    export default {
        name: "default",
        components: {
            UpButton,
            FooterComponent,
            HeaderComponent,
            LoginPopup,
            RegisterPopup,
        }
    }
</script>

<style lang="scss">
    .default-template {
        &__main {
            margin: 50px auto 30px auto;
            padding: 0;
            width: 1020px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>
