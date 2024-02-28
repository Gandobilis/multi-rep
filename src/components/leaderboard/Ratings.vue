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
</template>
