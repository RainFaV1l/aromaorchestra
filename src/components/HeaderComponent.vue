<template>
  <header :style="{ 'background-image': 'url(' + headerBg + ')' }" class="bg-cover">
    <div class="container sm:mt-7">
        <div class="flex flex-wrap items-center justify-between gap-4 sm:gap-7 py-2 sm:mb-7 lg:mb-0">
          <div class="cursor-pointer h-[47px] w-[156px] sm:w-[464px] sm:h-auto" @click="router.push('/')"><img class="h-full w-full" :src="logo" alt="logo"></div>
<!--          :class="$route.path === '/' ? 'text-white' : ''"-->
          <ul class="flex-wrap items-center justify-center text-[13px] md:text-[17px] sm:justify-start gap-4 sm:gap-7 font-thin text-opacity-75 hidden sm:flex">
            <li class="uppercase cursor-pointer hvr-grow" @click="router.push('/')">Главная</li>
            <li class="uppercase cursor-pointer hvr-grow" @click="router.push('/about')">О нас</li>
            <li class="uppercase cursor-pointer hvr-grow" @click="router.push('/catalog')">Каталог</li>
            <li class="uppercase cursor-pointer hvr-grow" @click="router.push('/cart')">Корзина</li>
            <li class="cursor-pointer hvr-grow" @click="router.push('/favorites')">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_3_406" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8135 7.28962C15.3955 5.7364 15.3955 3.21813 13.8135 1.66492C12.2315 0.111697 9.66661 0.111694 8.08462 1.66491L7.49999 2.23891L6.91538 1.66493C5.33339 0.111708 2.76848 0.111709 1.18649 1.66493C-0.395496 3.21815 -0.395499 5.73641 1.18649 7.28963L1.77111 7.86361L1.75922 7.87529L7.4881 13.5L7.49999 13.4883L7.5119 13.5L13.2408 7.8753L13.2289 7.86361L13.8135 7.28962Z"/>
                </mask>
                <path d="M13.8135 7.28962L14.5141 8.00318H14.5141L13.8135 7.28962ZM8.08462 1.66491L7.38403 0.951347L7.38403 0.951347L8.08462 1.66491ZM7.49999 2.23891L6.79941 2.95247L7.49999 3.64032L8.20058 2.95247L7.49999 2.23891ZM6.91538 1.66493L7.61597 0.951361L6.91538 1.66493ZM1.18649 1.66493L1.88708 2.37849L1.18649 1.66493ZM1.18649 7.28963L1.88708 6.57606H1.88708L1.18649 7.28963ZM1.77111 7.86361L2.47169 8.57718L3.19848 7.86362L2.4717 7.15005L1.77111 7.86361ZM1.75922 7.87529L1.05863 7.16172L0.331841 7.87528L1.05863 8.58885L1.75922 7.87529ZM7.4881 13.5L6.78751 14.2136L7.4881 14.9014L8.18868 14.2136L7.4881 13.5ZM7.49999 13.4883L8.20057 12.7747L7.49999 12.0869L6.79941 12.7747L7.49999 13.4883ZM7.5119 13.5L6.81132 14.2136L7.51191 14.9014L8.21249 14.2136L7.5119 13.5ZM13.2408 7.8753L13.9414 8.58886L14.6682 7.87528L13.9414 7.16172L13.2408 7.8753ZM13.2289 7.86361L12.5283 7.15005L11.8015 7.86363L12.5283 8.57719L13.2289 7.86361ZM13.1129 2.37848C14.2957 3.53974 14.2957 5.41479 13.1129 6.57605L14.5141 8.00318C16.4953 6.05801 16.4953 2.89652 14.5141 0.95135L13.1129 2.37848ZM8.78521 2.37848C9.97821 1.20717 11.9199 1.20717 13.1129 2.37848L14.5141 0.95135C12.5431 -0.98378 9.35501 -0.983785 7.38403 0.951347L8.78521 2.37848ZM8.20058 2.95247L8.78521 2.37848L7.38403 0.951347L6.79941 1.52534L8.20058 2.95247ZM6.21479 2.37849L6.79941 2.95247L8.20058 1.52534L7.61597 0.951361L6.21479 2.37849ZM1.88708 2.37849C3.08008 1.20719 5.02179 1.20719 6.21479 2.37849L7.61597 0.951361C5.64499 -0.983771 2.45688 -0.983769 0.485904 0.951362L1.88708 2.37849ZM1.88708 6.57606C0.704306 5.4148 0.704307 3.53976 1.88708 2.37849L0.485904 0.951362C-1.4953 2.89653 -1.4953 6.05802 0.485901 8.00319L1.88708 6.57606ZM2.4717 7.15005L1.88708 6.57606L0.485901 8.00319L1.07052 8.57718L2.4717 7.15005ZM2.4598 8.58885L2.47169 8.57718L1.07052 7.15004L1.05863 7.16172L2.4598 8.58885ZM8.18869 12.7864L2.4598 7.16172L1.05863 8.58885L6.78751 14.2136L8.18869 12.7864ZM6.79941 12.7747L6.78752 12.7864L8.18868 14.2136L8.20057 14.2019L6.79941 12.7747ZM8.21247 12.7864L8.20057 12.7747L6.79942 14.2019L6.81132 14.2136L8.21247 12.7864ZM12.5402 7.16173L6.81131 12.7864L8.21249 14.2136L13.9414 8.58886L12.5402 7.16173ZM12.5283 8.57719L12.5402 8.58888L13.9414 7.16172L13.9295 7.15003L12.5283 8.57719ZM13.1129 6.57605L12.5283 7.15005L13.9295 8.57718L14.5141 8.00318L13.1129 6.57605Z" fill="#DEBCAC" mask="url(#path-1-inside-1_3_406)"/>
              </svg>
            </li>
          </ul>
          <div class="flex sm:hidden" @click.stop="showMobileMenu">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33337 12.1666H31.6667" stroke="#E5BBA9" stroke-linecap="round"/>
                  <path d="M8.33337 20.5H31.6667" stroke="#E5BBA9" stroke-linecap="round"/>
                  <path d="M8.33337 28.8334H31.6667" stroke="#E5BBA9" stroke-linecap="round"/>
              </svg>
          </div>
        </div>
    </div>
  </header>
</template>

<script setup>
  import logo from '@/assets/logo.svg'
  import headerBg from '@/assets/images/header-bg.webp'
  import router from "@/router/router";
  import {useStore} from "vuex";

  const store = useStore()

  const showMobileMenu = () => {

      store.dispatch('mainModule/setIsOpenMobileMenu', true)

      setTimeout(() => {

          const mobileMenu = document.querySelector('.mobile-menu')

          mobileMenu.classList.add('active')

      }, 200)

  }

</script>

<style>
  li.active svg mask, li.active svg path {
    fill: white;
  }
</style>