<script setup>
import useLogin from "/src/composables/useLogin";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";

const {
  data,
  error,
  toggleRemember,
  login,
} = useLogin();
</script>

<template>
  <form @submit.prevent="login">
    <h1 class="mb-5 lg:mb-14 text-lg lg:text-3xl font-semibold">ავტორიზაცია</h1>

    <div class="w-full space-y-5 lg:space-y-12">
      <animated-input placeholder="ელ. ფოსტა" v-model="data.email"/>

      <animated-input placeholder="პაროლი" v-model="data.password" show-password-toggle/>
    </div>

    <div v-if="error" class="flex items-center justify-center gap-x-1.5 mt-3 lg:mt-5">
      <img class="max-lg:w-2" src="/src/assets/icons/auth/error.svg" alt="alert error icon"/>

      <span v-if="error" class="text-xs lg:text-sm text-error" v-text="error"/>
    </div>

    <div class="my-3 lg:my-6 flex w-full items-center justify-end lg:justify-between">
      <div class="flex items-center gap-x-1.5 max-lg:hidden">
        <img class="cursor-pointer" @click="toggleRemember" v-if="data.remember"
             src="/src/assets/icons/auth/remember-checked.svg" alt="remember checked"/>
        <img class="cursor-pointer" @click="toggleRemember" v-else src="/src/assets/icons/auth/remember-unchecked.svg"
             alt="remember unchecked"/>

        <label class="text-sm mb-0.5">დამახსოვრება</label>
      </div>

      <router-link class="text-[10px] lg:text-xs font-medium text-primary" to="/auth/recover">დაგავიწყდა?</router-link>
    </div>

    <button type="submit"
            class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl">
      შესვლა
    </button>

    <h3 class="my-1 lg:my-4 max-lg:text-xs flex justify-center">ან</h3>

    <router-link to="/auth/register"
                 class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md border text-center font-medium transition border-primary text-primary py-2 lg:py-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
      რეგისტრაცია
    </router-link>
  </form>
</template>
