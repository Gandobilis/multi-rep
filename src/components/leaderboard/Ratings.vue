<script setup>
import {ref} from "vue"
import Rating from "/src/components/leaderboard/Rating.vue"
import useRatings from "../../composables/useRatings.js";

const {ratings} = useRatings()
</script>

<template>
  <div class="mt-7 lg:mt-14 flex flex-col gap-y-4">
    <Rating v-for="(rating, index) in ratings" :key="index" :rating="rating"/>
  </div>
</template>
