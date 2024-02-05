<script setup>
import usePayment from "../../composables/usePayment.js";
import AnimatedInput from "../auth/AnimatedInput.vue";

const {show, data} = usePayment();
</script>

<template>
  <div
      v-if="show"
      class="absolute right-0 left-0 z-10 m-auto flex w-1/3 flex-col items-center gap-y-10 px-5 pt-5 pb-10 shadow-2xl">
    <div class="flex w-full items-center justify-between">
      <p class="text-2xl font-semibold" v-text="'გადახდა'"/>
      <img class="cursor-pointer" src="/src/assets/icons/modals/close.svg" alt="close icon" @click="show = false"/>
    </div>

    <form
        @submit.prevent=""
        class="flex w-3/5 flex-col items-center gap-y-10">
      <p>ფასი:<span class="font-semibold" v-text="` ${data.price} ₾`"/></p>

      <AnimatedInput placeholder="ბარათის ნომერი"/>

      <div class="flex justify-center items-center gap-x-4">
        <animated-input placeholder="მოქმედების ვადა"/>
        <animated-input placeholder="cvc/cvv"/>
      </div>

      <button
          type="submit"
          class="w-full rounded-md py-3 font-medium text-white bg-primary hover:shadow-2xl"
          v-text="'გადახდა'"/>
    </form>
  </div>
</template>