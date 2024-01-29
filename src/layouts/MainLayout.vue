<script setup>
import HeaderComponent from "../components/layouts/main/HeaderComponent.vue";
import FooterComponent from "../components/layouts/main/FooterComponent.vue";
</script>
<template>
  <header-component/>
  <main>
    <router-view/>
  </main>
  <footer-component/>
</template>