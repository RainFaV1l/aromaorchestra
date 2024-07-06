<template>
  <div class="min-h-full flex flex-col bg-black text-[#DEBCAC]" @click="closeMobileMenu">
    <HeaderComponent/>
    <MobileMenuComponent v-if="isOpenMobileMenu"/>
    <main class="flex-auto">
      <router-view></router-view>
    </main>
    <FooterComponent/>
  </div>
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import './index.css'
import MobileMenuComponent from "@/components/MobileMenuComponent.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const isOpenMobileMenu = computed(() => store.getters['mainModule/getIsOpenMobileMenu'])

const closeMobileMenu = (event) => {

    const mobileMenu = event.target.closest('.mobile-menu');

    if (!mobileMenu) {

        const mobileMenu = document.querySelector('.mobile-menu')

        if(!mobileMenu) return

        mobileMenu.classList.remove('active')

        setTimeout(() => {

            store.dispatch('mainModule/setIsOpenMobileMenu', false);

        }, 200)

    }

}


</script>

<style>
  html {
    scroll-behavior: smooth;
  }
  .mobile-menu {
      transition: all .2s ease-in-out;
      opacity: 0;
      transform: translateX(50px);
  }
  .mobile-menu.active {
      opacity: 1;
      transform: translateX(0);
  }
</style>
