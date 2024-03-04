<script setup>
import Titles from "/src/components/leaderboard/Titles.vue"
import Ratings from "/src/components/leaderboard/Ratings.vue"
</script>

<template>
  <div class="flex flex-col gap-y-7 lg:gap-y-12">
    <h1 class="max-lg:text-center text-2xl font-medium lg:text-4xl" v-text="'ტოპ განცხადებები'"/>

    <titles/>

    <ratings/>
  </div>
</template>