<script setup>
import useUser from "../../composables/useUser.js";
import AnimatedInput from "../../components/auth/AnimatedInput.vue";
import {ref} from "vue";
import axios from "../../interceptors/axios/index.js";

const {editAccount} = useUser();

const formFields = [
  {label: 'სახელი:', model: 'first_name'},
  {label: 'გვარი:', model: 'last_name'},
  {label: 'ტელ. ნომერი:', model: 'phone'},
  {label: 'ქალაქი:', model: 'city'},
  {label: 'პროფესია:', model: 'profession'}
];

const error = ref();
const success = ref();

const edit_account = async () => {
  error.value = null;
  success.value = null;

  await axios.post('', {}).then(() => {
    success.value = 'მონაცემები განახლდა წარმატებით!'
  }).catch(() => {
    error.value = 'დაფიქსირდა შეცდომა!'
  })
}
</script>

<template>
  <form @submit.prevent="edit_account" class="h-full flex justify-center items-center max-lg:py-4">
    <div class="flex flex-col justify-between gap-y-4 lg:gap-y-10">
      <div v-for="(field, index) in formFields" :key="index" class="grid grid-cols-3 items-center gap-x-1">
        <label class="whitespace-nowrap max-lg:text-sm" :for="field.model" v-text="field.label"/>

        <animated-input v-model="editAccount[field.model]" :id="field.model"/>
      </div>

      <div v-if="success" class="flex items-center w-full justify-start gap-x-2">
        <span class="text-sm text-price" v-text="success"/>
      </div>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-1.5">
        <img class="max-lg:w-2" src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-xs lg:text-sm text-error" v-text="error"/>
      </div>

      <button
          class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl"
          v-text="'შეცვლა'"/>
    </div>
  </form>
</template>