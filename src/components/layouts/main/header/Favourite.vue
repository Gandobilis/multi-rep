<script setup>
import {ref} from "vue";
import HeartIcon from "@/assets/icons/header/HeartIcon.vue";

const show = ref(false)
const favourites = ref(1);
const statements = ref([
  'ახალი ჯავას კურსი',
  'ახალი ჯავას კურსი',
  'ახალი ჯავას კურსი'
]);
</script>

<template>
  <div class="relative">
    <div class="cursor-pointer">
      <heart-icon @click="show = !show" :stroke="show ? '#950E1D' : 'black'"/>
      <span
          :class="show ? 'text-primary border border-primary  bg-white' : 'bg-primary text-white'"
          class="-top-2.5 -right-2.5 absolute w-6 h-6 rounded-full flex items-center justify-center"
          v-text="favourites"/>
    </div>
    <div class="absolute bg-white z-10 border border-gray-400 rounded-md top-12 right-0" :class="show ? 'block' : 'hidden'">
      <p class="whitespace-nowrap text-sm font-bold p-3">შენახული განცხადები</p>
      <div class="flex flex-col border-t border-t-gray-400 p-3 gap-y-2">
        <router-link
            to="/"
            @click="show = !show"
            v-for="(statement, index) in statements" :key="index"
            class="whitespace-nowrap cursor-pointer"
            v-text="statement"/>
      </div>
    </div>
  </div>
</template>
