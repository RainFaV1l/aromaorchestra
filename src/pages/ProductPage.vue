<script setup>
import {computed, defineProps, ref} from 'vue';
import {useStore} from "vuex";
import router from "@/router/router";
import heart2 from "@/assets/images/heart-2.svg";
import heart3 from "@/assets/images/heart-3.svg";
import {Swiper, SwiperSlide} from "swiper/vue";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {useRoute} from "vue-router";

const store = useStore()
const route = useRoute()

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

let product = ref({})

const productId = computed(() => route.params.id);

async function findProduct() {
  await store.dispatch('product/getProductQuery', { id: productId.value })
  product.value = computed(() => store.getters["product/getProduct"]).value
}

findProduct()

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

<template>
  <div>
    <div class="container py-[50px] sm:py-[100px] px-0 xl:px-5">
      <div class="bg-white bg-opacity-5 backdrop-blur-[30px] px-5 py-4 sm:px-8 sm:py-8 md:px-[105px] flex flex-col gap-7 sm:gap-14">
        <div class="flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-12">
          <div @click.stop class="w-full sm:w-[38.7%] product-slider cursor-default" :style="'height:' + h + 'px'" v-if="product.images && product.images.length > 0">
            <swiper
                :modules="modules"
                :navigation="true"
                :pagination="{ clickable: true }"
                :slides-per-view="1"
                :loop="true"
                class="mySwiper itemSwiper"
                @swiper="onSwiper"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                :style="'height:' + h + 'px'"
            >
              <swiper-slide v-for="(image, index) in product.images" :key="index">
                <img class="h-full w-full object-cover lg:object-cover object-bottom responsive-image" :src="image.image_path" alt="Изображение">
              </swiper-slide>
            </swiper>
          </div>
          <div class="w-full sm:w-[68.73%]" :style="'height:' + h + 'px'" v-else>
            <img class="h-full w-full object-cover lg:object-cover object-bottom responsive-image" :src="product.preview_image" alt="Изображение">
          </div>
          <div class="flex flex-col gap-4 sm:gap-10 w-full lg:w-full">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-4 sm:gap-8">
                <div class="flex flex-col gap-4 w-full lg:w-[420px] font-thin">
                  <h3 class="text-base sm:text-2xl text-[#DEBCAC]" v-html="product.name"></h3>
                  <p class="text-white text-[12px] sm:text-base font-thin" v-html="product.short_description"></p>
                </div>
                <p class="text-base sm:text-xl text-white">{{ formatPrice(product.price) }}</p>
              </div>
              <div class="flex items-center justify-between sm:justify-start gap-7 w-full sm:w-auto sm:text-base text-[14px]">
                <button v-if="!isProductInCart(product).value" @click="addToCart(product)" class="button-fill hvr-grow w-full px-[70px] sm:px-[76px] sm:w-auto">В корзину</button>
                <button v-if="isProductInCart(product).value" @click="router.push('/cart')" class="button-outline hover:bg-transparent hover:text-[#DEBCAC] w-full sm:w-auto">Товар в корзине</button>
                <button v-if="!isProductInFavorites(product).value && !favorites" @click="addToFavorite(product)"><img :src="heart2" alt="Иконка"></button>
                <button v-else-if="isProductInFavorites(product).value" @click="removeToFavorite(product)"><img :src="heart3" alt="Иконка"></button>
              </div>
            </div>
            <div v-if="catalog">
              <button @click="router.push('/catalog')" class="button-outline hvr-grow w-full sm:w-auto sm:text-base text-[14px]">Перейти в каталог</button>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-base sm:text-4xl font-thin">Описание</h1>
          <p class="text-white text-sm sm:text-base font-thin" v-html="product.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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