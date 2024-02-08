<script setup>
import useLogin from "/src/composables/useLogin";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";

const {
  data,
  getRememberIcon,
  toggleRemember,
  error,
  login,
} = useLogin();
</script>

<template>
  <form @submit.prevent="login">
    <h1 class="mb-14 text-3xl font-semibold">ავტორიზაცია</h1>

    <div class="w-full space-y-12">
      <animated-input placeholder="ელ. ფოსტა" v-model="data.email"/>
      <animated-input placeholder="პაროლი" v-model="data.password" show-password-toggle/>
    </div>

    <div v-if="error" class="flex items-center justify-center gap-x-1.5">
      <img src="/src/assets/icons/auth/error.svg" alt="alert error icon"/>
      <span v-if="error" class="text-sm text-error" v-text="error"/>
    </div>

    <div class="my-6 flex w-full items-center justify-between">
      <div class="flex items-center gap-x-1.5">
        <img :src="getRememberIcon()" class="cursor-pointer" @click="toggleRemember" alt="remember icon"/>
        <label class="text-sm mb-0.5">დამახსოვრება</label>
      </div>
      <router-link class="text-xs font-medium text-primary" to="/auth/recover">
        დაგავიწყდა?
      </router-link>
    </div>

    <button class="w-full rounded-md font-medium text-white bg-primary py-3.5 hover:shadow-xl">
      შესვლა
    </button>

    <h3 class="my-4 flex justify-center">ან</h3>

    <router-link to="/auth/register"
                 class="w-full rounded-md border text-center font-medium transition border-primary text-primary py-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
      რეგისტრაცია
    </router-link>
  </form>
</template>
