<template>
  <div>
    <div :style="aboutBgChange" class="relative bg-cover">
      <div class="absolute h-full w-full z-0 hidden sm:flex"
           style="background: linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1), rgba(0, 0, 0, .1), rgba(0, 0, 0, 1));"></div>
      <div class="absolute h-full w-full z-0 sm:hidden"
           style="background: linear-gradient(rgba(0, 0, 0, .49), rgba(0, 0, 0, .49), rgba(0, 0, 0, .49), rgba(0, 0, 0, 1));"></div>
      <div class="relative container px-0 sm:px-5 sm:pt-8 z-10">
        <ul class="font-thin hidden sm:flex flex-wrap justify-center sm:justify-start items-center gap-7 md:gap-11 text-[13px] sm:text-[17px]">
          <li><a href="#about" class="hvr-grow">О бренде</a></li>
          <li><a href="#benefits" class="hvr-grow">Наша гордость</a></li>
        </ul>
        <div class="pt-8 sm:pt-[68px] flex flex-col gap-6 sm:gap-12" id="about">
          <h1 class="text-lg sm:text-2xl md:text-5xl font-thin text-white px-5 sm:px-0"
              style="line-height: 130%">Бренд Aroma Orchestra начался <br class="block sm:hidden"> с идеи <br class="hidden lg:block"> о превращении ароматов <br class="block sm:hidden"> <span class="text-[#DEBCAC]">в настоящую симфонию</span></h1>
          <div class="flex items-start flex-wrap lg:flex-nowrap gap-7 md:gap-[100px] mt-0 md:mt-4">
            <div class="flex flex-wrap md:flex-col gap-8 md:gap-[64px] w-[100%] md:w-[40%] px-5 sm:px-0">
              <div class="flex flex-col items-start gap-2 md:gap-0">
                <h2 class="font-semibold text-[40px] md:text-[120px]">2023</h2>
                <p class="text-white text-xl md:text-5xl font-thin leading-normal">Наш год <br> основания</p>
              </div>
              <br>
              <div class="flex flex-col items-start gap-2 md:gap-0">
                <h2 class="font-semibold text-[40px] md:text-[120px]">1000</h2>
                <p class="text-white text-xl md:text-5xl font-thin leading-normal">Довольных <br> клиентов</p>
              </div>
            </div>
            <div class="mt-0 sm:mt-[-15px] py-[15px] px-[16px] sm:py-8 sm:px-6 md:px-[80px] bg-white bg-opacity-5 backdrop-blur-[100px] w-full lg:w-[60%]">
              <p class="text-[12px] sm:text-base text-white font-thin leading-normal">Основатель бренда Aroma Orchestra, эстет и мечтатель, был так
                <br class="hidden xl:block"> воодушевлен красотой музыки и неотразимостью ароматов, что решил объединить эти два веяния искусства.
                <br><br>
              </p>
              <p class="text-[12px] sm:text-base text-white font-thin leading-normal hidden sm:block">
                Раскрывая перед глазами удивительный мир нот, он обнаружил, что <br> ароматы, так же как и музыка, могут вызывать эмоции, переносить
                <br> в прошлое или уносить в будущее. Каждая нота аромата – это словно аккорд, создающий гармонию в пространстве и времени.
                <br><br>Создатель премиальной ароматической продукции Aroma Orchestra <br> превратил свою страсть в дело жизни. Его целью стало создание
                <br> идеальной композиции, в которой каждая нота соединяется с другой, словно музыкальный инструмент в оркестре. Бренд Aroma Orchestra
                стремится достичь полного слияния ароматов и музыки, чтобы каждый человек, вникнувший в симфонию нот, почувствовал гармонию и равновесие.
                <br><br>Aroma Orchestra разрабатывает свои ароматические диффузоры <br> и свечи с особой филигранностью и вниманием к деталям. Каждое
                <br> изделие становится уникальным произведением искусства, <br> отражающим индивидуальность и вкус своего владельца.
                <br><br>Вдохновленный историей и культурой, бренд Aroma Orchestra <br> обращается к современным трендам и инновациям, чтобы создавать
                бесконечное взаимодействие нот ароматов со звуками музыки.
                <br><br>Aroma Orchestra – это не только премиальные ароматические продукты, но и история, которая оживляет пространство и открывает врата
                в эмоциональное путешествие, наполненное мелодиями и ароматами изысканных вкусов.
                <br><br>
              </p>
              <p class="text-[12px] sm:text-base text-white font-thin leading-normal" v-if="condition">
                Раскрывая перед глазами удивительный мир нот, он обнаружил, что <br> ароматы, так же как и музыка, могут вызывать эмоции, переносить
                <br> в прошлое или уносить в будущее. Каждая нота аромата – это словно аккорд, создающий гармонию в пространстве и времени.
                <br><br>Создатель премиальной ароматической продукции Aroma Orchestra <br> превратил свою страсть в дело жизни. Его целью стало создание
                <br> идеальной композиции, в которой каждая нота соединяется с другой, словно музыкальный инструмент в оркестре. Бренд Aroma Orchestra
                стремится достичь полного слияния ароматов и музыки, чтобы каждый человек, вникнувший в симфонию нот, почувствовал гармонию и равновесие.
                <br><br>Aroma Orchestra разрабатывает свои ароматические диффузоры <br> и свечи с особой филигранностью и вниманием к деталям. Каждое
                <br> изделие становится уникальным произведением искусства, <br> отражающим индивидуальность и вкус своего владельца.
                <br><br>Вдохновленный историей и культурой, бренд Aroma Orchestra <br> обращается к современным трендам и инновациям, чтобы создавать
                <br> бесконечное взаимодействие нот ароматов со звуками музыки.
                <br><br>Aroma Orchestra – это не только премиальные ароматические продукты, <br> но и история, которая оживляет пространство и открывает врата
                <br> в эмоциональное путешествие, наполненное мелодиями и ароматами <br> изысканных вкусов.
                <br><br>
              </p>
              <button @click="showText" class="block sm:hidden text-[12px] sm:text-base">{{ buttonText }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :style="{ 'background-image': 'url(' + aboutSecondBg + ')' }" class="relative bg-cover bg-left sm:bg-bottom" id="benefits">
      <div class="absolute h-full w-full z-0 hidden sm:flex"
           style="background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .1), rgba(0, 0, 0, .1), rgba(0, 0, 0, 1));"></div>
      <div class="container pb-[72px] sm:pb-[245px] bg-bottom mt-[72px] sm:mt-[120px] z-10">
        <div class="flex flex-col gap-10">
          <div class="flex flex-wrap items-center sm:text-start justify-between gap-4 sm:gap-7">
            <h1 class="text-[20px] sm:text-[50px] font-thin text-white leading-normal uppercase"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center">То, чем мы гордимся</h1>
            <p class="text-white text-[12px] sm:text-base font-thin"
               data-aos="fade-up"
               data-aos-offset="0"
               data-aos-delay="50"
               data-aos-duration="400"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="true"
               data-aos-anchor-placement="top-center">Создаем бренд, заставляющий <br class="hidden sm:block"> Вас чувствовать ноты</p>
          </div>
          <div class="flex justify-between sm:justify-start gap-4 sm:gap-[56px]">
            <div class="flex flex-col gap-6 sm:gap-[56px]">
              <div class="flex items-center flex-col gap-4"
                   data-aos="fade-up"
                   data-aos-offset="0"
                   data-aos-delay="50"
                   data-aos-duration="400"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-center">
                <div class="h-[70px] sm:h-auto sm:w-auto">
                  <img class="h-full w-full object-contain" :src="aboutItem1" alt="Иконка">
                </div>
                <div class="flex flex-col items-center text-center gap-2 sm:gap-3 font-thin">
                  <h3 class="text-base sm:text-2xl">Искусство</h3>
                  <p class="text-[12px] sm:text-base text-white">Превращаем ароматы <br> в искусство</p>
                </div>
              </div>
              <div class="flex items-center flex-col gap-4"
                   data-aos="fade-up"
                   data-aos-offset="0"
                   data-aos-delay="50"
                   data-aos-duration="400"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-center"
              >
                <div class="h-[70px] sm:h-auto sm:w-auto">
                    <img class="h-full w-full object-contain" :src="aboutItem3" alt="Иконка">
                </div>
                <div class="flex flex-col items-center text-center gap-2 sm:gap-3 font-thin">
                    <h3 class="text-base sm:text-2xl">Качество</h3>
                    <p class="text-[12px] sm:text-base text-white">Aroma Orchestra - <br> синоним качества</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-6 sm:gap-[56px]">
              <div class="flex items-center flex-col gap-4"
                   data-aos="fade-up"
                   data-aos-offset="0"
                   data-aos-delay="50"
                   data-aos-duration="400"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-center">
                <div class="h-[70px] sm:h-auto sm:w-auto">
                    <img class="h-full w-full object-contain" :src="aboutItem2" alt="Иконка">
                </div>
                <div class="flex flex-col items-center text-center gap-2 sm:gap-3 font-thin">
                    <h3 class="text-base sm:text-2xl">Эмоции</h3>
                    <p class="text-[12px] sm:text-base text-white">Вызываем эмоции <br> через ароматы</p>
                </div>
              </div>
              <div class="flex items-center flex-col gap-4"
                   data-aos="fade-up"
                   data-aos-offset="0"
                   data-aos-delay="50"
                   data-aos-duration="400"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-center">
                <div class="h-[70px] sm:h-auto sm:w-auto">
                    <img class="h-full w-full object-contain" :src="aboutItem4" alt="Иконка">
                </div>
                <div class="flex flex-col items-center text-center gap-2 sm:gap-3 font-thin">
                    <h3 class="text-base sm:text-2xl">Индивидуальность</h3>
                    <p class="text-[12px] sm:text-base text-white">Уникальность в каждом <br> товаре</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import aboutBg from '@/assets/images/about-bg.jpg'
import aboutMobileBg from '@/assets/images/about-mobile-bg.jpg'
import aboutSecondBg from '@/assets/images/about-second-bg.jpg'
import aboutItem1 from '@/assets/images/about-item-1.webp'
import aboutItem2 from '@/assets/images/about-item-2.webp'
import aboutItem3 from '@/assets/images/about-item-3.webp'
import aboutItem4 from '@/assets/images/about-item-4.webp'


export default {
  methods: {
    showText() {
      this.condition = !this.condition
      this.condition ? this.buttonText = 'Скрыть текст' : this.buttonText = 'Показать больше'
    },
  },
  computed: {
    aboutBgChange() {
      const screenWidth = window.innerWidth;
      if(screenWidth > 650) {
        return `background-image: url(${aboutBg});`
      }
      return `background-image: url(${aboutMobileBg});`
    },
  },
  data() {
    return {
      condition: false,
      buttonText: 'Показать больше',
    }
  },
  setup() {
    return {
      aboutBg,
      aboutMobileBg,
      aboutSecondBg,
      aboutItem1,
      aboutItem2,
      aboutItem3,
      aboutItem4,
    }
  },
}
</script>

<style>

</style>
