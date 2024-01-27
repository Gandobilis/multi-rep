<script setup>
import {ref} from "vue";

const search = ref(false)

const toggleSearch = () => {
  search.value = !search.value
}
</script>
<template>
  <div class="relative">
    <img class="hover:cursor-pointer" @click="toggleSearch" :src="!search ? 'src/assests/Vector.svg' : 'src/assests/Vector1.svg'" alt="search icon"/>
  </div>
</template>