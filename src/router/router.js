import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import CatalogPage from "@/pages/CatalogPage.vue";
import FavoritesPage from "@/pages/FavoritesPage.vue";
import CartPage from "@/pages/CartPage.vue";
import SuccessPage from "@/pages/SuccessPage.vue";
import RejectPage from "@/pages/RejectPage.vue";
import ReviewPage from "@/pages/ReviewPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
// import PaymentPage from "@/pages/PaymentPage.vue";
// import PaymentCartPage from "@/pages/PaymentCartPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
        meta: { scrollToTop: true }
    },
    {
        path: '/about',
        component: AboutPage,
        meta: { scrollToTop: true }
    },
    {
        path: '/catalog',
        component: CatalogPage,
        meta: { scrollToTop: true }
    },
    {
        path: '/favorites',
        component: FavoritesPage
    },
    {
        path: '/cart',
        component: CartPage,
        meta: { scrollToTop: true }
    },
    {
        path: '/success',
        component: SuccessPage
    },
    {
        path: '/reject',
        component: RejectPage
    },
    {
        path: '/review',
        component: ReviewPage
    },
    {
        path: '/products/:id',
        component: ProductPage
    },
    // {
    //     path: '/:type/:id/payment',
    //     component: PaymentPage
    // },
    // {
    //     path: '/cart/payment',
    //     component: PaymentCartPage
    // },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {

        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        }

        if (to.meta.scrollToTop) {
            return { top: 0, behavior: 'smooth' };
        }

        return { left: 0, top: 0 };
    }
})

export default router