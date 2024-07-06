<template>
  <div class="bg-white bg-opacity-5 backdrop-blur-[30px] ">
    <div class="py-8 px-8 lg:px-[105px] flex flex-col gap-5">
      <div class="flex flex-wrap lg:flex-nowrap items-center gap-12">
        <div class="w-[454px]" :style="'height:' + h + 'px'">
          <img class="h-full w-full object-cover object-bottom" :src="item.preview_image" alt="Изображение">
        </div>
        <div class="flex items-center flex-wrap md:flex-nowrap justify-between gap-7 md:gap-[5px]">
          <div class="flex flex-col gap-7 lg:gap-[80px] font-thin">
            <div class="flex flex-col gap-2">
              <h2 class="text-2xl w-full sm:w-[370px]" v-html="item.name"></h2>
              <p class="text-white text-base">{{ formatPrice(item.price) }}/ шт</p>
            </div>
            <div class="flex items-center gap-2">
              <button @click="minus(item)">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.5457 18.0278L4.90913 18.0278" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                </svg>
              </button>
              <span class="text-[30px] text-white text-center w-8">{{ item.count }}</span>
              <button @click="plus(item)">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.5457 18.0278L4.90913 18.0278" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                  <path d="M18 31.1147L18 5.47823" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center gap-8 self-end md:self-start">
            <div class="flex flex-col gap-4">
              <h3 class="text-[30px] text-white w-36">{{ formatPrice(getProductTotalPrice(item)) }}</h3>
              <p class="text-white text-base font-thin">{{ item.count }} шт.</p>
            </div>
            <button @click="removeProductToCart(item)">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.1172 18.9192L18.4717 39.5647" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                <path d="M39.5527 39.5615L18.9072 18.916" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[80%] h-[1px] bg-[#DEBCAC] bg-opacity-[80%]"></div>
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