<template>
    <div class="bg-white bg-opacity-5 backdrop-blur-[30px] py-4 px-4 flex flex-col gap-5">
        <div class="flex lg:flex-nowrap items-center gap-5">
            <div class="w-full">
                <div class="w-[156px]" :style="'height:' + h + 'px'">
                    <img class="h-full w-full  object-bottom" :class="item.type === 'candles' ? 'object-cover' : 'object-contain'" :src="item.preview_image" alt="Изображение">
                </div>
            </div>
            <div class="w-full flex items-center flex-wrap justify-between gap-7">
                <div class="flex flex-col gap-7 lg:gap-[80px] font-thin">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-basel w-full" v-html="item.name"></h2>
                    </div>
                    <div class="flex gap-[35px] items-center justify-between">
                        <p class="text-white text-[12px]">{{ formatPrice(item.price) }}/ шт</p>
                        <div class="flex items-center gap-2">
                            <button @click="minus(item)">
                                <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.5457 18.0278L4.90913 18.0278" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <span class="text-base text-white">{{ item.count }}</span>
                            <button @click="plus(item)">
                                <svg width="16" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.5457 18.0278L4.90913 18.0278" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                                    <path d="M18 31.1147L18 5.47823" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-8 self-end md:self-start">
                    <div class="flex flex-col gap-2">
                        <h3 class="text-base text-white">{{ formatPrice(getProductTotalPrice(item)) }}</h3>
                        <p class="text-white text-[12px] font-thin">{{ item.count }} шт.</p>
                    </div>
                    <button @click="removeProductToCart(item)">
                        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.8979 11.599L10.8128 23.6842" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                            <path d="M23.1528 23.6824L11.0677 11.5972" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                        </svg>

                    </button>
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-[#DEBCAC] bg-opacity-[80%]"></div>
    </div>
</template>

<script setup>

// import {defineProps} from 'vue';
import {useStore} from "vuex";

function formatPrice(price) {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  });
  return formatter.format(price);
}

defineProps({
    item: {
        type: Object,
        required: true
    },
    h: {
        type: Number,
        required: true
    },
})

const store = useStore();

function removeProductToCart(item) {
    store.commit('mainModule/deleteProductInCart', item);
}

function plus(item) {
    store.commit('mainModule/plus', item);
}

function minus(item) {
    store.commit('mainModule/minus', item);
}

function getProductTotalPrice(item) {
    return store.getters["mainModule/getProductTotalPrice"](item);
}

</script>

<style>

</style>