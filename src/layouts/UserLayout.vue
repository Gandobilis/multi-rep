<script setup>
import HeaderComponent from "../components/header/HeaderComponent.vue";
import Info from "../components/user/Info.vue";
import Links from "../components/user/Links.vue";
</script>

<template>
  <header-component class="px-12 py-8"/>
  <hr/>
  <div class="container mx-auto">
    <main class="py-12 max-lg:px-5">
      <div class="flex max-lg:flex-col max-lg:gap-y-4 lg:gap-x-10">
        <div class="lg:w-1/3 flex flex-col gap-y-10">
          <Info class="max-lg:hidden"/>
          <Links/>
        </div>
        <div class="lg:w-2/3  border border-[#CACACA] rounded-md">
          <RouterView/>
        </div>
      </div>
    </main>
  </div>
</template>
