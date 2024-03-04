<script setup>
import {ref} from "vue"

const titles = ref([
  'ავტორი', 'საგანი', 'ტელეფონი', 'შეფასება', "ფასი"
])
</script>

<template>
  <div class="mt-20 grid grid-cols-7">
    <div/>
    <p v-for="(title, index) in titles" class="text-2xl font-semibold text-primary" v-text="title" :key="index"/>
    <div/>
  </div>
</template>