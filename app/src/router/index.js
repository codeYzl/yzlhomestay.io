//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用vue.use方法
Vue.use(VueRouter);
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/search",
            component: Search
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        }
    ]
})