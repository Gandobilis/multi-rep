<script setup>


import { ref } from "vue";

const search = ref(false);

const toggleSearch = () => {
  search.value = !search.value;
};
</script>

<template>
  <div class="relative">
    <img class="hover:cursor-pointer" @click="toggleSearch"
      :src="search ? 'src/assests/Vector1.svg' : 'src/assests/Vector.svg'" alt="search icon" />
    <div v-if="search" class="absolute border border-gray-300 px-3 py-2 rounded-lg top-12 right-0 flex">
      <input v-if="search" type="text" class="border border-black px-3 py-2  placeholder-black" placeholder="ძიება" />
      <img :src="search ? 'src/assests/Vector2.svg' : ''" class="px-4 mr-5 bg-red-800 " />
    </div>
  </div>
</template>   