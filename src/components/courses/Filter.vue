<script setup>
import {ref} from "vue";

const show = ref(false);

const sortAttributes = ref([
  'პოპულარული',
  'ახლანდელი',
  'ფასი',
]);

const attrIndex = ref(0);
</script>
<template>
  <div class="relative">
    <div class="flex gap-x-1">
      <p class="">დალაგება:</p>
      <div class="flex gap-x-1 items-center" @click="show = !show">
        <button class="font-semibold" v-text="sortAttributes[attrIndex]"/>
        <img class="hover:cursor-pointer" :class="show ? 'rotate-180' : ''"
             src="/src/assets/icons/courses/down-arrow.svg" alt="down-up arrow">
      </div>
    </div>
    <ul v-show="show"
        class="absolute z-10 flex flex-col gap-y-4 bg-white right-0 py-2 rounded-md border-[#CACACA] shadow-xl w-60">
      <li v-for="(attribute, index) in sortAttributes" :key="index"
          @click="attrIndex = index"
          :class="attrIndex === index ? 'font-bold border-l-2 border-black' : 'font-normal'"
          class="block px-4 text-sm hover:cursor-pointer" v-text="attribute"/>
    </ul>
  </div>
</template>