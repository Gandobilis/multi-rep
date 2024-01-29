<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
}
</script>

<template>
  <div class="relative">
    <img @click="goBack" class="cursor-pointer absolute top-10 left-3" src="../../../assets/auth/back-arrow.svg"
         alt="back arrow"/>
    <form method="post" @submit.prevent class="w-[243px] flex flex-col items-center gap-y-[50px]">
      <h1 class="text-[32px] font-semibold text-center whitespace-nowrap">შეიყვანეთ მეილზე<br>გამოგზავნილი პინკოდი</h1>
      <router-link to="/auth/recover-password-step-three"
                   class="mt-2.5 text-center py-[6.5px] rounded-[5px] hover:shadow-2xl text-white bg-primary w-full">
        შემდეგი
      </router-link>
    </form>
  </div>
</template>