<script setup>
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";
import useRecover from "../../composables/useRecover.js";

const {email, success, error, recover} = useRecover();
</script>

<template>
  <div class="relative">
    <router-link to="/auth/login" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="recover" class="flex flex-col items-center">
      <h1 class="mb-4 lg:mb-14 text-lg lg:text-3xl font-semibold">პაროლის აღდგენა</h1>

      <div class="w-full">
        <animated-input placeholder="ელ. ფოსტა" v-model="email"/>
      </div>

      <div v-if="success" class="flex items-center w-full justify-start gap-x-2 mt-2 lg:mt-8">
        <span class="text-sm text-price" v-text="success"/>
      </div>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-2 mt-2 lg:mt-8">
        <img class="max-lg:w-2" src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-xs lg:text-sm text-error" v-text="error"/>
      </div>

      <button
          class="mt-4 lg:mt-10 max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-1.5 lg:py-3.5 hover:shadow-xl">
        გაგზავნა
      </button>
    </form>
  </div>
</template>