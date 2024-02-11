<script setup>

import useStatement from "../../composables/useStatement";
import { onMounted } from "vue";
import rating from "./rating.vue";
const route = useRoute();
import { Rating } from "tw-elements";
import { useRoute } from "vue-router";
import Calendar from "../../assets/icons/forSpecificListing/calendar.vue";
import Eye from "../../assets/icons/forSpecificListing/eye.vue";
import Phone from "../../assets/icons/forSpecificListing/phone.vue";
import Email from "../../assets/icons/forSpecificListing/email.vue";
import SimilarListings from "./similarListings.vue";

const {dataForSpecificPage, getDataForSpecificListing, userForSpecificListing } = useStatement();

onMounted( () => {
   getDataForSpecificListing(route.params.id);

});

const user_id = 0;

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
</script>

<template>

  <div v-if="dataForSpecificPage" class="flex gap-16  justify-center  ">
    <img class=" w-1/2 rounded-3xl " :src="dataForSpecificPage?._photo" alt="">
    <div class="flex flex-col w-1/2 pb-32 gap-10">
      <p class="text-4xl  font-bold">{{dataForSpecificPage?.title}}</p>
      <p class="text-2xl font-medium">{{dataForSpecificPage?.description}}</p>
      <p class="">დისტანციურად</p>
      <div class="flex text-2xl gap-5">
        <div class="flex items-center gap-3">
          <calendar/>
          <p>{{formatDate(dataForSpecificPage?.date_created)}}</p>
        </div>
        <div class="flex items-center gap-3">
          <eye class="w-9"/>
          <p>{{dataForSpecificPage?.views}}</p>
        </div>
        <div class="flex items-center gap-1">
          <p class="text-[#177B15]  font-bold">{{dataForSpecificPage?.price}}$</p>
          /
          <p>თვე (დასამატებელი)</p>
        </div>
      </div>
      <div class="flex gap-5 items-center">
        <div class="flex items-center w-1/2 gap-3">
          <img class="w-24 h-24 rounded-full" :src="userForSpecificListing?.profile_pic" alt="">
          <div class="flex gap-2 flex-col">
              <div class="flex gap-2 items-center text-2xl font-medium">
                <p>{{userForSpecificListing?.first_name}}</p>
                <p>{{userForSpecificListing?.last_name}}</p>
              </div>
              <p class="text-xl">პროფესია</p>
              <p class="text-lg cursor-pointer text-[#1F6C97]">ყველა განცხადება</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 text-lg  gap-5">
          <div class="flex gap-2 items-center justify-center py-1 px-6 rounded-xl bg-primary">
            <phone/>
            <p class="text-white">{{userForSpecificListing?.phone}}</p>
          </div>

          <div class="flex gap-2 items-center py-1 justify-center px-6  rounded-xl bg-primary">
            <email/>
            <p class="text-white">{{userForSpecificListing?.email}}</p>
          </div>
        </div>
      </div>
      <rating/>
    </div>
  </div>

  <similar-listings/>


</template>
