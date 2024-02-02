<script setup>
import {ref} from "vue";
import Rating from "@/components/layouts/main/leaderboard/Rating.vue";
import icon from "@/assets/icons/leaderboard/user-icon.svg";

const users = ref(Array(5).fill({
  icon,
  firstName: 'გიორგი',
  lastName: 'გიორგაძე',
  profession: 'ჯავა დეველოპერი',
  phoneNumber: '551-11-12-22',
  rating: '4.9',
}));
</script>

<template>
  <div class="mt-14 flex flex-col gap-y-4">
    <template v-for="(user, index) in users" :key="index">
      <Rating :user="user"/>
    </template>
  </div>
</template>
