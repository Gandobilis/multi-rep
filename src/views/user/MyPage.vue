<script setup>
import useUser from "../../composables/useUser.js";
import {ref} from "vue";

const {myPage, delete_cv, edit_bio} = useUser();
const editing = ref(false);
const bio = ref(myPage.value.bio);
</script>

<template>
  <div class="flex flex-col justify-center h-full items-center gap-y-4 lg:gap-y-10 max-lg:py-4">
    <img class="max-lg:w-20" :src="myPage.image" alt="user image">

    <p class="lg:text-2xl font-semibold" v-text="myPage.username"/>

    <div v-if="editing" class="w-1/2 space-y-1">
      <textarea v-model="bio" v-if="editing" class="w-full border border-md p-1 resize-none"/>
      <div class="flex items-center gap-x-3">
        <button @click="edit_bio(bio); editing = false" class="text-price">შენახვა</button>
        <button @click="editing = false" class="text-error">გაუქმება</button>
      </div>
    </div>

    <div v-else class="max-lg:px-5 lg:w-1/2 flex items-center gap-x-5">
      <p class="text-center" v-text="myPage.bio"/>

      <img @click="editing = true" class="max-lg:w-4 cursor-pointer" src="/src/assets/icons/user/edit.svg"
           alt="edit icon">
    </div>

    <div v-if="myPage.cv" class="flex items-center gap-x-3">
      <img class="cursor-pointer" :src="myPage.cv" alt="user cv">

      <img @click="delete_cv" class="cursor-pointer" src="/src/assets/icons/user/delete.svg" alt="delete icon"/>
    </div>

    <div class="flex items-center gap-x-2">
      <img src="/src/assets/icons/user/rating.svg" alt="rating icon">

      <p><span v-text="myPage.rating"/>/5.0</p>
    </div>
  </div>
</template>

