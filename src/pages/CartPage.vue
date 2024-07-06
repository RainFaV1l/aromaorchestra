<template>
  <div>
    <div :style="{ 'background-image': 'url(' + catalogBg + ')' }" class="bg-cover bg-top min-h-[55vh]">
      <div class="container px-0 sm:px-5 pt-8 pb-[72px] sm:pb-[120px]">
        <ul class="font-thin hidden sm:flex flex-wrap justify-center sm:justify-start items-center gap-7 md:gap-11 text-[13px] sm:text-[17px]">
          <li><a href="#cart" class="hvr-grow">Корзина</a></li>
          <li><a href="#order" class="hvr-grow">Оформление</a></li>
        </ul>
        <div class="mt-0 sm:mt-[40px] md:mt-[66px] flex flex-col gap-[120px]" id="cart">
          <div class="flex flex-col gap-7">
            <h1 class="text-[20px] sm:text-[50px] font-thin text-white leading-normal uppercase md:text-5xl px-5 sm:px-0">Корзина</h1>
            <div class="flex flex-col" v-if="getCart && getCart.length > 0">
                <div v-if="!isMobile" class="flex flex-col">
                    <CartItemComponent :item="item" :h="adaptiveCartItem(item.type)" v-for="(item, index) in getCart" :key="index"/>
                </div>
                <div v-else class="flex flex-col gap-0">
                    <MobileCartItemComponent :item="item" :h="item.type === 'candles' ? 156 : 234" v-for="(item, index) in getCart"
                                       :favorites="true" :key="index" class="cart-item"/>
                </div>
            </div>
            <div class="px-5 sm:px-0" v-else>
              Нет товаров в корзине
            </div>
          </div>
        </div>
      </div>
      <div class="container px-0 sm:px-5 pb-[72px] sm:pb-[120px] flex justify-between gap-8 sm:gap-7" v-if="getCart.length > 0" id="order"
           data-aos="fade-up"
           data-aos-offset="0"
           data-aos-delay="50"
           data-aos-duration="400"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="true"
           data-aos-anchor-placement="top-center">
        <div class="flex flex-col gap-0 sm:gap-4 w-full">
          <h1 class="text-[20px] sm:text-[50px] md:text-5xl font-thin text-white leading-normal uppercase px-5">Оформление</h1>
          <div class="py-[30px] sm:pt-[30px] pt-[32px] w-full">
            <div class="bg-white bg-opacity-5 backdrop-blur-[100px] flex flex-col gap-4 md:gap-7 md:flex-nowrap items-end text-white py-7 md:py-[76px]">
              <div v-if="getCart" class="w-full flex-col gap-[30px]">
                <form class="flex items-start w-full flex-col gap-7 px-6 md:px-12 font-thin" name="payform-tinkoff" id="payform-tinkoff" @submit.prevent="submitForm()">
                  <h4 class="text-[20px] text-[#DEBCAC]">Персональные данные</h4>
                  <input type="hidden" name="terminalkey" value="1707742513327">
                  <input type="hidden" name="frame" value="false">
                  <input type="hidden" name="language" value="ru">
                  <input class="payform-tinkoff-row" type="hidden" name="receipt" value="">
                  <input id="price" class="py-4 px-7 rounded w-full" type="hidden" placeholder="Сумма заказа" name="amount" :value="this.getDeliveries.length > 0 ? this.getTotalPriceWithDelivery : ''" required disabled>
                  <input type="hidden" placeholder="Номер заказа" name="order" :value="orderId" required disabled>
                  <div class="hidden">
                    <label for="price">Сумма заказа в ₽</label>
                    <div class="py-4 px-7 rounded w-full border border-white">{{ this.getDeliveries.length > 0 ? getTotalPriceWithDelivery : '' }} руб.</div>
                  </div>
                  <div class="hidden">
                    <label for="description">Описание заказа</label>
                    <input id="description" class="py-4 px-7 rounded w-full" type="hidden"
                           placeholder="Описание заказа" name="description" :value="description" required disabled>
                    <div class="w-full" v-html="description"></div>
                  </div>
                  <input class="payform-tinkoff-row" type="hidden" placeholder="ФИО плательщика" name="name" :value="name">
                  <div class="flex flex-col items-start gap-4 w-full">
                    <input id="name" v-model="name" class="placeholder:text-[#DEBCAC] placeholder:text-opacity-[46%] py-4 px-7 rounded w-full bg-transparent text-[#DEBCAC] border-b border-[#DEBCAC]" type="text" placeholder="ФИО плательщика" required>
                    <p v-if="getErrors && getErrors.full_name" class="text-red-500 pl-7">{{ getErrors.full_name[0] }}</p>
                  </div>
                  <div class="flex flex-col items-start gap-4 w-full">
                    <input id="name" class="placeholder:text-[#DEBCAC]
                    placeholder:text-opacity-[46%] py-4 px-7 rounded w-full
                    bg-transparent text-[#DEBCAC] border-b border-[#DEBCAC]"
                           v-model="tel" type="text" placeholder="Контактный телефон" name="phone" @input="validatePhoneNumber" required>
                    <p v-if="getErrors && getErrors.phone" class="text-red-500 pl-7">{{ getErrors.phone[0] }}</p>
                    <span v-if="!isValidPhoneNumber" class="text-red-500 pl-7">Некорректный номер телефона</span>
                  </div>
                  <div class="flex flex-col items-start gap-4 w-full">
                    <input id="email" class="placeholder:text-[#DEBCAC]
                    placeholder:text-opacity-[46%] py-4 px-7 rounded w-full
                    bg-transparent text-[#DEBCAC]  border-b border-[#DEBCAC]"
                     v-model="email" type="email" placeholder="E-mail" name="email" required>
                    <p v-if="getErrors && getErrors.email" class="text-red-500 pl-7">{{ getErrors.email[0] }}</p>
                  </div>
                  <div class="flex flex-col items-start gap-4 w-full" v-if="getDeliveries.length > 0">
                    <div class="flex items-center gap-4" v-for="(delivery, index) in getDeliveries">
                      <input type="radio" :id="'delivery_id_' + index" name="delivery_id" v-model="delivery_id" :value="delivery.id" :checked="delivery_id === delivery.id" required>
                      <label class="flex items-center" :for="'delivery_id_' + index">
                        <div class="circle__container"><div class="circle"></div></div>
                        <p class="text-sm">{{ delivery.name }} <span class="font-bold">{{ delivery.price }} ₽</span></p>
                      </label>
                      <p v-if="getErrors && getErrors.delivery_id" class="text-red-500 pl-7">{{ getErrors.delivery_id[0] }}</p>
                    </div>
                    <p class="text-sm sm:text-base">Срок 3-6 рабочих дней (не считая дня отправки). Бесплатная доставка от 10 000 руб.</p>
                  </div>
                  <div class="flex flex-col items-start gap-4 w-full">
                    <input id="address" class="placeholder:text-[#DEBCAC]
                    placeholder:text-opacity-[46%] py-4 px-7 rounded w-full
                    bg-transparent text-[#DEBCAC] border-b border-[#DEBCAC]"
                           type="text" v-model="address" placeholder="Адрес" name="address" required>
                    <p v-if="getErrors && getErrors.address" class="text-red-500 pl-7">{{ getErrors.address[0] }}</p>
                  </div>
                  <div class="flex items-start md:flex-row md:items-center gap-4 font-thin">
                    <input type="checkbox" name="agreement" v-model="agreement" class="visually-hidden" id="customCheckbox" required>
                    <label class="h-4 sm:h-5 w-4 sm:w-5 border border-[#DEBCAC]" for="customCheckbox">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </label>
                    <p class="text-[#DEBCAC] text-[11px] sm:text-base">Вы соглашаетесь с <span class="cursor-pointer underline">Политикой конфиденциальности</span></p>
                  </div>
                  <p class="text-center text-red-500 pl-7" v-if="this.error">{{ this.error }}</p>
                  <input class="button-fill" type="submit" value="Оплатить">
                </form>
              </div>
              <div class="flex justify-start sm:justify-end text-center px-5 sm:px-11 w-full h-full mt-4 md:mt-0">
                <h3 class="text-2xl md:text-[30px] text-left">Итоговая сумма: {{ this.getDeliveries.length > 0 ? getTotalPriceWithDelivery : '' }} ₽</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import catalogBg from '@/assets/images/catalog-bg.webp'
import products from "@/data/products";
import CartItemComponent from "@/components/CartItemComponent.vue";
import {mapActions, mapGetters, mapMutations} from "vuex";
import {ref} from "vue";
import MobileCartItemComponent from "@/components/MobileCartItemComponent.vue";

const description = ref('')

function generateOrderId() {
  const timestamp = Date.now().toString(); // Получаем текущую временную метку в виде строки
  const randomNum = Math.floor(Math.random() * 10000); // Генерируем случайное число от 0 до 9999
  return timestamp + randomNum; // Конкатенируем временную метку и случайное число
}

const orderId = ref(generateOrderId());

export default {
  components: {
      MobileCartItemComponent,
      CartItemComponent,
  },
  async mounted() {
    await this.deliveriesQuery()
  },
  data() {
    return {
      submitting: false,
      email: '',
      tel: '',
      name: '',
      address: '',
      error: false,
      agreement: false,
      delivery_id: 1,
      isValidPhoneNumber: true
    }
  },
  beforeRouteLeave(to, from, next) {
    this.setErrors([])
    next();
  },
  methods: {
    ...mapMutations('mainModule', ['clearCart']),
    ...mapMutations('product', ['setErrors']),
    ...mapActions('product', ['deliveriesQuery', 'checkoutQuery']),

    adaptiveCartItem(type) {
      if(type === 'candles') return 400
      return 600
    },

    validatePhoneNumber() {
      const phoneNumberRegex = /^\d{1,18}$/;
      this.isValidPhoneNumber = phoneNumberRegex.test(this.tel);
    },

    showDescription() {

      this.description = `Итоговая сумма: ${this.getDeliveries.length > 0 ? this.getTotalPriceWithDelivery : ''} руб.`

      for (let index in this.getCart) {
        this.description += ` ${parseInt(index) + 1}) ${this.getCart[index].name}. Кол-во: ${this.getCart[index].count}. Цена: ${this.getCart[index].count * this.getCart[index].price} руб.`
      }

      if(this.description.length > 250) {

        this.description = `Cумма: ${this.getTotalPriceWithDelivery}р.`

        for (let index in this.getCart) {
          this.description += ` ${parseInt(index) + 1}) ${this.getCart[index].name.substring(0, 20)}. Кол-во: ${this.getCart[index].count}. Цена: ${this.getCart[index].count * this.getCart[index].price}р.`
        }

        if(this.description.length > 250) {

          this.description = `Cумма: ${this.getTotalPriceWithDelivery}р.`

          for (let index in this.getCart) {
            this.description += ` ${parseInt(index) + 1}) ${this.getCart[index].name.substring(0, 20)}. Цена: ${this.getCart[index].count * this.getCart[index].price}р.`
          }

        }

      }

    },

    async submitForm() {

      if(this.getDeliveries.length > 0 && this.isValidPhoneNumber) {

        this.showDescription()

        const form = document.querySelector('#payform-tinkoff')

        // Защита от повторной отправки формы
        if (this.submitting) return;

        // Валидация данных перед отправкой
        if (!this.validateForm()) {

          this.error = 'Это поле должно быть заполнено'

          return;

        }

        const cartProducts = JSON.parse(localStorage.getItem('cart'))
        const products = []

        for (let cartProduct of cartProducts) {
          products.push({
            id: cartProduct.id,
            count: cartProduct.count,
          })
        }

        const response = await this.checkoutQuery({
          email: this.email,
          phone: this.tel,
          full_name: this.name,
          address: this.address,
          delivery_id: this.delivery_id,
          products: products,
        })

        if(response) {

          this.error = false

          this.clearCart()

          const {description, amount, email, phone, receipt} = form;

          if (receipt) {

              if (!email.value && !phone.value)
                  return alert("Поле E-mail или Phone не должно быть пустым");

                  form.receipt.value = JSON.stringify({
                  "EmailCompany": "mail@mail.com",
                  "Taxation": "patent",
                  "FfdVersion": "1.2",
                  "Items": [
                      {
                          "Name": description.value || "Оплата",
                          "Price": amount.value + '00',
                          "Quantity": 1.00,
                          "Amount": amount.value + '00',
                          "PaymentMethod": "full_prepayment",
                          "PaymentObject": "service",
                          "Tax": "none",
                          "MeasurementUnit": "pc"
                      }
                  ]
              });
          }
          // eslint-disable-next-line no-undef
          pay(form);

        }

      }

    },

    validateForm() {

      if(!this.agreement) {
        return false
      }

      return true

    }
  },
  computed: {
    ...mapGetters('mainModule', ['getCart', 'getTotalPrice', 'getCart']),
    ...mapGetters('product', ['getDeliveries', 'getErrors']),
    isMobile() {
        return window.matchMedia("(max-width: 650px)").matches;
    },
    getTotalPriceWithDelivery() {

      const deliveries = this.getDeliveries

      if(deliveries.length > 0) {

        let delivery = deliveries.find(delivery => delivery.id == this.delivery_id)

        if(this.getTotalPrice > 10000) {

          return this.getTotalPrice

        }

        return this.getTotalPrice + delivery.price

      }

    },
  },
  setup() {
    return {
      catalogBg, products, orderId, description
    }
  }
}
</script>

<style>
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
/* Скрываем стандартный элемент input */
input[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* Стилизуем кастомные радио-кнопки */
input[type="radio"] + label {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Создаем кастомную кнопку */
input[type="radio"] + label .circle__container .circle {
  border-radius: 50%;
  height: 11px;
  width: 11px;
  background-color: transparent;
  transition: all .3s ease-in-out;
}

/* Создаем кастомную кнопку */
input[type="radio"] + label .circle__container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px; /* Размер кастомной кнопки */
  height: 20px; /* Размер кастомной кнопки */
  border: 2px solid #DEBCAC; /* Цвет рамки кастомной кнопки */
  border-radius: 50%; /* Делаем кастомную кнопку круглой */
  transition: all .3s ease-in-out;
}

/* Стилизуем кастомную кнопку при наведении */
input[type="radio"] + label:hover .circle__container {
  border-color: white; /* Изменяем цвет рамки при наведении */
}

/* Стилизуем кастомную кнопку при выборе */
input[type="radio"]:checked + label .circle__container .circle {
  background-color: white; /* Цвет фона при выборе кнопки */
}

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
</style>
