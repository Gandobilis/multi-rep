<script setup>
import LeftSideComponent from "../components/layouts/auth/LeftSideComponent.vue";
</script>
<template>
  <main class="grid grid-cols-2 h-screen">
    <LeftSideComponent/>
    <router-view/>
  </main>
</template>