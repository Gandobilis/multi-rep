<script setup>
import NavLink from "/src/components/header/NavLink.vue"
import User from "/src/components/header/User.vue"

const showMenu = defineModel('showMenu')
const showModal = defineModel('showModal')
</script>

<template>
  <div v-if="showMenu"
       @click="showMenu = !showMenu"
       class="w-screen h-screen absolute top-20 left-0  flex flex-col pt-10 justify-start items-center gap-y-10 bg-white z-10">
    <nav-link path="/" class="">მთავარი</nav-link>
    <nav-link path="/leaderboard" class="">ლიდერბორდი</nav-link>


    <button
        @click="showMenu = false; showModal = true"
        v-if="isAuthenticated"
        class=" rounded-[5px]  lg:rounded-md border text-center font-medium transition border-primary px-2 text-primary py-2 lg:py-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
      დაამატეთ განცხადება
    </button>
    <user v-if="isAuthenticated"/>
    <router-link v-else to="/auth/login"
                 class="w-1/2  rounded-[5px] border text-center font-medium border-primary text-primary p-2 hover:bg-primary hover:text-white hover:shadow-xl">
      შესვლა
    </router-link>
  </div>
</template>