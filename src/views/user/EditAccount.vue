<script setup>
import useUser from "../../composables/useUser.js";
import AnimatedInput from "../../components/auth/AnimatedInput.vue";

const {editAccount} = useUser();
</script>

<template>
  <form @submit.prevent="" class="h-full flex justify-center items-center">
    <div class="flex flex-col justify-between gap-y-10">
      <div class="grid grid-cols-3 items-center gap-x-1">
        <label class="whitespace-nowrap" v-text="'სახელი:'"/>

        <animated-input class="col-span-2" v-model="editAccount.first_name"/>
      </div>

      <div class="grid grid-cols-3 items-center gap-x-1">
        <label class="whitespace-nowrap" v-text="'გვარი:'"/>

        <animated-input class="col-span-2" v-model="editAccount.last_name"/>
      </div>

      <div class="grid grid-cols-3 items-center gap-x-1">
        <label class="whitespace-nowrap" v-text="'ტელ. ნომერი:'"/>

        <animated-input class="col-span-2" v-model="editAccount.phone"/>
      </div>

      <div class="grid grid-cols-3 items-center gap-x-1">
        <label class="whitespace-nowrap" v-text="'ქალაქი:'"/>

        <div class="relative">
          <animated-input class="col-span-2" v-model="editAccount.city"/>

          <img class="absolute top-[15px] right-[15px] hover:cursor-pointer" src="/src/assets/icons/user/close.svg"
               alt="close icon"/>
        </div>
      </div>

      <div class="grid grid-cols-3 items-center gap-x-1">
        <label class="whitespace-nowrap" v-text="'პროფესია:'"/>

        <div class="relative">
          <animated-input class="col-span-2" v-model="editAccount.profession"/>

          <img class="absolute top-[15px] right-[15px] hover:cursor-pointer" src="/src/assets/icons/user/close.svg"
               alt="close icon"/>
        </div>
      </div>

      <button class="w-full rounded-md bg-primary text-white py-2.5" v-text="'შეცვლა'"/>
    </div>
  </form>
</template>