<template>
    <div class="news-image" :class="newsImageClasses">
        <img :src="src" :alt="alt"
             class="news-image__img">
        <p class="news-image__title">{{ title }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            src: String,
            alt: String,
            title: String,
            float: String,
            small: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            newsImageClasses() {
                return {
                    'news-image_left': this.float && this.float === 'left',
                    'news-image_right': this.float && this.float === 'right',
                    'news-image_small': this.small
                };
            }
        }
    }
</script>

<style lang="scss">
    .news-image {
        width: 800px;

        &_left {
            float: left;
            padding-right: 20px;
        }

        &_right {
            float: right;
            padding-left: 20px;
        }

        &_small {
            width: 500px;
        }

        &__img {
            width: 100%;
            max-height: 500px;
        }

        &__title {
            width: 100%;
        }
    }

</style>