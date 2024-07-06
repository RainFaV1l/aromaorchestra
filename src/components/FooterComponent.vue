<template>
  <footer id="contacts">
    <div class="flex flex-col gap-0 sm:gap-8 border-t border-[#37393C]">
      <div class="container sm:pt-[24px] py-[40px] sm:pb-[33px]">
        <div class="flex flex-wrap lg:flex-nowrap gap-8 md:flex-row md:gap-8 justify-start sm:justify-between">
          <div class="h-[46px] w-[228px] md:w-auto cursor-pointer" @click="$router.push('/')">
            <img :src="footerLogo" alt="Логотип" class="object-contain">
          </div>
          <div class="flex md:flex-wrap lg:flex-nowrap flex-col gap-8 md:flex-row sm:gap-[60px]">
              <ul v-if="false" class="flex flex-col gap-2 sm:gap-4 font-thin text-lg">
                  <li class="text-[#DEBCAC]">Адрес</li>
                  <li class="text-white text-sm sm:text-base"><a href="#">Россия, Москва</a></li>
              </ul>
              <ul class="flex flex-col gap-2 sm:gap-4 font-thin text-lg">
                  <li class="text-[#DEBCAC]">Напишите нам!</li>
                  <li class="text-white hvr-grow text-sm sm:text-base"><a href="mailto:aroma@orchestra.com">mail@aromaorchestra.com</a></li>
                  <li class="text-white hvr-grow text-sm sm:text-base">ИП Мананников Егор Александрович</li>
                  <li v-if="false" class="hvr-grow text-sm sm:text-base"><a href="tel:+7 777 777 77-77">+7 777 777 77-77</a></li>
              </ul>
          </div>
          <ul v-if="false" class="flex flex-col items-start gap-7 sm:gap-4 font-thin text-lg ml-[60px] sm:ml-0">
            <li class="text-[#DEBCAC]">Соцсети</li>
            <li class="text-white hvr-grow text-sm sm:text-base"><a href="#">Facebook</a></li>
            <li class="text-white hvr-grow text-sm sm:text-base"><a href="#">Twitter</a></li>
            <li class="text-white hvr-grow text-sm sm:text-base"><a href="#">Instagram</a></li>
          </ul>
          <div class="flex flex-col gap-2 sm:gap-4 font-thin text-lg">
            <h3>Наша рассылка</h3>
            <form class="flex flex-col gap-2" @submit.prevent="submitForm">
              <p v-if="getErrors  && getErrors.email" class="text-red-500 pl-7 text-[14px]">{{ getErrors.email[0] }}</p>
              <div class="flex items-center gap-2">
                <input type="email" name="email" v-model="email" placeholder="Введите почту" class="border-b border-[#DEBCAC] bg-transparent pb-3 px-8 outline-none placeholder-opacity-25 placeholder-white w-full sm:w-[345px]" required>
                <button type="submit">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.63037 9.36743L0.419243 18.1503" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                    <path d="M9.63037 9.36914L0.63083 0.369601" stroke="#DEBCAC" stroke-width="0.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              <div class="flex items-center mt-4 gap-2 sm:mt-0">
                <input type="checkbox" name="agreement" class="visually-hidden" id="customCheckbox" required>
                <label class="h-4 w-4 sm:h-5 sm:w-5 border border-[#DEBCAC]" for="customCheckbox">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </label>
                <p class="text-[12px] sm:text-[14px]">Вы соглашаетесь с <a href="#" class="underline">Политикой конфиденциальности</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="text-white border-t border-[#37393C] font-thin py-2">
        <div class="container">
          <div class="flex justify-between gap-7 text-[10px] sm:text-base">
            <p>© 2024 | Aroma Orchestra</p>
            <a href="#" class="underline">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import footerLogo from "@/assets/images/footer-logo.svg";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  components: {

  },
  data() {
    return {
      email: '',
    }
  },
  methods: {
    ...mapActions('product', ['storeSubscribeQuery']),
    ...mapMutations('product', ['setErrors']),

    async submitForm() {

      const response = await this.storeSubscribeQuery({ email: this.email })

      if(response) {
        this.email = ''
        this.setErrors([])
      }

    }

  },
  computed: {
    ...mapGetters('product', ['getErrors'])
  },
  setup() {
    return {
      footerLogo,
    }
  }
}

</script>

<style>
  .visually-hidden {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
    white-space: nowrap;
  }

  input[type="checkbox"] + label {
    position: relative;
    cursor: pointer;
  }

  label svg {
    visibility: hidden;
    z-index: -1;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input[type="checkbox"] + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #DEBCAC;
  }

  input[type="checkbox"]:checked + label svg {
    visibility: visible;
    z-index: 10;
    opacity: 1;
  }

  @media screen and (max-width: 650px) {
      input[type="checkbox"] + label:before {
          width: 16px !important;
          height: 16px !important;
      }
  }
</style>