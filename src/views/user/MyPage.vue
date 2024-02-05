<script setup>
import useUser from "../../composables/useUser.js";

const {myPage} = useUser();
</script>

<template>
  <div class="flex flex-col justify-center h-full items-center gap-y-10">
    <img :src="myPage.image" alt="user image">

    <p class="text-2xl font-semibold" v-text="myPage.username"/>

    <p class="w-1/2 text-center" v-text="myPage.bio"/>

    <div class="flex items-center gap-x-3">
      <img class="cursor-pointer" :src="myPage.cv" alt="user cv">

      <img class="cursor-pointer" src="/src/assets/icons/user/delete.svg" alt="delete icon"/>
    </div>

    <div class="flex items-center gap-x-2">
      <img src="/src/assets/icons/user/rating.svg" alt="rating icon">

      <p><span v-text="myPage.rating"/>/5.0</p>
    </div>
  </div>
</template>