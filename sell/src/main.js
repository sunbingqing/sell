import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

// 路由器需要一个根组件
let app = Vue.extend(App);

// 创建一个路由器实例
let router = new VueRouter({
    linkActiveClass: 'active'
});

// 定义路由规则
router.map({
    '/goods': {
        component: goods
    },
    '/ratings': {
        component: ratings
    },
    '/seller': {
        component: seller
    }
});

// 现在我们可以启动应用了！
// 路由器会创建一个 app 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(app, '#app');

router.go('/goods');