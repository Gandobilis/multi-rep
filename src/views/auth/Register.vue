<script setup>
import useRegister from "/src/composables/auth/useRegister";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";

const {
  step1Models,
  step1Data,
  step1,
  error,
} = useRegister();
</script>

<template>
  <div class="relative">
    <router-link to="/auth/login" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="step1()" class="flex flex-col items-center">
      <h1 class="mb-14 text-3xl font-semibold">რეგისტრაცია</h1>

      <div class="w-full space-y-10">
        <template v-for="(field, index) in step1Models" :key="index">
          <div v-if="index === 4"
               class="w-full rounded-md gap-x-4 flex items-start">

            <div class="flex items-center gap-x-2.5">
              <input v-model="step1Data[field.model]" checked type="radio" :value="false" name="type"
                     class="checked:accent-primary cursor-pointer">

              <label class="text-sm">მოსწავლე</label>
            </div>

            <div class="flex items-center gap-x-2.5">
              <input v-model="step1Data[field.model]" type="radio" name="type" :value="true"
                     class="checked:accent-primary cursor-pointer">

              <label class="text-sm">მასწავლებელი</label>
            </div>
          </div>

          <animated-input v-else :placeholder="field.placeholder"
                          v-model="step1Data[field.model]"
                          :show-password-toggle="field.showToggle"/>
        </template>
      </div>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-1.5 mt-5">
        <img src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-sm text-error" v-text="error"/>
      </div>

      <button class="mt-10 w-full rounded-md font-medium text-white bg-primary py-3.5 hover:shadow-xl">შემდეგი</button>
    </form>
  </div>
</template>

