<template>
  <div @click="$router.push(`/products/${item.id}`)" class="cursor-pointer bg-white bg-opacity-5 backdrop-blur-[30px] px-5 py-4 sm:px-8 sm:py-8 md:px-[105px] flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-12">
    <div class="w-full sm:w-[68.73%]" :style="'height:' + h + 'px'">
      <img class="h-full w-full object-cover lg:object-cover object-bottom responsive-image" :src="item.preview_image" alt="Изображение">
    </div>
    <div class="flex flex-col gap-4 sm:gap-10 w-full lg:w-full">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4 sm:gap-8">
          <div class="flex flex-col gap-4 w-full lg:w-[420px] font-thin">
            <h3 class="text-base sm:text-2xl text-[#DEBCAC]" v-html="item.name"></h3>
            <p class="text-white text-[12px] sm:text-base font-thin" v-html="item.short_description"></p>
          </div>
          <p class="text-base sm:text-xl text-white">{{ formatPrice(item.price) }}</p>
        </div>
        <div class="flex items-center justify-between sm:justify-start gap-7 w-full sm:w-auto sm:text-base text-[14px]">
          <button v-if="!isProductInCart(item).value" @click.stop="addToCart(item)" class="button-fill hvr-grow w-full px-[70px] sm:px-[76px] sm:w-auto">В корзину</button>
          <button v-if="isProductInCart(item).value" @click.stop="router.push('/cart')" class="button-outline hover:bg-transparent hover:text-[#DEBCAC] w-full sm:w-auto">Товар в корзине</button>
          <button v-if="!isProductInFavorites(item).value && !favorites" @click.stop="addToFavorite(item)"><img :src="heart2" alt="Иконка"></button>
          <button v-else-if="isProductInFavorites(item).value" @click.stop="removeToFavorite(item)"><img :src="heart3" alt="Иконка"></button>
        </div>
      </div>
      <div v-if="catalog">
        <button @click.stop="router.push('/catalog')" class="button-outline hvr-grow w-full sm:w-auto sm:text-base text-[14px]">Перейти в каталог</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps, ref} from 'vue';
import {useStore} from "vuex";
import router from "@/router/router";
import heart2 from "@/assets/images/heart-2.svg";
import heart3 from "@/assets/images/heart-3.svg";
import {Swiper, SwiperSlide} from "swiper/vue";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

const store = useStore()

const modules = [Navigation, Pagination, Scrollbar, A11y]

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

function addToFavorite(item) {
  store.commit('mainModule/setFavorites', item);
}

function removeToFavorite(item) {
  store.commit('mainModule/removeToFavorite', item);
}

function isProductInCart(item) {
  return computed(() => store.getters['mainModule/isProductInCart'](item));
}

function isProductInFavorites(item) {
  return computed(() => store.getters['mainModule/isProductInFavorites'](item));
}

const swiperInstance = ref()

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

const swiperNextSlide = () => {
  swiperInstance.value.slideNext()
};

const swiperPrevSlide = () => {
  swiperInstance.value.slidePrev()
};

</script>

<style>
  @media screen and (max-width: 1023px) {
    .product-slider {
      width: 69% !important;
    }
  }
  @media screen and (max-width: 640px) {
    .product-slider {
      width: 100% !important;
    }
  }
</style>