<script setup>
import star from "/src/assets/icons/leaderboard/star-icon.svg";

defineProps({
  rating: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
      class="grid grid-rows-3 grid-cols-3 lg:grid-rows-1 lg:grid-cols-7 items-center font-medium text-sm lg:text-xl border border-gray-400 px-4 pt-3 lg:py-6 rounded-lg">
    <img class="w-28 h-28 rounded-full " :src="rating._photo" alt="rating image">

    <p class="ml-5" v-text="rating._teacher"/>

    <p v-text="rating._subject"/>

    <p v-text="rating._phone"/>

    <div class="flex items-center gap-x-1">
      <img class="w-6 lg:w-7" :src="star" alt="rating star icon">

      <p>{{ rating._score }}/5</p>
    </div>
    <div class="flex">
      <p v-text="rating.price"/>
      <p v-text="rating.currency"/>

    </div>


    <router-link :to="`/listings/${rating.id}`" class="text-primary">დეტალურად</router-link>
  </div>
</template>