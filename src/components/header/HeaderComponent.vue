<script setup>
import NavLink from "/src/components/header/NavLink.vue"
import Favourite from "/src/components/header/Favourite.vue"
import User from "/src/components/header/User.vue"
import {ref} from "vue"
import Notifications from "./Notifications.vue"
import cookies from "vue-cookies";
import AddPost from "../modals/AddPost.vue";

const show_modal = ref(false);
const isOpen = ref(false);
</script>
<template>
  <nav class="flex items-center justify-between relative">
    <router-link to="/" class="flex cursor-pointer items-center gap-x-3">
      <img src="../../assets/icons/header/multi-rep-icon.svg" alt="multi rep logo">
      <h1 class="text-xl lg:text-2xl text-primary">E-LEARNING</h1>
    </router-link>

    <div class="flex items-center gap-x-24 max-lg:hidden">
      <nav-link path="/">მთავარი</nav-link>
      <nav-link path="/leaderboard">ლიდერბორდი</nav-link>
      <button
          @click="isOpen = false; show_modal = true"
          v-if="cookies.get('user_id')"
          class="max-lg:text-xs rounded-[5px] lg:rounded-md border text-center font-medium transition border-primary px-2 text-primary py-2 lg:py-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
        დაამატეთ განცხადება
      </button>

      <notifications v-if="false"/>
      <favourite/>
      <user v-if="cookies.get('user_id')"/>
      <router-link v-else to="/auth/login"
                   class="w-full rounded-md border text-center font-medium border-primary text-primary p-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
        შესვლა
      </router-link>
    </div>
    <img class="lg:hidden w-8 cursor-pointer" @click="isOpen = !isOpen" alt="hamburger icon"
         v-if="isOpen"
         src="/src/assets/icons/header/close-icon.svg"
    />
    <img class="lg:hidden w-8 cursor-pointer" @click="isOpen = !isOpen" alt="hamburger icon"
         v-else
         src="/src/assets/icons/header/Hamburger_icon.svg.png"
    />
    <div v-if="isOpen"
         @click="isOpen = !isOpen"
         class="w-screen h-screen absolute top-20 left-0 flex flex-col pt-10 justify-start items-center gap-y-10 bg-white z-10">
      <nav-link path="/" class="text-sm">მთავარი</nav-link>
      <nav-link path="/leaderboard" class="text-sm">ლიდერბორდი</nav-link>
      <button
          @click="isOpen = false; show_modal = true"
          v-if="cookies.get('user_id')"
          class="max-lg:text-xs rounded-[5px] lg:rounded-md border text-center font-medium transition border-primary px-2 text-primary py-2 lg:py-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
        დაამატეთ განცხადება
      </button>
      <user v-if="cookies.get('user_id')"/>
      <router-link v-else to="/auth/login"
                   class="w-1/2 text-sm rounded-[5px] border text-center font-medium border-primary text-primary p-2 hover:bg-primary hover:text-white hover:shadow-xl">
        შესვლა
      </router-link>
    </div>
    <add-post @close-modal="show_modal = false" v-if="show_modal"/>
  </nav>
</template>