<template>
    <div>
        <header-component></header-component>
        <login-popup></login-popup>
        <register-popup></register-popup>
        <main>
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

<style>

</style>
