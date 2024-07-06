<template>
    <div class="sm:hidden fixed top-0 right-0 z-20 mobile-menu" :style="'background: url(' + mobileBg + ') no-repeat;'" style="background-size: cover">
        <div class="absolute h-full w-full z-0"
             style="background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .59), rgba(0, 0, 0, .59), rgba(0, 0, 0, .59));"></div>
        <ul class="relative flex flex-col items-start font-thin text-base gap-6 pt-4 px-4 pb-[62px] z-30 w-[155px]">
            <MobileMenuEl v-for="(item, index) in mobileMenuEls" :key="index" :item="{...item, index: index}"/>
        </ul>
    </div>
</template>

<script setup>
import mobileBg from "@/assets/images/mobile-bg.jpg";
import MobileMenuEl from "@/components/MobileMenuEl.vue";
import {useStore} from "vuex";

const store = useStore()

const mobileMenuEls = store.getters['mainModule/getAccordionElements']

</script>

<style scoped>

</style>