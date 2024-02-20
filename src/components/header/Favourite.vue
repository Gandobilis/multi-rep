<script setup>
import {onMounted, ref} from "vue";
import HeartIcon from "/src/assets/icons/header/HeartIcon.vue";
import useUser from "../../composables/useUser.js";
import forFavorites from "../../composables/forFavorites.js";
const {favoriteListings, getFavoriteListings} = forFavorites();

const {checkIfAuthenticated, isAuthenticated} = useUser();

onMounted(async ()=>{
  checkIfAuthenticated()
  await getFavoriteListings()
})

const show = ref(false)
const favourites = ref(1);
</script>

<template>
  <div v-if="isAuthenticated" class="relative">
    <div class="cursor-pointer">
      <heart-icon @click="show = !show" :stroke="show ? '#950E1D' : 'black'"/>
      <span
          :class="show ? 'text-primary border border-primary  bg-white' : 'bg-primary text-white'"
          class="absolute flex h-6 w-6 items-center justify-center rounded-full -top-2.5 -right-2.5"
          v-text="favourites"/>
    </div>
    <div class="absolute top-12 right-0 z-10 rounded-md border border-gray-400 bg-white"
         :class="show ? 'block' : 'hidden'">
      <p class="whitespace-nowrap p-3 text-sm font-bold">ფავორიტი განცხადები</p>
      <div v-if="favoriteListings"  class="flex flex-col gap-y-2 border-t border-t-gray-400 p-3">
        <router-link
            to="/"
            @click="show = !show"
            v-for="(statement, index) in favoriteListings" :key="index"
            class="cursor-pointer whitespace-nowrap hover:text-primary"
            v-text="statement"/>
      </div>

    </div>
  </div>
</template>
