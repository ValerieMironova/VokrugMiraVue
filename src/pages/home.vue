<template>
    <main class="main">
        <div class="main__news" v-for="(part, idx) in parts" v-bind:key="idx">
            <router-link class="main__news-link" v-bind:to="part.address">
                <img :src="part.image.src" :alt="part.image.alt" class="main__news-link_img"/>
                <p class="main__news-title">{{part.title}}</p>
            </router-link>
        </div>
    </main>
</template>

<script>
    export default {
        name: "home",
        data: function () {
            return {
                parts: [
                    {
                        address: "/news/1",
                        title: "Старейшая капсула времени найдена в Европе",
                        image: {
                            src: require("@/assets/img/news-1.jpg"),
                            alt: "Старейшая капсула времени найдена в Европе"
                        }
                    },
                    {
                        address: "/news/2",
                        title: "НАУКА: НА КЛИМАТИЧЕСКИХ ФРОНТАХ",
                        image: {
                            src: require("@/assets/img/news-2.jpg"),
                            alt: "НАУКА: НА КЛИМАТИЧЕСКИХ ФРОНТАХ"
                        }
                    },
                    {
                        address: "/news/3",
                        title: "ПАРАЛЛЕЛЬНАЯ РЕАЛЬНОСТЬ: В ПОИСКАХ АТЛАНТИДЫ, ЭЛЬДОРАДО И ШАМБАЛЫ",
                        image: {
                            src: require("@/assets/img/news-3.jpg"),
                            alt: "ПАРАЛЛЕЛЬНАЯ РЕАЛЬНОСТЬ: В ПОИСКАХ АТЛАНТИДЫ, ЭЛЬДОРАДО И ШАМБАЛЫ"
                        }
                    },
                    {
                        address: "/news/4",
                        title: "Один кадр: Бразилия",
                        image: {
                            src: require("@/assets/img/news-4.jpg"),
                            alt: "Один кадр: Бразилия"
                        }
                    },
                    {
                        address: "/news/5",
                        title: "НАЙДЕНА БЛИЖАЙШАЯ К ЗЕМЛЕ ЧЕРНАЯ ДЫРА",
                        image: {
                            src: require("@/assets/img/news-5.jpg"),
                            alt: "НАЙДЕНА БЛИЖАЙШАЯ К ЗЕМЛЕ ЧЕРНАЯ ДЫРА"
                        }
                    },
                    {
                        address: "/news/6",
                        title: "ПЯТАЯ ГЕНЕРАЦИЯ: 10 ФАКТОВ О 5G",
                        image: {
                            src: require("@/assets/img/news-6.jpg"),
                            alt: "ПЯТАЯ ГЕНЕРАЦИЯ: 10 ФАКТОВ О 5G"
                        }
                    }
                ]
            }
        }
    }

</script>

<style>

</style>
