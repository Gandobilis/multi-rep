<script setup>
import useUser from "../../composables/useUser.js";
import {onMounted} from "vue";

const {getUserProfileInfo, myUserData} = useUser();

onMounted(async () => {
  await getUserProfileInfo()
})
</script>

<template>
  <div v-if="myUserData" class="flex flex-col justify-center h-full items-center gap-y-4 lg:gap-y-10 max-lg:py-4">
    <img class="max-lg:w-20 max-lg:h-20 w-36 rounded-full object-cover h-36" :src="myUserData.profile_pic"
         alt="user image">

    <div class="flex gap-2">
      <p class="lg:text-2xl font-semibold" v-text="myUserData.first_name"/>
      <p class="lg:text-2xl font-semibold" v-text="myUserData.last_name"/>
    </div>


    <div class="max-lg:px-5 lg:w-1/2 flex items-center gap-x-5">
      <p class="text-center" v-text="myUserData.bio"/>

      <img class="max-lg:w-4 cursor-pointer" src="/src/assets/icons/user/edit.svg" alt="edit icon">
    </div>

    <div class="flex items-center gap-x-3">
      <a class="cursor-pointer underline" :href="myUserData.cv" target="_blank">CV</a>

      <img class="cursor-pointer" src="/src/assets/icons/user/delete.svg" alt="delete icon"/>
    </div>

    <div class="flex items-center gap-x-2">
      <img src="/src/assets/icons/user/rating.svg" alt="rating icon">

      <p><span v-text="myUserData._score"/>/5</p>
    </div>
  </div>
</template>

