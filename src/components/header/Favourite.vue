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

const handleFavoriteClick = (event) => {
  window.location = '/user/saved-listings'
  event.preventDefault();
};

const handleSpecificFavorite = (id) => {
  window.location = `/listings/${id}`
  event.preventDefault();
};


const show = ref(false)
</script>

<template>
  <div v-if="isAuthenticated" class="relative">
    <div class="cursor-pointer">
      <heart-icon @click="show = !show" :stroke="show ? '#950E1D' : 'black'"/>

    </div>

    <div  class="absolute top-12 w-80 items-center flex flex-col right-0 z-10 rounded-md border border-gray-400 bg-white"
         :class="show ? 'block' : 'hidden'">
      <p class="whitespace-nowrap p-3  font-bold">ფავორიტი განცხადები</p>
      <div v-if="favoriteListings"  class="flex flex-col gap-y-5 border-t  border-t-gray-400 p-3">
        <div
            @click="show = !show"
            v-for="(statement, index) in favoriteListings.slice(0,4)" :key="index"
            class="cursor-pointer whitespace-nowrap hover:text-primary">

          <div @click="handleSpecificFavorite(statement.id)" class="flex items-center gap-5">
            <img class="object-cover w-14 h-14 rounded-full" :src="statement._photo" alt="">
            <div class="flex flex-col gap-3">
              <p class="font-semibold">{{statement.title.slice(0,20)}}</p>
              <p class="text-sm">{{statement._subject}}</p>

            </div>

          </div>

        </div>
      </div>

      <p @click="handleFavoriteClick" class="mb-5  text-primary cursor-pointer hover:opacity-70">ყველა ფავორიტი განცხადება</p>
    </div>
  </div>
</template>
