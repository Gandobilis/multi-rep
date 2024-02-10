<script setup>
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";
import useRegister from "../../composables/useRegister.js";

const {otp, success, error, cotasMeiparavCotasGaaketeb} = useRegister();

</script>

<template>
  <div class="relative">
    <router-link to="/auth/login" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="cotasMeiparavCotasGaaketeb" class="flex flex-col items-center">
      <h1 class="mb-12 text-3xl font-semibold">ემაილის ვერიფიკაცია</h1>

      <div class="w-full space-y-10">
        <animated-input placeholder="პინ.კოდი" v-model="otp"/>
      </div>

      <div v-if="success" class="flex items-center w-full justify-start gap-x-2 mt-8">
        <span class="text-sm text-price" v-text="success"/>
      </div>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-2 mt-8">
        <img src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-sm text-error" v-text="error"/>
      </div>

      <button class="mt-10 w-full rounded-md font-medium text-white bg-primary py-3.5 hover:shadow-xl">გაგზავნა</button>
    </form>
  </div>
</template>