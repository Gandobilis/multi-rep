<script setup>
import {ref} from "vue";

const show = ref(false);
const email = ref('');
const password = ref('');
const users = ref([
  {
    email: 'user1@gmail.com',
    password: 'password2024'
  },
  {
    email: 'user2@gmail.com',
    password: 'password2024'
  },
  {
    email: 'user3@gmail.com',
    password: 'password2024'
  }
]);

const togglePassword = () => {
  show.value = !show.value;
};
const authorize = () => {
  console.log(users.value.find(user => user.email === email.value && user.password === user.password));
};
</script>
<template>
  <form method="post" @submit.prevent="authorize" class="w-[243px]">
    <h1 class="text-[32px] mb-[50px] font-semibold">ავტორიზაცია</h1>
    <div class="relative w-full mb-[50px]">
      <input
          v-model="email"
          class="placeholder-black focus:outline-primary border-black border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="email"/>
      <label
          class="absolute -top-3.5 left-2.5 px-1 bg-white">ელ. ფოსტა</label>
    </div>
    <div class="relative w-full mb-5">
      <img @click="togglePassword" class="absolute w-5 h-5 top-2.5 right-2.5 hover:cursor-pointer"
           :src="show ? '/src/assets/auth/hide-password-icon.svg' : '/src/assets/auth/show-password-icon.svg'" alt="">
      <input
          v-model="password"
          class="placeholder-black focus:outline-primary border-black border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          :type="show ? 'text' : 'password'">
      <label class="absolute -top-3.5 left-2.5 px-1 bg-white">პაროლი</label>
    </div>
    <router-link class="flex w-full justify-end  text-primary text-xs mb-5" to="">დაგავიწყდა?</router-link>
    <button class="bg-primary text-white py-[6.5px] rounded w-full hover:shadow-2xl mb-[15px]">შესვლა</button>
    <h3 class="flex justify-center mb-[15px]"> ან</h3>
    <router-link to="/auth/registration-step-one"
                 class="text-center text-primary  py-[6.5px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </router-link>
  </form>
</template>