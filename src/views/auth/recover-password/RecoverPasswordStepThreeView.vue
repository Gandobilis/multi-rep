<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const show = ref(false);
const showRepeated = ref(false)
const password = ref('');
const repeatPassword = ref('')
const router = useRouter();
const error = ref(false)

const togglePassword = (passwordType) => {
  if (passwordType === 'password') {
    show.value = !show.value;
  } else {
    showRepeated.value = !showRepeated.value
  }
};

const goBack = () => {
  router.go(-1);
}

const register = () => {
  if (!password.value || !repeatPassword.value || password.value !== repeatPassword.value) {
    error.value = true
  } else {
    router.push('/auth/login')
  }
}
</script>

<template>
  <div class="relative">
    <img @click="goBack" class="cursor-pointer absolute top-10 left-3" src="../../../assets/icons/auth/back-arrow.svg"
         alt="back arrow"/>
    <form method="post" @submit.prevent="register" class="w-[243px] flex flex-col items-center gap-y-[50px]">
      <h1 class="text-[32px] font-semibold text-center whitespace-nowrap">ახალი პაროლი</h1>
      <div class="relative w-full">
        <img @click="togglePassword('password')" class="absolute w-5 h-5 top-2.5 right-2.5 hover:cursor-pointer"
             :src="show ? '/src/assets/icons/auth/hide-password-icon.svg' : '/src/assets/icons/auth/show-password-icon.svg'" alt="">
        <input
            v-model="password"
            class="placeholder-black focus:outline-primary border-black border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
            :type="show ? 'text' : 'password'">
        <label class="absolute -top-3.5 left-2.5 px-1 bg-white">პაროლი</label>
      </div>
      <div class="relative w-full">
        <img @click="togglePassword('repeat')" class="absolute w-5 h-5 top-2.5 right-2.5 hover:cursor-pointer"
             :src="showRepeated ? '/src/assets/icons/auth/hide-password-icon.svg' : '/src/assets/icons/auth/show-password-icon.svg'"
             alt="">
        <input
            v-model="repeatPassword"
            class="placeholder-black focus:outline-primary border-black border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
            :type="showRepeated ? 'text' : 'password'">
        <label class="absolute -top-3.5 left-2.5 px-1 bg-white">გაიმეორეთ</label>
      </div>
      <div v-if="error" class="flex items-center w-full justify-start gap-x-2 -my-[35.5px]">
        <img src="../../../assets/icons/auth/error.svg" alt="alert error icon">
        <span class="text-sm text-error">პაროლები არ ემთხვევა</span>
      </div>
      <button
          class="mt-2.5 text-center py-[6.5px] rounded-[5px] hover:shadow-2xl text-white bg-primary w-full">
        დამახსოვრება
      </button>
    </form>
  </div>
</template>