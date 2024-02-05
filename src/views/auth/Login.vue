<script setup>
import useLogin from "@/composables/useLogin"
import AnimatedInput from "@/components/layouts/auth/AnimatedInput.vue"

const {email, password, remember, error, login} = useLogin()
</script>
<template>
  <form method="post" @submit.prevent="login" class="w-[243px] mx-auto">
    <h1 class="text-[32px] mb-[50px] font-semibold">ავტორიზაცია</h1>
    <div class="w-full space-y-10 mb-4">
      <animated-input placeholder="ემაილი" v-model="email"/>
      <animated-input placeholder="პაროლი" v-model="password" show-password-toggle/>
    </div>
    <div v-if="error" class="flex items-center w-full justify-center gap-x-1.5 mb-1.5">
      <img src="../../assets/icons/auth/error.svg" alt="alert error icon">
      <span v-if="error" class="text-sm text-error" v-text="error"/>
    </div>
    <div class="w-full flex justify-between items-center mb-5">
      <div class="flex items-center gap-x-1.5">
        <input type="checkbox" v-model="remember"><label class="text-sm mb-0.5">დამახსოვრება</label>
      </div>
      <router-link class="flex w-full justify-end  text-primary text-xs" to="/auth/recover">
        დაგავიწყდა?
      </router-link>
    </div>
    <button class="bg-primary text-white py-[6.5px] rounded w-full hover:shadow-2xl mb-[15px]">შესვლა</button>
    <h3 class="flex justify-center mb-[15px]"> ან</h3>
    <router-link to="/auth/register"
                 class="text-center text-primary  py-[6.5px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </router-link>
  </form>
</template>