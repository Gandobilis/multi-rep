<script setup>
import {ref} from "vue";
// import axios from "axios";

const show = ref(false)

const email = ref('')
const password = ref('')

const error = ref(false)

const togglePassword = () => {
  show.value = !show.value
}

// const authorize = async (email, password) => {
//   try {
//     error.value = !error.value
//     const response = await axios.get('http://localhost:3000/users');
//     const users = response.data;
//
//     const user = users.find(user => user.email === email.value && user.password === password.value);
//     if (user) {
//       console.log('User authenticated successfully!');
//     } else {
//       console.log('Invalid email or password.');
//     }
//   } catch (error) {
//     error.value = !error.value
//     console.error('Error fetching users:', error);
//   }
// };

</script>
<template>
  <form method="post" @submit.prevent>
    <h1 class="text-[32px] mb-[50px] font-semibold">ავტორიზაცია</h1>
    <div class="relative w-full mb-[50px]">
      <input
          :style="{
            borderColor: error ? 'red' : 'black'
          }"
          v-model="email"
          class="placeholder-black focus:outline-primary border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="email"/>
      <transition>
        <label
            class="absolute -top-3.5 left-2.5 px-1 bg-white">ელ. ფოსტა</label>
      </transition>
    </div>
    <div class="relative w-full mb-5">
      <img @click="togglePassword" class="absolute w-5 h-5 top-2.5 right-2.5 hover:cursor-pointer"
           :src="show ? '/src/assets/auth/hide-password-icon.svg' : '/src/assets/auth/show-password-icon.svg'" alt="">
      <input
          :style="{
            borderColor: error ? 'red' : 'black'
          }"
          v-model="password"
          class="placeholder-black focus:outline-primary border-black border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          :type="show ? 'text' : 'password'">
      <transition>
        <label class="absolute -top-3.5 left-2.5 px-1 bg-white">პაროლი</label>
      </transition>
    </div>
    <!--    <div v-if="error" class="mb-[5px] -mt-2 w-full flex justify-start items-center gap-x-1">-->
    <!--      <img src="../../../assets/auth/error.svg" alt="error icon">-->
    <!--      <span class="text-sm text-error">მონაცემები არასწორია</span>-->
    <!--    </div>-->
    <router-link class="flex w-full justify-end  text-primary text-xs mb-5" to="">დაგავიწყდა?</router-link>
    <button class="bg-primary text-white py-[6.5px] rounded w-full hover:shadow-2xl mb-[15px]">შესვლა</button>
    <h3 class="flex justify-center mb-[15px]"> ან</h3>
    <button class="text-primary  py-[6.5px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </button>
  </form>
</template>