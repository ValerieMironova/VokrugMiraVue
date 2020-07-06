<template>
  <header class="header">
    <div class="header__logo-wrap">
      <router-link to="/" class="header__logo">
        <img class="header__logo-img" src="@/assets/img/logo-2.png" alt="Вокруг Мира">
      </router-link>
    </div>
    <div class="header__bottom">
      <div class="header__menu" v-for="(title,idx) in titles" v-bind:key="idx">
        <a class="header__menu-title" :href="title.link">{{title.heading}}</a>
      </div>
      <div class="header__form">
        <input type="search" class="header__form-input" name="text" required placeholder="Поиск по сайту">
        <input type="submit" class="header__form-input" value="🔍">
      </div>
      <button class="header__login-popup-open" v-on:click="openPopup">Войти</button>
    </div>
  </header>
</template>

<script>


    export default {
      data: function () {
        return {
          titles: [
            {
              link: '#',
              heading: 'Наука'
            },
            {
              link: '#',
              heading: 'Путешествия'
            },
            {
              link: '#',
              heading: 'Еда'
            },
            {
              link: '#',
              heading: 'История'
            },
            {
              link: '#',
              heading: 'Фото дня'
            },
            {
              link: '#',
              heading: 'Люди'
            },
            {
              link: '#',
              heading: 'Животные'
            }
          ]
        }
      },
      name: "header",

      methods: {
      openPopup: function () {
          this.$eventBus.$emit( 'openLoginPopup')
      }
    }
    }

</script>

<style lang="scss">
  .header {
    margin: 0;
    min-height: 150px;

    &__logo {
      margin: auto;

      &-wrap {
        background: linear-gradient(to right, orangered, tomato);
        margin: 0;
        padding: 10px;
        display: flex;
        height: 100px;
      }

      &-img {
        width: 100px;
        height: 100px;
      }
    }

    &__bottom {
      color: white;
      background-color: black;
      display: flex;
      justify-content: space-around;
      padding: 10px;
    }

    &__menu {
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
      &-title {
        text-transform: uppercase;
        color: white;
        text-decoration: none;
        padding: 10px;

        &:hover {
          background-color: tomato;
        }
      }
    }

    &__form {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid;
      &-input {
        all: unset;
      }
    }

    &__login-popup-open{
      background: none;
      border: none;
      outline: none;
      color: orangered;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
      padding: 10px 5px;
      &:hover {
        color: black;
        background-color: orangered;
        cursor: pointer;
      }
      &:active {
        border: 1px solid black;
      }
    }
  }
</style>
