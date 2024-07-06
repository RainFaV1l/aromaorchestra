<template>
    <div>
        <div :style="{ 'background-image': 'url(' + catalogBg + ')' }" class="bg-cover bg-top min-h-[55vh]">
            <div class="container pt-8 pb-[72px] sm:pb-[120px] px-0 sm:px-5">
                <div class="mt-0 sm:mt-[66px] flex flex-col gap-[120px]">
                    <div class="flex flex-col gap-8 sm:gap-4">
                        <h1 class="text-[20px] sm:text-[50px] font-thin text-white leading-normal uppercase px-5 sm:px-0">
                            Избранное</h1>
                        <div v-if="getFavoritesItems && getFavoritesItems.length > 0 && loaded">
                            <div v-if="!isMobile" class="flex flex-col gap-12">
                                <ItemComponent @removeToFavorite="removeToFavoritesEvent" :item="{ ...item, index: index }" :h="adaptiveCartItem(item.type)" v-for="(item, index) in getFavoritesItems"
                                               :favorites="true" :key="index"/>
                            </div>
                            <div v-else class="flex flex-col gap-0">
                                <FavoriteComponent @removeToFavorite="removeToFavoritesEvent" :item="{ ...item, index: index }" :h="adaptiveMobileCartItem(item.type)" v-for="(item, index) in getFavoritesItems"
                                                   :favorites="true" :key="index" class="favorite-item"/>
                            </div>
                        </div>
                        <div class="px-5 sm:px-0" v-else>
                            Нет товаров в избранных
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import catalogBg from '@/assets/images/catalog-bg.webp'
import {mapActions, mapGetters, mapMutations} from "vuex";
import FavoriteComponent from "@/components/FavoriteComponent.vue";
import ItemComponent from "@/components/ItemComponent.vue";

export default {
    components: {
        ItemComponent,
        FavoriteComponent,
    },
    methods: {
      ...mapActions('product', ['productsQuery', 'reviewsQuery']),
      ...mapMutations('mainModule', ['removeToFavorite']),
      removeToFavoritesEvent(id) {
        this.removeToFavorite(this.getFavorites[id]);
      },
      adaptiveCartItem(type) {
        if(type === 'candles') return 400
        return 600
      },
      adaptiveMobileCartItem(type) {
        const screenWidth = window.innerWidth;
        if(screenWidth < 480) {
            if(type === 'candles') return 200
            return 300
        }
        if(screenWidth < 370) {
            if(type === 'candles') return 156
            return 234
        }
      },
    },
    data() {
        return {
          loaded: false
        }
    },
    async created() {
      await this.productsQuery()
      this.loaded = true
    },
  computed: {
      ...mapGetters('mainModule', ['getFavorites']),
        ...mapGetters('product', ['getProducts']),
        isMobile() {
            return window.matchMedia("(max-width: 650px)").matches;
        },
        getFavoritesItems() {
          return this.getProducts.filter(product => this.getFavorites.includes(product.id));
        }
    },
    setup() {
        return {
            catalogBg
        }
    }
}
</script>

<style scoped>
    .favorite-item:not(:last-child) {
        border-bottom: 1px solid #B5998C;
    }
</style>
