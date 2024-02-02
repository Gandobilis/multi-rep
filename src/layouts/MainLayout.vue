<script setup>
import HeaderComponent from "../components/layouts/main/header/HeaderComponent.vue";
import FooterComponent from "../components/layouts/main/FooterComponent.vue";
</script>
<template>
  <header-component class="px-12 py-8"/>
  <hr/>
  <div class="container mx-auto">
    <main class="py-8">
      <router-view/>
    </main>
  </div>
  <!--    <footer-component class="px-12"/>-->
</template>