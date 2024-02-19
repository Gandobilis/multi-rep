<script setup>
import HeaderComponent from "../components/header/HeaderComponent.vue";
import FooterComponent from "../components/footer/FooterComponent.vue";
import ReportSectionForMainPage from "../components/reports/reportSectionForMainPage.vue";
import {useRoute} from "vue-router";
const route = useRoute()
</script>
<template>
  <header-component class="px-12 py-8"/>
  <hr/>
  <div class="container mx-auto mb-20">
    <main class="py-6 lg:py-12">
      <router-view/>
    </main>
  </div>
  <ReportSectionForMainPage v-if="route.path==='/' "/>
<!--  <footer-component class="px-12"/>-->
</template>