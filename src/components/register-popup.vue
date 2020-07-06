<template>
    <background-popup v-if="show">
        <div class="popup">
                <p class="popup__title">Зарегистрироваться</p>
                <button class="popup__close-button" v-on:click="closePopup"><img class="popup__close-button_img" src="@/assets/img/1b.png"></button>
                <form method="post" class="popup__post">
                    <div>
                        <text-field label-id="fullname" label-text="ФИО:"></text-field>
                        <text-field label-id="mail" label-text="Email:"></text-field>
                        <text-field label-id="password" label-text="Пароль:"></text-field>
                        <text-field label-id="password-repeat" label-text="Повторите пароль:"></text-field>
                    </div>
                    <div class="popup__order-form">
                        <label class="popup__order-form__label">
                            <input type="checkbox" name="subscription">
                            Отправляйте мне на почту все самое интересное!
                        </label>
                    </div>
                    <button class="popup__btn popup__btn-r">Зарегистрироваться</button>
                </form>
        </div>
    </background-popup>
</template>

<script>
    import BackgroundPopup from "@/components/background-popup";
    import TextField from "@/components/text-field";

    export default {
        components: {
            BackgroundPopup,
            TextField
        },
        data: function () {
            return {
                show: false
            }
        },

        mounted() {
            const self = this;
            this.$eventBus.$on('openRegistrationPopup', function () {
                self.openPopup();
            })
        },

        methods: {
            openPopup: function () {
                this.show = true;
            },

            closePopup: function () {
                this.show = false;
            }
        },
    }

</script>

<style lang="scss">
    @import "src/assets/scss/popup-style.scss";
</style>
