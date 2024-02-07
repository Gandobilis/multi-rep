<script setup>
import NavLink from "/src/components/header/NavLink.vue"
import Favourite from "/src/components/header/Favourite.vue"
import User from "/src/components/header/User.vue"
import Search from "/src/components/header/Search.vue"
import {ref} from "vue"
import Notifications from "./Notifications.vue"

const is_teacher = ref(true)
</script>
<template>
  <nav class="flex justify-between items-center">
    <router-link to="/" class="cursor-pointer flex items-center gap-x-3">
      <img src="../../assets/icons/header/multi-rep-icon.svg" alt="multi rep logo">
      <h1 class="text-primary text-2xl">E-LEARNING</h1>
    </router-link>

    <div class="flex items-center gap-x-24">
      <nav-link path="/">მთავარი</nav-link>
      <nav-link path="/leaderboard">ლიდერბორდი</nav-link>
      <notifications v-if="is_teacher"/>
      <favourite/>
      <user/>
      <search/>
    </div>
  </nav>
</template>