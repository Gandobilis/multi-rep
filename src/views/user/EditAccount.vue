<script setup>
import useUser from "../../composables/useUser.js";
import AnimatedInput from "../../components/auth/AnimatedInput.vue";

const {editAccount} = useUser();

const formFields = [
  {label: 'სახელი:', model: 'first_name'},
  {label: 'გვარი:', model: 'last_name'},
  {label: 'ტელ. ნომერი:', model: 'phone'},
  {label: 'ქალაქი:', model: 'city'},
  {label: 'პროფესია:', model: 'profession'}
];
</script>

<template>
  <form @submit.prevent="" class="h-full flex justify-center items-center">
    <div class="flex flex-col justify-between gap-y-10">
      <div v-for="(field, index) in formFields" :key="index" class="grid grid-cols-3 items-center gap-x-1">
        <label class="whitespace-nowrap" :for="field.model" v-text="field.label"/>

        <div class="relative col-span-2">
          <animated-input v-model="editAccount[field.model]" :id="field.model"/>

          <img v-if="['city', 'profession'].includes(field.model)"
               class="absolute top-[15px] right-[15px] hover:cursor-pointer" src="/src/assets/icons/user/close.svg"
               alt="close icon"/>
        </div>
      </div>

      <button class="w-full rounded-md bg-primary text-white py-2.5" v-text="'შეცვლა'"/>
    </div>
  </form>
</template>