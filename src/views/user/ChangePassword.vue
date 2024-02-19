<script setup>
import AnimatedInput from "../../components/auth/AnimatedInput.vue";
import {ref} from "vue";

const password = ref();
const repeat = ref();
</script>

<template>
  <form @submit.prevent="" class="h-full flex justify-center items-center max-lg:py-4">
    <div class="flex flex-col justify-between gap-y-4 lg:gap-y-10">
      <animated-input v-model="password" placeholder="პაროლი" show-password-toggle/>

      <animated-input v-model="repeat" placeholder="გაიმეორეთ" show-password-toggle/>

      <button
          class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl"
          v-text="'შეცვლა'"/>
    </div>
  </form>
</template>