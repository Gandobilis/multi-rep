<script setup>
import HeaderComponent from "../components/layouts/main/header/HeaderComponent.vue";
import FooterComponent from "../components/layouts/main/FooterComponent.vue";
</script>
<template>
  <header-component class="px-12 py-8"/>
  <hr/>
  <main class="px-12 py-14">
    <router-view/>
  </main>
  <!--    <footer-component class="px-12 py-14"/>-->
</template>