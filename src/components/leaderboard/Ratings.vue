<script setup>
import {onMounted} from "vue"
import useRatings from "/src/composables/useRatings"
import Rating from "/src/components/leaderboard/Rating.vue"
import ErrorAlert from "../alerts/ErrorAlert.vue";

const {ratings, isLoading, error, getRatings} = useRatings()

onMounted(async () => {
  await getRatings()
})
</script>

<template>
  <div v-if="ratings" class="flex flex-col gap-y-4">
    <Rating v-for="(rating, index) in ratings" :key="index" :rating="rating"/>
  </div>
  <div v-else-if="isLoading" class="flex flex-col gap-y-4">
    <div v-for="i in 5" :key="i"
         class="border border-gray-400 rounded-lg grid grid-cols-3 grid-rows-3 items-center px-4 pt-3 lg:grid-cols-7 lg:grid-rows-1 lg:py-6">
      <div class="aspect-square w-14 rounded-full skeleton lg:w-28"/>
      <div class="h-6 w-2/3 skeleton lg:w-32"/>
      <div class="h-6 w-2/3 skeleton lg:w-32"/>
      <div class="h-6 w-2/3 skeleton lg:w-32"/>
      <div class="h-6 w-2/3 skeleton lg:w-32"/>
      <div class="h-6 w-2/3 skeleton lg:w-32"/>
      <div class="h-6 w-full skeleton lg:w-32"/>
    </div>
  </div>
  <error-alert :message="error" v-else/>
</template>
