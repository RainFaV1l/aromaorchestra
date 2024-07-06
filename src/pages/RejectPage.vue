<template>
  <div>
    <div :style="{ 'background-image': 'url(' + aboutBg + ')' }" class="bg-cover">
      <div class="container px-0 py-8 sm:px-5 sm:py-[120px]">
          <div class="px-8 bg-white bg-opacity-5 backdrop-blur-[20px] flex items-center flex-col gap-6 sm:gap-7 md:gap-[64px] text-white py-[72px] sm:py-24 md:py-[300px]">
              <h1 class="font-thin uppercase text-center text-[20px] sm:text-3xl md:text-[50px]">Оплата не прошла</h1>
              <button @click="$router.push('/cart')" class="button-outline font-thin text-sm sm:text-xl text-[#DEBCAC] md:text-[50px]">Попробовать снова</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import aboutBg from '@/assets/images/about-bg.webp'

export default {
  components: {
  },
  setup() {
    return {
      aboutBg,
    }
  }
}
</script>

<style>

</style>
