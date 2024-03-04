<script setup>
import NavLink from "/src/components/header/NavLink.vue"
import Favourite from "/src/components/header/Favourite.vue"
import User from "/src/components/header/User.vue"
import {onMounted, ref} from "vue"
import Notifications from "./Notifications.vue"
import AddPost from "/src/components/modals/AddPost.vue"
import useUser from "/src/composables/useUser"
import HamburgerButton from "../../assets/icons/header/HamburgerButton.vue";

const show_modal = ref(false);
const {checkIfAuthenticated, isAuthenticated} = useUser();

onMounted(async () => {
  await checkIfAuthenticated()
})

const isOpen = ref(false);
</script>
<template>
  <nav class="flex items-center justify-between relative">
    <router-link to="/" class="flex cursor-pointer items-center gap-x-3">
      <img src="../../assets/icons/header/multi-rep-icon.svg" alt="multi rep logo">
      <h1 class="text-xl lg:text-2xl text-primary">მულტირეპი</h1>
    </router-link>

    <div class="flex items-center gap-x-24 max-lg:hidden">
      <nav-link path="/">მთავარი</nav-link>
      <nav-link path="/listings">განცხადებები</nav-link>
      <nav-link path="/leaderboard">ლიდერბორდი</nav-link>

      <button
          @click="isOpen = false; show_modal = true"
          v-if="isAuthenticated"
          class="max-lg:text-xs rounded-[5px] lg:rounded-md border text-center font-medium transition border-primary px-2 text-primary py-2 lg:py-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
        დაამატეთ განცხადება
      </button>

      <notifications v-if="false"/>
      <favourite/>
      <user v-if="isAuthenticated"/>
      <router-link v-else to="/auth/login"
                   class="w-full rounded-md border text-center font-medium border-primary text-primary p-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
        შესვლა
      </router-link>
    </div>

    <hamburger-button v-model="isOpen"/>

    <div v-if="isOpen"
         @click="isOpen = !isOpen"
         class="w-screen h-screen absolute top-20 left-0  flex flex-col pt-10 justify-start items-center gap-y-10 bg-white z-10">
      <nav-link path="/" class="">მთავარი</nav-link>
      <nav-link path="/leaderboard" class="">ლიდერბორდი</nav-link>


      <button
          @click="isOpen = false; show_modal = true"
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
    <add-post @close-modal="show_modal = false" v-if="show_modal"/>
  </nav>
</template>