<script setup>
import {ref} from "vue";

const show = ref(false)
const showPassword = () => {
  show.value = !show.value
}
</script>
<template>
  <div>
    <h1 class="text-4xl uppercase mb-[50px]">ავტორიზაცია</h1>
    <input
        class="mb-[50px] placeholder-black focus:outline-none border-black border rounded w-full pt-[7px] pb-[6px] px-2.5"
        type="email"
        placeholder="ელ. ფოსტა">
    <div class="relative w-full mb-5">
      <img @click="showPassword" class="absolute w-5 h-5 top-2.5 right-2.5 hover:cursor-pointer"
           :src="show ? '/src/assets/auth/hide-password-icon.svg' : '/src/assets/auth/show-password-icon.svg'" alt="">
      <input class="placeholder-black focus:outline-none border-black border rounded w-full pt-[7px] pb-[6px] px-2.5"
             :type="show ? 'text' : 'password'" placeholder="პაროლი">
    </div>
    <router-link class="flex w-full justify-end  text-[#950E1D] text-xs mb-5" to="">დაგავიწყდა?</router-link>
    <button class="bg-primary text-white py-2 rounded w-full hover:shadow-2xl mb-[15px]">შესვლა</button>
    <h3 class="flex justify-center mb-[15px]"> ან</h3>
    <button class="text-primary  py-[6.5px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </button>
  </div>
</template>