<script setup>
import useLogin from "/src/composables/useLogin"
import AnimatedInput from "/src/components/auth/AnimatedInput.vue"

const {data, getRememberIcon, toggleRemember, error, login} = useLogin()
</script>

<template>
  <form @submit.prevent="login">
    <h1 class="mb-12 text-3xl font-semibold">ავტორიზაცია</h1>

    <div class="mb-4 w-full space-y-10">
      <animated-input placeholder="ემაილი" v-model="data.email"/>

      <animated-input placeholder="პაროლი" v-model="data.password" show-password-toggle/>
    </div>

    <div v-if="error" class="flex w-full items-center justify-center gap-x-1.5 mb-1.5">
      <img src="../../assets/icons/auth/error.svg" alt="alert error icon">

      <span v-if="error" class="text-sm text-error" v-text="error"/>
    </div>

    <div class="mb-5 flex w-full items-center justify-between">
      <div class="flex items-center gap-x-1.5">
        <img
            :src="getRememberIcon()"
            class="cursor-pointer"
            @click="toggleRemember" alt="remember icon"/>
        <label class="text-sm mb-0.5">დამახსოვრება</label>
      </div>

      <router-link class="flex w-full justify-end text-xs text-primary" to="/auth/recover">
        დაგავიწყდა?
      </router-link>

    </div>

    <button class="w-full rounded text-white bg-primary py-[6.5px] mb-[15px] hover:shadow-2xl">შესვლა</button>

    <h3 class="flex justify-center mb-[15px]"> ან</h3>

    <router-link to="/auth/register"
                 class="w-full text-center text-primary py-[6.5px] rounded-[5px] hover:bg-primary hover:text-white hover:shadow-2xl">
      რეგისტრაცია
    </router-link>
  </form>
</template>