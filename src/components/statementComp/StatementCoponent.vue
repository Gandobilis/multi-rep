<script setup>

import useStatement from "../../composables/useStatement";
import {onMounted, ref, watch} from "vue";
import rating from "./rating.vue";

const route = useRoute();
import Report from "../modals/Report.vue";
import {Rating} from "tw-elements";
import {useRoute} from "vue-router";
import Calendar from "../../assets/icons/forSpecificListing/calendar.vue";
import Eye from "../../assets/icons/forSpecificListing/eye.vue";
import Phone from "../../assets/icons/forSpecificListing/phone.vue";
import Email from "../../assets/icons/forSpecificListing/email.vue";
import SimilarListings from "./similarListings.vue";
import {FALSE} from "sass";

const {dataForSpecificPage, getDataForSpecificListing, userForSpecificListing} = useStatement();

onMounted(() => {
  getDataForSpecificListing(route.params.id);
});

watch(route, () => {
  getDataForSpecificListing(route.params.id);
})

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const currentDate = new Date();

  if (date.toDateString() === currentDate.toDateString()) {
    return "დღეს";
  }

  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return "გუშინ";
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day} ${hours}:${minutes}`;
};

const showModal = ref(false);
</script>

<template>
  <div v-if="dataForSpecificPage" class="relative flex max-lg:flex-col gap-16  justify-center">
    <img class="lg:w-1/2 rounded-md object-cover lg:h-[700px] h-[200px] lg:rounded-3xl " :src="dataForSpecificPage?._photo" alt="">
    <div class="flex flex-col lg:w-1/2 gap-4 lg:gap-10">
      <p class="text-xl lg:text-4xl  font-bold">{{ dataForSpecificPage?.title }}</p>
      <p class="lg:text-2xl font-medium">{{ dataForSpecificPage?.description }}</p>
      <p class="">დისტანციურად</p>
      <div class="flex lg:text-2xl gap-5">
        <div class="flex items-center gap-3">
          <calendar class="max-lg:w-5"/>
          <p>{{ formatDate(dataForSpecificPage?.date_created) }}</p>
        </div>
        <div class="flex items-center gap-1.5 lg:gap-3">
          <eye class="w-5 lg:w-9"/>
          <p>{{ dataForSpecificPage?.views }}</p>
        </div>
        <div class="flex items-center gap-1">
          <p class="text-[#177B15]  font-bold">{{ dataForSpecificPage?.price }} {{dataForSpecificPage?.currency}}</p>
          /
          <p>{{dataForSpecificPage?.time_unit}}</p>
        </div>
      </div>
      <div class="flex gap-5 lg:flex-row flex-col items-center ">
        <div class="flex  items-center lg:w-1/2 gap-3">
          <img class="w-20  h-20 rounded-full" :src="userForSpecificListing?.profile_pic" alt="">
          <div class="flex gap-2 flex-col">
            <div class="flex gap-2 items-center lg:text-2xl font-medium">
              <p>{{ userForSpecificListing?.first_name }}</p>
              <p>{{ userForSpecificListing?.last_name }}</p>
            </div>
            <p class="lg:text-xl">პროფესია</p>
            <router-link :to="`/user/listings/${dataForSpecificPage.teacher}`"
                         class="lg:text-lg cursor-pointer text-[#1F6C97]">ყველა განცხადება
            </router-link>
          </div>
        </div>

        <div class="flex flex-col lg:w-1/2 lg:text-lg  gap-5">
          <div class="flex gap-2 items-center justify-center py-1 px-6 rounded-md lg:rounded-xl bg-primary">
            <phone class="max-lg:w-5"/>
            <p class="text-white">{{ userForSpecificListing?.phone }}</p>
          </div>

          <div class="flex gap-2 items-center py-1 justify-center px-6 rounded-md lg:rounded-xl bg-primary">
            <email class="max-lg:w-5"/>
            <p class="text-white">{{ userForSpecificListing?.email }}</p>
          </div>
        </div>
      </div>
      <div class="flex max-lg:flex-col items-center justify-between">
        <rating/>
        <p class="cursor-pointer hover:text-primary" @click="showModal = true">დაარეპორტეთ</p>
      </div>
    </div>
    <Report v-if="showModal" @close-modal="showModal = false"/>
  </div>
  <similar-listings/>
</template>
