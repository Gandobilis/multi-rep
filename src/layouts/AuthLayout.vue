<script setup>
import LeftSide from "/src/components/auth/LeftSide.vue";
</script>

<template>
  <main class="grid h-screen grid-cols-2">
    <left-side/>

    <router-view class="mx-auto flex flex-col items-center justify-center w-2/5"/>
  </main>
</template>
