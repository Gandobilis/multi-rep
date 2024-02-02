<script setup>
import star from "@/assets/icons/leaderboard/star-icon.svg";

defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-7 items-center font-medium text-xl border border-gray-400 px-4 py-6 rounded-lg">
    <img :src="user.icon" alt="user icon">
    <p v-text="user.firstName"/>
    <p v-text="user.lastName"/>
    <p v-text="user.profession"/>
    <p v-text="user.phoneNumber"/>
    <div class="flex items-center gap-x-1">
      <img :src="star" alt="rating star icon">
      <p>{{ user.rating }}/5.0</p>
    </div>
    <router-link to="/leaderboard" class="text-primary">დეტალურად</router-link>
  </div>
</template>