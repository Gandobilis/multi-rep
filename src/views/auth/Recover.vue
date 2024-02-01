<script setup>
import AnimatedInput from "@/components/layouts/auth/AnimatedInput.vue";
import useRecover from "@/composables/useRecover.js";

const {email, success, error, recover} = useRecover()
</script>

<template>
  <div class="relative">
    <router-link to="/auth/login">
      <img class="cursor-pointer absolute top-10 left-3" src="@/assets/icons/auth/back-arrow.svg"
           alt="back arrow"/>
    </router-link>
    <form method="post" @submit.prevent="recover" class="w-[243px] flex flex-col items-center gap-y-[50px]">
      <h1 class="text-[32px] font-semibold whitespace-nowrap">პაროლის აღდგენა</h1>
      <animated-input placeholder="ელ. ფოსტა" v-model="email"/>
      <div v-if="success" class="flex items-center w-full justify-start gap-x-2 -my-9">
        <span class="text-sm text-price" v-text="success"/>
      </div>
      <div v-if="error" class="flex items-center w-full justify-start gap-x-2 -my-9">
        <img src="../../assets/icons/auth/error.svg" alt="alert error icon">
        <span class="text-sm text-error" v-text="error"/>
      </div>

      <button type="submit"
              class="mt-2.5 text-center py-[6.5px] rounded-[5px] hover:shadow-2xl text-white bg-primary w-full">
        გაგზავნა
      </button>
    </form>
  </div>
</template>
