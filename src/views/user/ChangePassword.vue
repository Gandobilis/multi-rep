<script setup>
import AnimatedInput from "../../components/auth/AnimatedInput.vue";
import {ref} from "vue";

const password = ref();
const repeat = ref();
</script>

<template>
  <form @submit.prevent="" class="h-full flex justify-center items-center">
    <div class="flex flex-col justify-between gap-y-10">
      <animated-input v-model="password" placeholder="პაროლი" show-password-toggle/>

      <animated-input v-model="repeat" placeholder="გაიმეორეთ" show-password-toggle/>

      <button class="w-full rounded-md bg-primary text-white py-2.5" v-text="'შეცვლა'"/>
    </div>
  </form>
</template>