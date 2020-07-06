import MainComponent from "./pages/home.vue";
import Vue from 'vue';
import Router from 'vue-router';
import News1 from './pages/news1';
import News2 from './pages/news2';
import News3 from './pages/news3';
import News4 from './pages/news4';
import News5 from './pages/news5';
import News6 from './pages/news6';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainComponent
        },
        {
            path: '/news/1',
            component: News1
        },
        {
            path: '/news/2',
            component: News2
        }, {
            path: '/news/3',
            component: News3
        },
        {
            path: '/news/4',
            component: News4
        },
        {
            path: '/news/5',
            component: News5
        },
        {
            path: '/news/6',
            component: News6
        },
    ],
    /* eslint-disable no-unused-vars */
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
