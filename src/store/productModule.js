import axios from "axios"

export const productModule = {
    state() {
        return {
            products: [],
            reviews: [],
            deliveries: [],
            errors: [],
            product: {},
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProduct(state) {
            return state.product
        },
        getReviews(state) {
            return state.reviews
        },
        getDeliveries(state) {
            return state.deliveries
        },
        getErrors(state) {
            return state.errors
        },
    },
    mutations: {
        setProducts(state, products) {
            return state.products = products
        },
        setProduct(state, product) {
            return state.product = product
        },
        setReviews(state, reviews) {
            return state.reviews = reviews
        },
        setDeliveries(state, deliveries) {
            return state.deliveries = deliveries
        },
        setErrors(state, errors) {
            return state.errors = errors
        },
    },
    actions: {
        async productsQuery(context) {
            try {
                const response = await axios.get(import.meta.env.VITE_APP_API_URL + "/products")

                const products = response.data.data

                context.commit('setProducts', products)
            } catch(exception) {
                console.log(exception)
            }
        },
        async reviewsQuery(context) {
            try {
                const response = await axios.get(import.meta.env.VITE_APP_API_URL + "/reviews")

                const reviews = response.data.data

                context.commit('setReviews', reviews)
            } catch(exception) {
                console.log(exception)
            }
        },
        async deliveriesQuery(context) {
            try {
                const response = await axios.get(import.meta.env.VITE_APP_API_URL + "/deliveries")

                const deliveries = response.data.data

                context.commit('setDeliveries', deliveries)
            } catch(exception) {
                console.log(exception)
            }
        },
        async checkoutQuery(context, data) {
            try {

                const response = await axios.post(import.meta.env.VITE_APP_API_URL + "/orders", data)

                context.commit('setProduct', response.data.data)

                return response.data.data

            } catch(exception) {

                context.commit('setErrors', exception.response.data.errors)

                return false

            }
        },
        async storeReviewQuery(context, data) {
            try {

                const response = await axios.post(import.meta.env.VITE_APP_API_URL + "/reviews", data)

                return response.data.data

            } catch(exception) {

                context.commit('setErrors', exception.response.data.errors)

                return false

            }
        },
        async storeSubscribeQuery(context, data) {
            try {

                const response = await axios.post(import.meta.env.VITE_APP_API_URL + "/subscribes", data)

                return response.data.data

            } catch(exception) {

                context.commit('setErrors', exception.response.data.errors)

                return false

            }
        },
        async getProductQuery(context, data) {
            try {

                const response = await axios.get(import.meta.env.VITE_APP_API_URL + `/products/${data.id}`)

                context.commit('setProduct', response.data.data)

                return response.data.data

            } catch(exception) {

                context.commit('setErrors', exception.response.data.errors)

                return false

            }
        },
    },
    namespaced: true
}