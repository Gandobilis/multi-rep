<script setup>
import HeaderComponent from "../components/header/HeaderComponent.vue";
import Info from "../components/user/Info.vue";
import Links from "../components/user/Links.vue";
import useUser from "../composables/useUser.js";
import {onMounted} from "vue";
const {checkIfAuthenticated, isAuthenticated} = useUser();
onMounted(async ()=>{
  checkIfAuthenticated()
})
</script>

<template>
  <header-component class="px-12 py-8"/>
  <hr/>
  <div v-if="isAuthenticated" class="container mx-auto">
    <main class="py-12">
      <div class="flex gap-x-10">
        <div class="w-1/3 flex flex-col gap-y-10">
          <Info/>
          <Links/>
        </div>
        <div class="w-2/3 border border-[#CACACA] rounded-md">
          <RouterView/>
        </div>
      </div>
    </main>
  </div>
  <p>გაიარეთ ავტორიზაცია!</p>
</template>
