<template>
    <div class="bg-white bg-opacity-5 backdrop-blur-[30px] px-4 py-4 flex flex-wrap items-center gap-5">
        <div class="flex items-start justify-between gap-5">
            <div class="w-full lg:w-[400px]" :style="'height:' + h + 'px'">
                <img class="h-full w-full object-bottom" :class="item.type === 'candles' ? 'object-cover' : 'object-cover'" :src="item.preview_image" alt="Изображение">
            </div>
            <div class="w-full flex flex-col gap-4 md:w-[400px] font-thin">
                <h3 class="text-[17px] sm:text-2xl text-[#DEBCAC]" v-html="item.name"></h3>
                <p class="text-white text-[12px] sm:text-lg font-thin" v-html="item.description"></p>
            </div>
        </div>
        <div class="flex flex-col gap-6 sm:gap-10 w-full">
            <div class="flex justify-between items-center gap-4 w-full">
                <p class="text-base text-white">{{ formatPrice(item.price) }}</p>
                <div class="flex items-center justify-end sm:justify-start gap-7 w-full sm:w-auto sm:text-base text-[14px]">
                    <!--          <button @click="router.push(`/${item.type}/${item.id}/payment`)" class="button-fill">Купить в 1 клик</button>-->
                    <button v-if="!isProductInCart(item).value" @click="addToCart(item)" class="button-fill hvr-grow px-[45px] sm:w-auto">В корзину</button>
                    <button v-if="isProductInCart(item).value" @click="router.push('/cart')" class="button-outline hover:bg-transparent hover:text-[#DEBCAC] w-full px-4 sm:px:10 sm:w-auto">Товар в корзине</button>
                    <button v-if="isProductInFavorites(item).value" @click="removeToFavorite(item)"><img :src="heart3" alt="Иконка"></button>
                </div>
            </div>
            <div v-if="catalog">
                <button @click="router.push('/catalog')" class="button-outline hvr-grow w-full sm:w-auto sm:text-base text-[14px]">Перейти в каталог</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, defineEmits } from 'vue';
import {useStore} from "vuex";
import router from "@/router/router";
import heart3 from "@/assets/images/heart-3.svg";

defineProps({
    item: {
        type: Object,
        required: true
    },
    h: {
        type: Number,
        required: true
    },
    catalog: {
        type: Boolean,
        required: false,
    },
    favorites: {
        type: Boolean,
        required: false,
    }
})

const store = useStore();

function formatPrice(price) {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  });
  return formatter.format(price);
}

function addToCart(item) {
    store.commit('mainModule/setCart', item);
}

const emit = defineEmits(['removeToFavorite'])

// function addToFavorite(item) {
//     store.commit('mainModule/setFavorites', item);
// }

function removeToFavorite(item) {
  emit('removeToFavorite', item.index);
  store.commit('mainModule/removeToFavorite', item);
}

function isProductInCart(item) {
    return computed(() => store.getters['mainModule/isProductInCart'](item));
}

function isProductInFavorites(item) {
    return computed(() => store.getters['mainModule/isProductInFavorites'](item));
}

</script>

<style>

</style>