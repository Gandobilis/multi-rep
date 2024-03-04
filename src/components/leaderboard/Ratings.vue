<script setup>
import Rating from "/src/components/leaderboard/Rating.vue";
import useRatings from "../../composables/useRatings.js";
import {onMounted} from "vue";

const {ratings, getRatings} = useRatings();
onMounted(async () => {
  await getRatings()
})
</script>

<template>
  <div v-if="ratings" class="mt-7 lg:mt-14 flex flex-col gap-y-4">
    <Rating v-for="(rating, index) in ratings" :key="index" :rating="rating"/>
  </div>
  <div v-else class="mt-7 lg:mt-14 flex flex-col gap-y-4">
    <div v-for="i in 5" :key="i"
         class="grid grid-rows-3 grid-cols-3 lg:grid-rows-1 lg:grid-cols-7 items-center px-4 pt-3 lg:py-6">
      <div class="skeleton w-14 lg:w-28 aspect-square rounded-full"/>
      <div class="skeleton w-2/3 lg:w-32 h-6"/>
      <div class="skeleton w-2/3 lg:w-32 h-6"/>
      <div class="skeleton w-2/3 lg:w-32 h-6"/>
      <div class="skeleton w-2/3 lg:w-32 h-6"/>
      <div class="skeleton w-2/3 lg:w-32 h-6"/>
      <div class="skeleton w-full lg:w-32 h-6"/>
    </div>
  </div>
</template>
