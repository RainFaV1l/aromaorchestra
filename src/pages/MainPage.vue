<template>
    <div>
        <div :style="startBgChange" class="relative bg-cover bg-bottom sm:bg-top">
            <div class="absolute h-full w-full z-0 hidden sm:flex"
                 style="background: linear-gradient(rgba(0, 0, 0, .59), rgba(0, 0, 0, .59), rgba(0, 0, 0, .59), rgba(0, 0, 0, 1));"></div>
            <div class="absolute h-full w-full z-0 flex sm:hidden"
                 style="background: linear-gradient(rgba(0, 0, 0, .59), rgba(0, 0, 0, .59), rgba(0, 0, 0, .59), rgba(0, 0, 0, .59), rgba(0, 0, 0, 1));"></div>
            <div class="container sm:pt-8 pb-[76px] sm:pb-[406px] z-10">
                <ul class="hidden sm:flex relative font-thin flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-7 md:gap-11 text-[13px] sm:text-[17px]">
                    <li class="hvr-grow"><a href="#popular">Популярное</a></li>
                    <li class="hvr-grow"><a href="#benefits">Преимущества</a></li>
                    <li class="hvr-grow"><a href="#reviews">Отзывы</a></li>
                    <li class="hvr-grow"><a href="#contacts">Контакты</a></li>
                </ul>
                <div class="relative flex flex-col gap-[146px] sm:gap-[64px] z-10">
                    <div class="mt-[111px] sm:mt-[162px] h-[111px] sm:h-auto">
                        <img :src="startTitle" alt="title">
                    </div>
                    <div class="flex items-start flex-col gap-6 w-full sm:w-auto">
                        <p class="text-white font-thin text-[13px] sm:text-base font-sans">Мы разрабатываем свою продукцию с особой <br> филигранностью и вниманием к деталям.</p>
                        <button @click="router.push('/catalog')" class="button-outline hvr-grow w-full py-2 sm:py-3 sm:w-auto text-[14px] sm:text-[17px]">Перейти в каталог</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-24">
            <div class="flex flex-col gap-7">
                <div class="container px-5 xl:px-0" id="popular">
                    <div class="flex gap-4 flex-wrap justify-between">
                        <h2 class="font-thin uppercase text-white text-[20px] sm:text-[50px]"
                            data-aos="fade-up"
                            data-aos-offset="0"
                            data-aos-delay="50"
                            data-aos-duration="400"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center">Популярные <br class="hidden sm:block"> товары</h2>
                        <div class="flex flex-col items-start gap-4 max-w-[400px]" data-aos="fade-up"
                             data-aos-offset="0"
                             data-aos-delay="50"
                             data-aos-duration="400"
                             data-aos-easing="ease-in-out"
                             data-aos-mirror="true"
                             data-aos-once="true"
                             data-aos-anchor-placement="top-center">
                        </div>
                    </div>
                </div>
                <div class="relative bg-cover bg-bottom" :style="{ 'background-image': 'url(' + itemsBg + ')' }">
                    <div class="absolute h-full w-full z-0"
                         style="background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));"></div>
                    <div class="container py-0 px-0">
                        <div class="flex flex-col gap-6 sm:gap-12 bg-cover" v-if="loaded">
                            <ItemComponent
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-delay="50"
                                    data-aos-duration="400"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center" :item="item" :h="adaptiveCartItem(item.type)"
                                    v-for="(item, index) in getProducts" :key="index" :catalog="true"/>
                        </div>
                    </div>
                    <div class="mt-[72px] sm:mt-[130px]">
                        <div class="container px-5 xl:px-0" id="benefits">
                            <div class="flex flex-col gap-12">
                                <h2 class="font-thin uppercase text-white text-[20px] sm:text-[50px]" data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-delay="50"
                                    data-aos-duration="400"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center">Преимущества нашей <br> продукции</h2>
                                <div class="relative flex flex-wrap flex-col md:flex-row gap-2 sm:gap-[80px]">
                                    <div class="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <img :src="benefitsIcon" alt="Иконка" class="mr-20" data-aos="fade-up"
                                             data-aos-offset="0"
                                             data-aos-delay="50"
                                             data-aos-duration="400"
                                             data-aos-easing="ease-in-out"
                                             data-aos-mirror="true"
                                             data-aos-once="true"
                                             data-aos-anchor-placement="top-center">
                                    </div>
                                    <div class="flex flex-wrap gap-2 sm:gap-7 w-[55%] justify-start md:w-[40%] xl:w-[46%] text-center sm:text-left" data-aos="fade-up"
                                         data-aos-offset="0"
                                         data-aos-delay="50"
                                         data-aos-duration="400"
                                         data-aos-easing="ease-in-out"
                                         data-aos-mirror="true"
                                         data-aos-once="true"
                                         data-aos-anchor-placement="top-center">
                                        <h3 class="text-base sm:text-xl font-light w-full xl:w-[209px]">Премиальный <br> арома бутик
                                        </h3>
                                        <p class="text-white text-[12px] sm:text-base font-thin w-full xl:w-[300px]">Премиум бренд,
                                            создающий продукцию высокого качества</p>
                                    </div>
                                    <div class="flex flex-wrap gap-2 sm:gap-7 w-[45%] justify-end self-end sm:justify-start md:w-[40%] xl:w-[46%] text-center sm:text-left" data-aos="fade-up"
                                         data-aos-offset="0"
                                         data-aos-delay="50"
                                         data-aos-duration="400"
                                         data-aos-easing="ease-in-out"
                                         data-aos-mirror="true"
                                         data-aos-once="true"
                                         data-aos-anchor-placement="top-center">
                                        <h3 class="text-base sm:text-xl font-light w-full xl:w-[209px]">Музыкальные <br> ароматы
                                        </h3>
                                        <p class="text-white text-[12px] sm:text-base font-thin w-full xl:w-[300px]">Бренд создает
                                            гармонию между ароматами и музыкой</p>
                                    </div>
                                    <div class="flex flex-wrap gap-2 sm:gap-7 w-[55%] justify-start md:w-[40%] xl:w-[46%] text-center sm:text-left" data-aos="fade-up"
                                         data-aos-offset="0"
                                         data-aos-delay="50"
                                         data-aos-duration="400"
                                         data-aos-easing="ease-in-out"
                                         data-aos-mirror="true"
                                         data-aos-once="true"
                                         data-aos-anchor-placement="top-center">
                                        <h3 class="text-base sm:text-xl font-light w-full xl:w-[209px]">Международные <br> материалы</h3>
                                        <p class="text-white text-[12px] sm:text-base font-thin w-full xl:w-[300px]">Продукты создаются
                                            из французских масел и американского воска</p>
                                    </div>
                                    <div class="flex flex-wrap gap-2 sm:gap-7 w-[45%] justify-end self-end sm:justify-start md:w-[40%] xl:w-[46%] text-center sm:text-left" data-aos="fade-up"
                                         data-aos-offset="0"
                                         data-aos-delay="50"
                                         data-aos-duration="400"
                                         data-aos-easing="ease-in-out"
                                         data-aos-mirror="true"
                                         data-aos-once="true"
                                         data-aos-anchor-placement="top-center">
                                        <h3 class="text-base sm:text-xl font-light w-full xl:w-[209px]">Внимание <br> к деталям</h3>
                                        <p class="text-white text-[12px] sm:text-base font-thin w-full xl:w-[300px]">Каждый продукт -
                                            уникальное произведение искусств</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :style="{ 'background-image': 'url(' + sliderBg + ')' }" class="relative bg-cover bg-right sm:bg-center">
                    <div class="absolute h-full w-full z-0"
                         style="background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .80), rgba(0, 0, 0, .80), rgba(0, 0, 0, .80));"></div>
                    <div class="container py-[72px] sm:py-[120px] px-5 xl:px-0" id="reviews">
                        <div class="flex flex-col gap-8 sm:gap-12 mt-[10px]">
                            <div class="flex flex-wrap items-center justify-between gap-7">
                              <div class="flex items-center justify-between">
                                <h2 class="font-thin uppercase text-white text-[20px] sm:text-[50px]"
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-delay="50"
                                    data-aos-duration="400"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center">Отзывы</h2>
                              </div>
                              <div class="block sm:hidden">
                                  <button class="relative z-30" style="color: #DEBCAC !important;" @click="swiperPrevSlide">
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.73914 12.0908L12.0553 6.06829" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                                          <path d="M5.73914 12.0897L11.9102 18.2608" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                                      </svg>
                                  </button>
                                  <button class="relative z-30" style="color: #DEBCAC !important;" @click="swiperNextSlide">
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M18.2609 11.9092L11.9447 17.9317" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                                          <path d="M18.2609 11.9103L12.0898 5.73917" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                                      </svg>
                                  </button>
                              </div>
                              <div class="w-full sm:w-auto flex justify-start">
                                <button @click="router.push('/review')" class="button-outline hvr-grow py-2 sm:py-3 w-1/2 sm:w-auto px-0 sm:px-[40px] text-[14px] sm:text-[17px]" data-aos="fade-up"
                                        data-aos-offset="0"
                                        data-aos-delay="50"
                                        data-aos-duration="400"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="true"
                                        data-aos-anchor-placement="top-center">Оставить отзыв</button>
                              </div>
                            </div>
                            <swiper
                                    v-if="loaded"
                                    :navigation="true"
                                    :modules="modules"
                                    :pagination="{ clickable: true }"
                                    :slides-per-view="1"
                                    :loop="true"
                                    :spaceBetween="30"
                                    :breakpoints="{
                                        0: { slidesPerView: 2, spaceBetween: 17, },
                                        640: { slidesPerView: 2, spaceBetween: 30 },
                                    }"
                                    @swiper="onSwiper"
                                    class="mySwiper reviewSwiper w-full h-full sm:h-[320px] font-thin text-[12px] sm:text-base"
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-delay="50"
                                    data-aos-duration="400"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="true"
                                    data-aos-anchor-placement="top-center"
                            >
                                <swiper-slide v-for="(review, index) in getReviews" :key="index" style="display: flex !important; justify-content: center !important;">
                                    <div class="flex flex-col items-stretch gap-[48px] py-[24px] px-[16px] sm:px-[56px] border border-[#DEBCAC] h-full sm:h-[260px] w-full sm:w-[424px]">
                                        <div class="flex flex-col gap-4">
                                            <div class="flex items-center">
                                                <StarComponent v-for="i in 5" :key="i" :fill="review.rating >= i"/>
                                            </div>
                                            <p class="text-[13px] sm:text-base text-white font-thin w-full sm:w-[312px]">{{ review.message }}</p>
                                        </div>
                                        <p class="text-[13px] sm:text-base text-white font-thin h-full flex items-end">{{ review.full_name }}</p>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import startBg from "@/assets/images/start-bg.jpg";
import startMobileBg from "@/assets/images/start-mobile.jpg";
import startTitle from "@/assets/images/start-title.webp";
import itemsBg from "@/assets/images/items-bg.webp";
import sliderBg from "@/assets/images/slider-bg.jpeg";
import starFull from "@/assets/images/start-full.svg";
import benefitsIcon from "@/assets/images/benefits-icon.webp";
import ItemComponent from "@/components/ItemComponent.vue";
import products from "@/data/products";
import {ref} from "vue";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import router from "@/router/router";
import {mapMutations, mapGetters, mapActions} from "vuex";
import reviews from "@/data/reviews"
import StarComponent from "@/components/StarComponent.vue";

export default {
  methods: {
    ...mapMutations('mainModule', ['setIsOpenMobileMenu']),
    ...mapActions('product', ['productsQuery', 'reviewsQuery']),
    adaptiveCartItem(type) {
      const screenWidth = window.innerWidth;
      if(screenWidth < 650) {
        if(type === 'candles') return 400
        return 600
      }
      if(screenWidth < 480) {
        if(type === 'candles') return 328
        return 492
      }
      if(type === 'candles') return 400
      return 600
    },
  },
  data() {
    return {
      loaded: false
    };
  },
  async created() {
    await this.productsQuery()
    await this.reviewsQuery()
    this.loaded = true
  },
  components: {
      StarComponent,
      Swiper,
      SwiperSlide,
      ItemComponent
  },
  computed: {
    ...mapGetters('product', ['getProducts', 'getReviews']),
    startBgChange() {
      const screenWidth = window.innerWidth;
      if(screenWidth > 650) {
        return `background-image: url(${startBg});`
      }
      return `background-image: url(${startMobileBg});`
    },
  },
  setup() {

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

      return {
          startBg, startTitle, itemsBg, benefitsIcon, ItemComponent, sliderBg, starFull, router,
          reviews, startMobileBg,
          modules: [Navigation, Pagination, Scrollbar, A11y], swiperPrevSlide,
          swiperNextSlide,
          onSwiper,
      }
  }
}

</script>

<style>
.itemSwiper .swiper-button-prev, .itemSwiper .swiper-button-next {
  color: white !important;
  transform: scale(0.7);
}
.itemSwiper .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .itemSwiper .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  background-color: white !important;
}
.reviewSwiper .swiper-button-prev, .reviewSwiper .swiper-button-next {
    color: #DEBCAC !important;
    transform: scale(0.7);
}

.reviewSwiper .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .reviewSwiper .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    background-color: #DEBCAC !important;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;
}
.swiper-wrapper {
    align-items: stretch !important;
}
.swiper-slide {
    height: auto !important;
}
@media screen and (max-width: 640px) {
    .swiper-button-prev, .swiper-button-next {
        display: none !important;
    }
    .swiper-wrapper {
        padding-bottom: 40px !important;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
        bottom: 0;
    }
}
</style>
