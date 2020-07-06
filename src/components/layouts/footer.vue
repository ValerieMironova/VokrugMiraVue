<template>
  <footer class="footer">
    <div class="footer__social">
      <p class="footer__social-title"><b>Вокруг Мира</b> в социальных сетях:</p>
      <a class="footer__social-btn" href='#' title="Вконтакте"><img class="footer__social-btn_img" src="@/assets/img/vk.png" alt="Вконтакте"></a>
      <a class="footer__social-btn" href="#" title="Facebook"><img  class="footer__social-btn_img" src="@/assets/img/facebook_logos_PNG19748.png" alt="Фейсбук"></a>
      <a class="footer__social-btn" href="#" title="Instagram"><img class="footer__social-btn_img" src="@/assets/img/instagram2.0.png" alt="Инстаграм"></a>
    </div>

    <ul class="footer__info">
        <li class="footer__info_li"><a class="footer__info_link" href="#">О компании</a></li>
        <li class="footer__info_li"><a class="footer__info_link" href="#">Контакты</a></li>
        <li class="footer__info_li"><a class="footer__info_link" href="#">Фестиваль</a></li>
        <li class="footer__info_li"><a class="footer__info_link" href="https://www.rgo.ru/ru">Русское географическое общество</a></li>
    </ul>
  </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style lang="scss">

  .footer {
    padding: 10px;
    margin: 0;
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-around;
      &__social-btn {
        text-decoration: none;
        &_img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }



    &__info{
      list-style: none;
        &_link {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          &:hover {
            color: orangered;
          }
        }

    }
  }

</style>
