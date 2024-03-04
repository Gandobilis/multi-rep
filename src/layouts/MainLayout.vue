<script setup>
import HeaderComponent from "/src/components/header/HeaderComponent.vue"
import ReportSectionForMainPage from "/src/components/reports/reportSectionForMainPage.vue"
import {useRoute} from "vue-router"

const route = useRoute()
</script>

<template>
  <header-component class="px-3.5 py-2.5 lg:px-8 lg:py-8"/>
  <hr/>

  <div class="mb-20 px-3 lg:px-10">
    <main class="py-5 lg:py-10">
      <router-view/>
    </main>
  </div>
  <ReportSectionForMainPage v-if="route.path==='/'"/>
</template>