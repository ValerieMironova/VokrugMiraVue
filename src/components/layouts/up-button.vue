<template>
  <div>
  <button class="up-button" type="button" v-if="show" v-on:click="toTop">
    ↑
  </button>
  </div>
</template>

<script>
    export default {
      name: "up-button",
      data: function(){
        return {
          show: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll)
      },
      destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
      },
      methods: {
        handleScroll: function () {
          this.show = window.scrollY > 500;
        },
        toTop: function () {
          window.scrollTo(0,0);
        }
      }
    }

</script>

<style lang="scss">
  .up-button {
    position: fixed;
    z-index: 1;
    padding: 0;
    bottom: 75px;
    right: 20px;
    width: 64px;
    height: 64px;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    border: 5px solid coral;
    border-radius: 50%;
    cursor: pointer;
    color: coral;
    background-color: lavender;
    outline-color: #b6aaff;
    &:hover {
      color: orangered;
      border-color: orangered;
    }
    &:active{
      outline: none;
    }
  }

</style>
