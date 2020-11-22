import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =
    () =>
    import ('views/home/Home')
const Cart =
    () =>
    import ('views/cart/Cart')
const Profile =
    () =>
    import ('views/profile/Profile')
const Category =
    () =>
    import ('views/category/Category')
const Detail =
    () =>
    import ('views/detail/Detail')

Vue.use(VueRouter)

const routes = [{
    path: '/category',
    component: Category
}, {
    path: '/home',
    component: Home
}, {
    path: '/profile',
    component: Profile
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/detail/:iid',
    component: Detail
}]

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router