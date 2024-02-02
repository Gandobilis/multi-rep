<script setup>
import HeaderComponent from "../components/layouts/main/header/HeaderComponent.vue";
import FooterComponent from "../components/layouts/main/FooterComponent.vue";
</script>
<template>
  <div class="px-12 py-14">
    <header-component/>
    <main>
      <router-view/>
    </main>
<!--    <footer-component/>-->
  </div>
</template>