<script setup>
import AnimatedInput from "../../components/auth/AnimatedInput.vue";
import {ref} from "vue";
import axios from "../../interceptors/axios/index.js";

const password = ref();
const repeat = ref();

const error = ref();
const success = ref();

const change_password = async () => {
  error.value = null;
  success.value = null;
  if (password.value !== repeat.value) {
    error.value = 'პაროლები არ ემთხვევა!'
  } else {
    await axios.post('', {}).then(() => {
      success.value = 'პაროლი შეიცვალა წარმატებით!'
    }).catch(() => {
      error.value = 'დაფიქსირდა შეცდომა!'
    })
  }
}
</script>

<template>
  <form @submit.prevent="change_password" class="h-full flex justify-center items-center max-lg:py-4">
    <div class="flex flex-col justify-between gap-y-4 lg:gap-y-10">
      <animated-input v-model="password" placeholder="პაროლი" show-password-toggle/>

      <animated-input v-model="repeat" placeholder="გაიმეორეთ" show-password-toggle/>

      <div v-if="success" class="flex items-center w-full justify-start gap-x-2">
        <span class="text-sm text-price" v-text="success"/>
      </div>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-1.5">
        <img class="max-lg:w-2" src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-xs lg:text-sm text-error" v-text="error"/>
      </div>

      <button
          class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl"
          v-text="'შეცვლა'"/>
    </div>
  </form>
</template>