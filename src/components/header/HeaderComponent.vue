<script setup>
import NavLink from "/src/components/header/NavLink.vue"
import Favourite from "/src/components/header/Favourite.vue"
import User from "/src/components/header/User.vue"
import {onMounted, ref} from "vue"
import Notifications from "./Notifications.vue"
import AddPost from "/src/components/modals/AddPost.vue"
import useUser from "/src/composables/useUser"
import HamburgerButton from "../../assets/icons/header/HamburgerButton.vue";
import MobileMenu from "../../assets/icons/header/MobileMenu.vue";
import Logo from "../../assets/icons/header/Logo.vue";

const {checkIfAuthenticated, isAuthenticated} = useUser();
onMounted(async () => {

  await checkIfAuthenticated()
})

const showMenu = ref(false);
const showModal = ref(false);
</script>
<template>
  <nav class="flex items-center justify-between">
    <logo/>

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

    <hamburger-button v-model="showMenu"/>

    <mobile-menu v-model:show-menu="showMenu" v-model:show-modal="showModal"/>

    <add-post @close-modal="showModal = false" v-if="showModal"/>
  </nav>
</template>