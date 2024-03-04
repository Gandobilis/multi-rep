<script setup>
import Titles from "/src/components/leaderboard/Titles.vue"
import Ratings from "/src/components/leaderboard/Ratings.vue"
</script>

<template>
  <h1 class="max-lg:text-center text-2xl lg:text-5xl lg:font-medium" v-text="'ტოპ განცხადებები'"/>

  <titles class="max-lg:hidden"/>

  <ratings class="px-5"/>
</template>