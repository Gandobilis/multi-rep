<script setup>
import {ref} from "vue";

const titles = ref([
  'ავტორი', 'საგანი', 'ტელეფონი', 'შეფასება', "ფასი"
]);
</script>

<template>
  <div class="grid grid-cols-7 mt-20">
    <div/>
    <p v-for="(title, index) in titles" class="text-2xl font-bold text-primary" v-text="title" :key="index"/>
    <div/>
  </div>
</template>