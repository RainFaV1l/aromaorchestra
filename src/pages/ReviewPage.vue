<template>
  <div>
    <div class="container py-[50px] sm:py-[100px] flex flex-col gap-7">
      <h4 class="text-[20px] uppercase sm:text-[48px] text-white font-thin">Добавление отзыва</h4>
      <form class="flex items-start w-full flex-col gap-7 font-thin" method="post" @submit.prevent="submitForm">
        <div class="flex flex-col items-start gap-4 w-full">
          <input id="name" class="placeholder:text-[#DEBCAC]
                    placeholder:text-opacity-[46%] py-4 px-7 rounded w-full
                    bg-transparent text-[#DEBCAC] border-b border-[#DEBCAC]"
                 v-model="full_name" type="text" placeholder="ФИО" name="full_name" required>
          <p v-if="errors  && errors.full_name" class="text-red-500 pl-7">{{ errors.full_name[0] }}</p>
        </div>
        <div class="flex flex-col items-start gap-4 w-full">
          <input id="name" class="placeholder:text-[#DEBCAC]
                    placeholder:text-opacity-[46%] py-4 px-7 rounded w-full
                    bg-transparent text-[#DEBCAC] border-b border-[#DEBCAC]"
                 v-model="message" type="text" placeholder="Сообщение" name="message" required>
          <p v-if="errors  && errors.message" class="text-red-500 pl-7">{{ errors.message[0] }}</p>
        </div>
        <div class="flex flex-col items-start gap-4">
          <div class="rating flex items-center justify-start gap-4">
            <input v-model="rating" type="radio"  id="star5" name="rating" value="5" checked>
            <label for="star5">&#9733;</label>
            <input v-model="rating" type="radio" id="star4" name="rating" value="4">
            <label for="star4">&#9733;</label>
            <input v-model="rating" type="radio" id="star3" name="rating" value="3">
            <label for="star3">&#9733;</label>
            <input v-model="rating" type="radio" id="star2" name="rating" value="2">
            <label for="star2">&#9733;</label>
            <input v-model="rating" type="radio" id="star1" name="rating" value="1">
            <label for="star1">&#9733;</label>
          </div>
          <p v-if="errors && errors.rating" class="text-red-500 pl-7">{{ errors.rating[0] }}</p>
        </div>
        <input class="button-fill w-full" type="submit" value="Отправить">
      </form>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
  import {onBeforeRouteLeave} from "vue-router";
  import {useStore} from "vuex";

  const store = useStore();

  let errors = reactive([]);

  let full_name = ref('')
  let message = ref('')
  let rating = ref(5)

  onBeforeRouteLeave((to, from, next) => {
    store.commit('product/setErrors', [])
    next();
  })

  const submitForm = async () => {

    const response = await store.dispatch('product/storeReviewQuery', {
      full_name: full_name.value,
      message: message.value,
      rating: rating.value,
    })

    if(response) {
      full_name.value = ''
      message.value = ''
      rating.value = 5
      store.commit('product/setErrors', [])
      errors = []
    }

    const newErrors = store.getters["product/getErrors"]

    // Очистка объекта ошибок
    Object.keys(errors).forEach(key => {
      delete errors[key];
    });

    // Добавление только новых ошибок
    Object.keys(newErrors).forEach(key => {
      errors[key] = newErrors[key];
    });

  }
</script>

<style scoped>
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}

.rating input {
  display: none;
}

.rating label {
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;
}

.rating input:checked ~ label {
  color: #DEBCAC;
}
</style>