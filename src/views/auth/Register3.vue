<script setup>
import useRegister from "/src/composables/useRegister";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";

const {
  step3Models,
  step3Data,
  error,
  register
} = useRegister();
</script>

<template>
  <div class="relative">
    <router-link to="/auth/register2" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="register" class="flex flex-col items-center">
      <h1 class="mb-14 text-3xl font-semibold">რეგისტრაცია</h1>

      <div class="w-full space-y-10">
        <animated-input v-for="(field, index) in step3Models" :key="index"
                        :placeholder="field.placeholder"
                        v-model="step3Data[field.model]"
                        :show-password-toggle="field.showToggle"/>
      </div>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-2 -my-10">
        <img src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-sm text-error" v-text="error"/>
      </div>

      <button class="mt-10 w-full rounded-md font-medium text-white bg-primary py-3.5 hover:shadow-xl">რეგისტრაცია</button>
    </form>
  </div>
</template>