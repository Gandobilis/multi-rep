<script setup>
import HeaderComponent from "/src/components/header/HeaderComponent.vue"
import ReportSectionForMainPage from "/src/components/reports/reportSectionForMainPage.vue"
import {useRoute} from "vue-router"

const route = useRoute()
</script>

<template>
  <header-component class="px-3.5 py-2.5 lg:px-12 lg:py-8"/>
  <hr/>

  <main class="px-3.5 py-5 lg:px-24 lg:py-16">
    <router-view/>
  </main>
  <ReportSectionForMainPage v-if="route.path==='/'"/>
</template>