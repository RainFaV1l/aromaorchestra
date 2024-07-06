<template>
  <div>
    <div :style="{ 'background-image': 'url(' + catalogBg + ')' }" class="bg-cover bg-bottom">
      <div class="container sm:pt-8 pb-[120px] px-0 sm:px-5">
        <ul class="font-thin hidden sm:flex flex-wrap justify-center sm:justify-start items-center gap-7 md:gap-11 text-[13px] sm:text-[17px]">
          <li><a href="#candles" class="hvr-grow">Свечи</a></li>
          <li><a href="#diffusers" class="hvr-grow">Диффузоры</a></li>
        </ul>
        <div class="pt-[32px] sm:pt-[66px] flex flex-col gap-[70px] sm:gap-[120px]" v-if="loaded">
          <div class="flex flex-col gap-[30px] sm:gap-4" id="candles">
            <h1 class="text-[20px] sm:text-[50px] font-thin text-white leading-normal uppercase px-5 sm:px-0">Свечи</h1>
            <div class="flex flex-col gap-5 sm:gap-12">
              <ItemComponent :item="item" :h="adaptiveCartItem(item.type)" v-for="(item, index) in getCandles" :key="index"/>
            </div>
          </div>
          <div class="flex flex-col gap-4" id="diffusers">
            <h1 class="text-[20px] sm:text-[50px] font-thin text-white leading-normal uppercase px-5 sm:px-0">Диффузоры</h1>
            <div class="flex flex-col gap-5 sm:gap-12">
              <ItemComponent :item="item" :h="adaptiveCartItem(item.type)" v-for="(item, index) in getDiffuser" :key="index"  data-aos="fade-up"
               data-aos-offset="0"
               data-aos-delay="50"
               data-aos-duration="400"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="true"
               data-aos-anchor-placement="top-center"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import catalogBg from '@/assets/images/catalog-bg.webp'
import ItemComponent from "@/components/ItemComponent.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ItemComponent
  },
  data() {
    return {
      loaded: false
    };
  },
  async created() {
    await this.productsQuery()
    this.loaded = true
  },
  computed: {
    ...mapGetters('product', ['getProducts']),
    getCandles() {
      return this.getProducts.filter(product => product.category.name === 'Свечи')
    },
    getDiffuser() {
      return this.getProducts.filter(product => product.category.name === 'Диффузоры')
    }
  },
  setup() {
    return {
      catalogBg,
      ItemComponent,
    }
  },
  methods: {
    ...mapActions('product', ['productsQuery']),
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
  }
}
</script>

<style>

</style>
