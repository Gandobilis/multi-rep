<script setup>
import NavLink from "/src/components/header/NavLink.vue"
import Favourite from "/src/components/header/Favourite.vue"
import User from "/src/components/header/User.vue"
import Search from "/src/components/header/Search.vue"
import {ref} from "vue"
import Notifications from "./Notifications.vue"

const is_teacher = ref(false)
</script>
<template>
  <nav class="flex items-center justify-between">
    <router-link to="/" class="flex cursor-pointer items-center gap-x-3">
      <img src="../../assets/icons/header/multi-rep-icon.svg" alt="multi rep logo">
      <h1 class="text-2xl text-primary">E-LEARNING</h1>
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