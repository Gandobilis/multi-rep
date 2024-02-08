<script setup>
import star from "/src/assets/icons/leaderboard/star-icon.svg"

defineProps({
  rating: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-7 items-center font-medium text-xl border border-gray-400 px-4 py-6 rounded-lg">
    <img :src="rating.image" alt="rating image">
    <p v-text="rating.firstName"/>
    <p v-text="rating.lastName"/>
    <p v-text="rating.profession"/>
    <p v-text="rating.phoneNumber"/>
    <div class="flex items-center gap-x-1">
      <img :src="star" alt="rating star icon">
      <p>{{ rating.rating }}/5.0</p>
    </div>
    <router-link :to="`/user/listings/${rating.user_id}`" class="text-primary">დეტალურად</router-link>
  </div>
</template>