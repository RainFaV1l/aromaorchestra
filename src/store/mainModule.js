import accordionElements from "@/data/mobile"

export const mainModule = {
    state() {
        return {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            isOpenMobileMenu: false,
            accordionElements: accordionElements || [],
        }
    },
    mutations: {

        setIsOpenMobileMenu(state, value) {

            state.isOpenMobileMenu = value

        },

        setAccordionElement(state, object) {

            state.accordionElements[object.index].isOpen = object.value

        },

        setCart(state, item) {

            const isProductInCart = state.cart.some(product => product.id === item.id)

            if(!isProductInCart) {

                item.count = 1

                state.cart.push(item)

                localStorage.setItem('cart', JSON.stringify(state.cart))

            }

        },

        setFavorites(state, item) {

            const isProductInFavorites = state.favorites.some(product => product === item.id)

            if(!isProductInFavorites) {

                state.favorites.push(item.id)

                localStorage.setItem('favorites', JSON.stringify(state.favorites))

            }

        },

        plus(state, item) {

            const index = state.cart.findIndex(product => product.id === item.id);

            if (index !== -1 && state.cart[index].count < 10) {

                state.cart[index].count += 1

                localStorage.setItem('cart', JSON.stringify(state.cart))

            }

        },

        minus(state, item) {

            const index = state.cart.findIndex(product => product.id === item.id);

            if (index !== -1 && state.cart[index].count > 1) {

                state.cart[index].count -= 1

                localStorage.setItem('cart', JSON.stringify(state.cart))

            }

        },

        deleteProductInCart(state, item) {

            const index = state.cart.findIndex(product => product.id === item.id);

            if (index !== -1) {

                // Удаляем товар из массива корзины
                state.cart.splice(index, 1);

                // Сохраняем обновленное содержимое корзины обратно в localStorage
                localStorage.setItem('cart', JSON.stringify(state.cart));

            }

        },

        removeToFavorite(state, item) {

            const index = state.favorites.findIndex(product => product === item.id);

            if (index !== -1) {

                state.favorites.splice(index, 1);

                localStorage.setItem('favorites', JSON.stringify(state.favorites));

            }

        },

        clearCart(state) {

            state.cart = []

            localStorage.setItem('cart', JSON.stringify(state.cart))

        },

    },
    actions: {
        setIsOpenMobileMenu(context, value) {
            context.commit('setIsOpenMobileMenu', value)
        },
        setAccordionElement(context, object) {
            context.commit('setAccordionElement', object)
        }
    },
    getters: {

        getAccordionElements(state) {
            return state.accordionElements
        },

        getIsOpenMobileMenu(state) {
            return state.isOpenMobileMenu
        },

        getCart(state) {
            return state.cart
        },

        getFavorites(state) {
            return state.favorites
        },

        isProductInCart(state) {

            return (item) => {

                const index = state.cart.findIndex(product => product.id === item.id);

                return index !== -1;

            }

        },

        isProductInFavorites(state) {

            return (item) => {

                const index = state.favorites.findIndex(product => product === item.id);

                return index !== -1;

            }

        },

        getTotalPrice(state) {

            const delivery = 0;

            return state.cart.reduce((prev, item) => prev + (item.price * item.count), 0)

        },

        getProductTotalPrice(state) {

            return (item) => {

                const index = state.cart.findIndex(product => product.id === item.id);

                if (index !== -1) {

                    return state.cart[index].price * state.cart[index].count

                }

            }

        },

    },
    namespaced: true
}