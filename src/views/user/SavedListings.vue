<script setup>
import useUser from "../../composables/forFavorites.js";
import {onMounted} from "vue";

const {favoriteListings, getFavoriteListings} = useUser();
onMounted(async () => {
  await getFavoriteListings()
})
</script>

<template>
  <p class="border-b px-5 py-3 lg:py-6 lg:text-2xl font-semibold border-b-border-gray" v-text="'შენახული განცხადებები'"/>

  <div v-if="favoriteListings" class="flex flex-col gap-y-7 lg:gap-y-11 px-5 py-5 lg:py-10">
    <div class="flex  gap-20" v-for="(listing, index) in favoriteListings" :key="index">
      <img class="w-72 rounded-2xl object-cover  h-40" :src="listing._photo" alt="listing image">

      <div class="flex  flex-col gap-y-8">
        <p class="lg:text-2xl font-medium" v-text="listing.title"/>

        <div class="flex max-lg:flex-wrap items-center justify-between">
          <div class="flex items-center gap-x-2">
            <img class="max-lg:w-5" src="/src/assets/icons/user/rating.svg" alt="rating icon">

            <p class="max-lg:text-sm"><span v-text="listing.rating"/>/5.0</p>
          </div>

          <p class="max-lg:text-sm text-xl  font-semibold text-price" v-text="`${listing.price} ₾`"/>

          <div class="max-lg:hidden flex items-center jus text-xl gap-x-2">
            <p v-text="listing._teacher"/>

            <p class="text-sm text-primary" v-text="listing._phone"/>
          </div>
        </div>
        <p class="text-lg text-gray-700">{{listing._city}} <span class="text-sm" v-if="listing._district">/ {{listing._district}}</span></p>
      </div>

    </div>
  </div>
</template>