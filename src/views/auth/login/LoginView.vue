<script setup>
import {ref} from "vue";

const show = ref(false)

const email = ref('')
const password = ref('')

const togglePassword = () => {
  show.value = !show.value
}

const authorize = () => {
  console.log('email: ' + email.value)
  console.log('password:' + password.value)
}
</script>
<template>
  <form action="" method="post" @submit.prevent="authorize">
    <h1 class="text-4xl uppercase mb-[50px] tracking-wide">ავტორიზაცია</h1>
    <div class="relative w-full mb-[50px]">
      <input
          v-model="email"
          class="placeholder-black focus:outline-primary border-black border rounded-[5px] w-full pt-[7px] pb-[6px] px-2.5"
          type="email"/>
      <transition>
        <label
            class="absolute -top-[14px] left-[8px] px-[4px] bg-white">ელ.
          ფოსტა</label>
      </transition>
    </div>
    <div class="relative w-full mb-5">
      <img @click="togglePassword" class="absolute w-5 h-5 top-2.5 right-2.5 hover:cursor-pointer"
           :src="show ? '/src/assets/auth/hide-password-icon.svg' : '/src/assets/auth/show-password-icon.svg'" alt="">
      <input
          v-model="password"
          class="placeholder-black focus:outline-primary border-black border rounded-[5px] w-full pt-[7px] pb-[6px] px-2.5"
          :type="show ? 'text' : 'password'">
      <transition>
        <label class="absolute -top-[14px] left-[8px] px-[4px] bg-white">პაროლი</label>
      </transition>
    </div>
    <router-link class="flex w-full justify-end  text-[#950E1D] text-xs mb-5" to="">დაგავიწყდა?</router-link>
    <button class="bg-primary text-white py-2 rounded w-full hover:shadow-2xl mb-[15px]">შესვლა</button>
    <h3 class="flex justify-center mb-[15px]"> ან</h3>
    <button class="text-primary  py-[6.5px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </button>
  </form>
</template>