<script setup>
import router from "@/router/router";
import {useStore} from "vuex";
import { nextTick } from 'vue';

const store = useStore()

defineProps({
    item: {
        type: Object,
        required: true,
    }
})

const toggleAccordion = (object) => {

    if(object.value) store.dispatch('mainModule/setAccordionElement', object)

    nextTick(() => {

      const accordions  = document.querySelectorAll('.accordion')

      if (accordions[object.index]) {

        let content = accordions[object.index].querySelector('.accordion-content')

        if(!object.value) {

          setTimeout(() => {

            if(!object.value) store.dispatch('mainModule/setAccordionElement', object)

          }, 300)

          content.style.maxHeight = 0

          content.style.opacity = 0

        }

        if(object.value) {

          content.style.maxHeight = content.scrollHeight + 'px'

          content.style.opacity = 1

        }

      }

    })

}

const closeModal = (id) => {

  store.dispatch('mainModule/setIsOpenMobileMenu', false)

  const accordions = store.getters["mainModule/getAccordionElements"]

  // Находим индекс элемента с нужным id
  const index = accordions.findIndex(item => item.id === id);

  store.dispatch('mainModule/setAccordionElement', {
    index: index,
    value: false,
  })

}

</script>

<template>
    <li class="flex flex-col" :class="!item.route ? 'accordion' : ''" @click="item.route ? router.push(item.route) : toggleAccordion({ index: item.index, value: !item.isOpen })">
        <div class="flex items-center gap-2">
            <p class="uppercase cursor-pointer hvr-grow">{{ item.name }}</p>
            <div v-if="!item.route" :class="item.isOpen ? 'rotate-180' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        <ul :class="item.route === undefined && item.isOpen ? 'mt-4' : ''" class="flex flex-col gap-2 items-start font-thin text-[12px] accordion-content" v-if="item.route === undefined && item.isOpen">
            <li class="cursor-pointer" v-for="(sublistItem, index) in item.sublist" :key="index"><router-link :to="sublistItem.route" @click.native="closeModal(item.id)">{{ sublistItem.name }}</router-link></li>
        </ul>
    </li>
</template>

<style scoped>
    .accordion-content {
        transition: all .3s ease-in-out;
        max-height: 0;
        opacity: 0;
    }
</style>