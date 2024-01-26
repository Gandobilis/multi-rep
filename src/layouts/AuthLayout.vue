<script setup>
import LeftSideComponent from "../components/layouts/auth/LeftSideComponent.vue";
</script>
<template>
  <main class="grid grid-cols-2 h-screen">
    <LeftSideComponent/>
    <router-view class="flex flex-col items-center justify-center mx-auto"/>
  </main>
</template>