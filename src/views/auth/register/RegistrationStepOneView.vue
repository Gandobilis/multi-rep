<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const email = ref('')
const userType = ref('')

const goBack = () => {
  router.go(-1);
}
</script>

<template>
  <div class="relative">
    <img @click="goBack" class="cursor-pointer absolute top-10 left-3" src="../../../assets/icons/auth/back-arrow.svg"
         alt="back arrow"/>
    <form method="post" @submit.prevent class="w-[243px] flex flex-col items-center gap-y-[50px]">
      <h1 class="text-[32px] font-semibold">რეგისტრაცია</h1>
      <div class="relative w-full">
        <input
            v-model="firstName"
            class="placeholder-black focus:outline-primary border border-black rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
            type="text"/>
        <label class="absolute -top-3.5 left-2.5 px-1 bg-white">სახელი</label>
      </div>
      <div class="relative w-full">
        <input
            v-model="lastName"
            class="placeholder-black focus:outline-primary border border-black rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
            type="text"/>
        <label class="absolute -top-3.5 left-2.5 px-1 bg-white">გვარი</label>
      </div>
      <div class="relative w-full">
        <input
            v-model="phoneNumber"
            class="placeholder-black focus:outline-primary border border-black rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
            type="text"/>
        <label class="absolute -top-3.5 left-2.5 px-1 bg-white">ტელ. ნომერი</label>
      </div>
      <div class="relative w-full">
        <input
            v-model="email"
            class="placeholder-black focus:outline-primary border border-black rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
            type="text"/>
        <label class="absolute -top-3.5 left-2.5 px-1 bg-white">ელ. ფოსტა</label>
      </div>
      <div class="w-full rounded-[5px] gap-y-[18px] flex flex-col items-start border border-black pl-2.5 py-[13px]">
        <div class="flex items-center gap-x-2.5">
          <input v-model="userType" checked type="radio" value="student" name="type"
                 class="checked:accent-primary"><label
            class="text-sm">მოსწავლე</label>
        </div>
        <div class="flex items-center gap-x-2.5">
          <input v-model="userType" type="radio" name="type" value="teacher" class="checked:accent-primary"><label
            class="text-sm">მასწავლებელი</label>
        </div>
      </div>
      <router-link to="/auth/registration-step-two"
                   class="mt-2.5 text-center py-[6.5px] rounded-[5px] hover:shadow-2xl text-white bg-primary w-full">
        შემდეგი
      </router-link>
    </form>
  </div>
</template>
