<template>
  <div>
    <div :style="{ 'background-image': 'url(' + aboutBg + ')' }" class="bg-cover">
      <div class="container py-[120px]">
        <div class="bg-white bg-opacity-5 backdrop-blur-[30px] flex items-center flex-col gap-[30px] text-white py-24 md:py-[300px]">
          <h1 class="font-thin uppercase text-center text-3xl md:text-[50px]">Страница оплаты</h1>
          <p class="text-center text-red-500" v-if="this.error">{{ this.error }}</p>
          <div v-if="product" class="w-full">
            <form class="flex flex-col gap-7 px-12 md:px-64" name="payform-tinkoff" id="payform-tinkoff" @submit.prevent="submitForm()">
              <input type="hidden" name="terminalkey" value="1707742513327DEMO">
              <input type="hidden" name="frame" value="false">
              <input type="hidden" name="language" value="ru">
              <input type="hidden" placeholder="Номер заказа" name="order" :value="orderId" required disabled>
              <div class="flex flex-col items-center gap-4">
                <label for="price">Сумма заказа в ₽</label>
                <div class="py-4 px-7 rounded w-full" style="background-color: rgba(239, 239, 239, 0.3)">{{ this.product.price }} руб.</div>
<!--                <input id="price" class="py-4 px-7 rounded w-full" type="text" placeholder="Сумма заказа" name="amount" :value="product.price" required disabled>-->
              </div>
              <div class="flex flex-col items-center gap-4">
                <label for="description">Описание заказа</label>
                <input id="description" class="py-4 px-7 rounded w-full" type="text" placeholder="Описание заказа" name="description" :value="description" required disabled>
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
import productsData from '@/data/products'
import {reactive, ref} from "vue";

const product = reactive({})
const products = reactive(productsData)
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

  mounted() {

    const productId = parseInt(this.$route.params.id);

    const productType = this.$route.params.type;

    this.product = products.find(product => product.id === productId && product.type === productType);

    this.description = `Покупка товара ${this.product.name}.`

  },

  methods: {

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

      form.insertAdjacentHTML('beforeend', `<input id="price" class="py-4 px-7 rounded w-full" type="text" placeholder="Сумма заказа" name="amount" value="${this.product.price}" required disabled>`)

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

      aboutBg, product, orderId, description

    }

  }

}
</script>

<style>
</style>
