<script setup>
import useUser from "../../composables/forFavorites.js";
import {onMounted} from "vue";

const {favoriteListings, getFavoriteListings} = useUser();
onMounted(async () => {
  await getFavoriteListings()
})
</script>

<template>
  <p class="border-b px-5 py-3 lg:py-6 lg:text-2xl font-semibold border-b-border-gray" v-text="'ფავორიტი განცხადებები'"/>

  <div v-if="favoriteListings" class="flex flex-col gap-y-7 items-center justify-center lg:gap-y-11  px-5 py-5 lg:py-10">
    <a class="flex lg:flex-row w-full flex-col cursor-pointer rounded-2xl border-b-primary border pb-2 px-2  shadow-xl  gap-5 lg:gap-20" v-for="(listing, index) in favoriteListings" :key="index" :href="`/listings/${listing.id}`"  >
      <img class="lg:w-[35%] rounded-2xl object-cover  " :src="listing._photo" alt="listing image">

      <div class="flex  flex-col gap-y-2 lg:gap-y-8">
        <p class="lg:text-2xl font-medium px-2" v-text="listing.title"/>

        <div class="flex max-lg:flex-wrap items-center gap-5 ">
          <div class="flex items-center gap-x-2">
            <img class="max-lg:w-5" src="/src/assets/icons/user/rating.svg" alt="rating icon">
            <p class="max-lg:text-sm"><span v-text="listing._score"/>/5.00</p>
          </div>

          <p class="max-lg:text-sm text-xl  font-semibold text-price">
            {{listing.price}} {{listing.currency}}
          </p>

          <div class="max-lg:hidden flex items-center jus text-xl gap-x-2">
            <p v-text="listing._teacher"/>
          </div>
        </div>
        <p class="text-lg text-gray-700">{{listing._city}} <span class="text-sm" v-if="listing._district">/ {{listing._district}}</span></p>
        <div class="flex items-center justify-between">
         <div class="flex gap-2 items-center justify-center">
           <img class="w-8 h-8 object-cover rounded-full" :src="listing.teacher.profile_pic" alt="">
           <p class="text-sm font-semibold">{{listing._teacher}}</p>
         </div>
          <p class="text-sm text-primary font-medium">{{listing._phone}}</p>

        </div>


      </div>

    </a>
  </div>
</template>