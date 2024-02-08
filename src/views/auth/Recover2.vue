<script setup>
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";
import useRecover from "/src/composables/useRecover.js";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const {
  password,
  error,
  token_id,
  recover2,
} = useRecover();

onMounted(() => {
  token_id.value = route.params.token_id;
});
</script>

<template>
  <div class="relative">
    <router-link to="/auth/register2" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="recover2" class="flex flex-col items-center">
      <h1 class="mb-14 text-3xl font-semibold">ახალი პაროლი</h1>

      <animated-input placeholder="პაროლი" v-model="password" show-password-toggle/>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-2 -my-10">
        <img src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-sm text-error" v-text="error"/>
      </div>

      <button class="mt-10 w-full rounded-md font-medium text-white bg-primary py-3.5 hover:shadow-xl">შეცვლა</button>
    </form>
  </div>
</template>