<template>
  <div>
    <div :style="{ 'background-image': 'url(' + aboutBg + ')' }" class="bg-cover">
      <div class="container py-[120px]">
        <div class="bg-white bg-opacity-5 backdrop-blur-[100px] flex items-center flex-col gap-[30px] text-white py-24 md:py-[300px]">
          <h1 class="font-thin uppercase text-center text-3xl md:text-[50px]">Страница оплаты</h1>
          <p class="text-center text-red-500" v-if="this.error">{{ this.error }}</p>
          <div v-if="getCart" class="w-full">
            <form class="flex flex-col gap-7 px-12 md:px-64" name="payform-tinkoff" id="payform-tinkoff" @submit.prevent="submitForm()">
              <input type="hidden" name="terminalkey" value="1707742513327DEMO">
              <input type="hidden" name="frame" value="false">
              <input type="hidden" name="language" value="ru">
              <input type="hidden" placeholder="Номер заказа" name="order" :value="orderId" required disabled>
              <div class="flex flex-col items-center gap-4">
                <label for="price">Сумма заказа в ₽</label>
                <div class="py-4 px-7 rounded w-full border border-white">{{ getTotalPrice }} руб.</div>
<!--                <input id="price" class="py-4 px-7 rounded w-full" type="text" placeholder="Сумма заказа" name="amount" :value="getTotalPrice" required disabled>-->
              </div>
              <div class="flex flex-col items-center gap-4">
                <label for="description">Описание заказа</label>
                <input id="description" class="py-4 px-7 rounded w-full" type="hidden" placeholder="Описание заказа" name="description" :value="description" required disabled>
                <div class="w-full" v-html="description"></div>
              </div>
              <div class="flex flex-col items-center gap-4">
                <label for="name">ФИО плательщика</label>
                <input id="name" class="py-4 px-7 rounded w-full bg-transparent text-white border border-white" v-model="name" type="text" placeholder="ФИО плательщика" name="name">
              </div>
              <div class="flex flex-col items-center gap-4">
                <label for="email">E-mail</label>
                <input id="email" class="py-4 px-7 rounded w-full bg-transparent text-white border border-white" v-model="email" type="email" placeholder="E-mail" name="email">
              </div>
              <div class="flex flex-col items-center gap-4">
                <label for="phone">Контактный телефон</label>
                <input id="phone" class="py-4 px-7 rounded w-full bg-transparent text-white border border-white" type="tel" v-model="tel" placeholder="Контактный телефон" name="phone">
              </div>
              <input class="button-fill" type="submit" value="Оплатить">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import aboutBg from '@/assets/images/about-bg.webp'
import {ref} from "vue";
import {mapGetters} from "vuex";

const description = ref('')

function generateOrderId() {
  const timestamp = Date.now().toString(); // Получаем текущую временную метку в виде строки
  const randomNum = Math.floor(Math.random() * 10000); // Генерируем случайное число от 0 до 9999
  return timestamp + randomNum; // Конкатенируем временную метку и случайное число
}

const orderId = ref(generateOrderId());


export default {

  data() {
    return {
      submitting: false,
      email: '',
      tel: '',
      name: '',
      error: false,
    };
  },

  computed: {
    ...mapGetters('mainModule', ['getTotalPrice', 'getCart'])
  },

  mounted() {
    this.showDescription()
  },

  methods: {

    showDescription() {

      if(this.getCart.length > 0) {

        this.description = `Итоговая сумма: ${this.getTotalPrice} руб.`

        for (let index in this.getCart) {
          this.description += ` ${parseInt(index) + 1}) ${this.getCart[index].name}. Кол-во: ${this.getCart[index].count}. Цена: ${this.getCart[index].count * this.getCart[index].price} руб.`
        }

        if(this.description.length > 250) {

          this.description = `Cумма: ${this.getTotalPrice}р.`

          for (let index in this.getCart) {
            this.description += ` ${parseInt(index) + 1}) ${this.getCart[index].name.substring(0, 20)}. Кол-во: ${this.getCart[index].count}. Цена: ${this.getCart[index].count * this.getCart[index].price}р.`
          }

          if(this.description.length > 250) {

            this.description = `Cумма: ${this.getTotalPrice}р.`

            for (let index in this.getCart) {
              this.description += ` ${parseInt(index) + 1}) ${this.getCart[index].name.substring(0, 20)}. Цена: ${this.getCart[index].count * this.getCart[index].price}р.`
            }

          }

        }

      }

    },

    submitForm() {

      const form = document.querySelector('#payform-tinkoff')

      // Защита от повторной отправки формы
      if (this.submitting) return;

      // Валидация данных перед отправкой
      if (!this.validateForm()) {

        this.error = 'Заполните все поля'

        return;

      }

      this.error = false

      form.insertAdjacentHTML('beforeend', `<input id="price" class="py-4 px-7 rounded w-full" type="text" placeholder="Сумма заказа" name="amount" value="${this.getTotalPrice}" required disabled>`)

      // eslint-disable-next-line no-undef
      pay(form)

    },

    validateForm() {

      if(!this.email || !this.tel || !this.name) {
        return false
      }

      return true

    }

  },

  setup() {

    return {

      aboutBg, orderId, description

    }

  }

}
</script>

<style>
</style>
