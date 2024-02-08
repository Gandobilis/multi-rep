<script setup>
import HeaderComponent from "../components/header/HeaderComponent.vue";
import FooterComponent from "../components/footer/FooterComponent.vue";
</script>
<template>
  <header-component class="px-12 py-8"/>
  <hr/>
  <div class="container mx-auto">
    <main class="py-12 relative">
      <router-view/>
    </main>
  </div>
  <!--    <footer-component class="px-12"/>-->
</template>