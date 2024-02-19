<script setup>
import LeftSide from "/src/components/auth/LeftSide.vue";
</script>

<template>
  <main class="grid h-screen lg:grid-cols-2">
    <left-side class="max-lg:hidden"/>

    <router-view class="mx-auto flex flex-col items-center justify-center w-1/2 lg:w-2/5"/>
  </main>
</template>
