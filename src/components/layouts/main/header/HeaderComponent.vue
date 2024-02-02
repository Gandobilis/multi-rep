<script setup>
import NavLink from "@/components/layouts/main/header/NavLink.vue";
import Favourite from "@/components/layouts/main/header/Favourite.vue";
import User from "@/components/layouts/main/header/User.vue";
import Search from "@/components/layouts/main/header/Search.vue";
</script>
<template>
  <nav class="flex justify-between items-center">
    <router-link to="/" class="cursor-pointer flex items-center gap-x-3">
      <img src="../../../../assets/icons/header/multi-rep-icon.svg" alt="multi rep logo">
      <h1 class="text-primary text-2xl">E-LEARNING</h1>
    </router-link>

    <div class="flex items-center gap-x-24">
      <nav-link path="/">მთავარი</nav-link>
      <nav-link path="/leaderboard">ლიდერბორდი</nav-link>
      <favourite/>
      <user/>
      <search/>
    </div>
  </nav>
</template>