<script setup>
import {ref} from "vue";
import SearchIcon from "/src/assets/icons/header/SearchIcon.vue";

const show = ref(false)
</script>

<template>
  <div class="relative">
    <img @click="show = !show"
         class="cursor-pointer"
         :src="show ? '/src/assets/icons/header/close-icon.svg' : '/src/assets/icons/header/search-icon.svg'"
         :alt="(show ? 'close' : 'search') + 'icon'"/>
    <div class="flex bg-white absolute z-10 top-12 right-0" :class="show ? 'block' : 'hidden'">
      <input placeholder="ძიება"
             class="focus:outline-none border border-gray-400 px-2 py-2 rounded-l-lg"/>
      <div class="flex items-center bg-primary p-2 rounded-r-lg">
        <search-icon stroke="white"/>
      </div>
    </div>
  </div>
</template>