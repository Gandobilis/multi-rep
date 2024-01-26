<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <header-component />
  <main>
    <router-view />
  </main>
  <footer-component />
</template>