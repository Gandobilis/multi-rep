<script setup>
import HeartIcon from "../../assets/icons/header/HeartIcon.vue";

const props = defineProps({
  data:Object
})

const user_id = 0
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const currentDate = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (date.toDateString() === currentDate.toDateString()) {
    return "დღეს";
  }
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return "გუშინ";
  }
  return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day} ${hours}:${minutes}`;
};

</script>

<template>

  <router-link :to="`/listings/${data.id}`"  class="block rounded-lg h-96 w-80 cursor-pointer group transition-all  ">

    <div class="h-1/2 overflow-hidden">
      <img :src="props.data._photo" alt="course icon" class="w-full h-full object-cover group-hover:rounded-none transition-all rounded-2xl"/>
    </div>
      <div class="h-1/2">
        <div class="mt-4 mb-2 flex justify-between items-start px-2">
          <p class="font-bold">{{props.data.title?.length > 40
              ? props.data.title.slice(0, 40) + "..."
              : props.data.title }}</p>
          <p class="text-meta">{{formatDate(props.data.date_created)}}</p>
        </div>
        <div class="flex justify-between items-center px-2 my-4">
          <p class="font-bold text-price text-xl" v-text="props.data.price"/>
          <p class="font-bold">{{props.data._subject}}</p>

          <div class="flex items-center gap-x-1.5 px-2">
            <img class="w-6 h-6" src="/src/assets/icons/leaderboard/star-icon.svg" alt="time icon">
            <p>{{props.data.average_listing_score}}/ 5</p>
          </div>
        </div>
        <div class="px-2 mb-2 flex justify-between">
          <p class="text-meta">{{props.data._city}}</p>
          <heart-icon class="w-5 " stroke="black"/>
        </div>
        <div class="border-t border-t-meta gap-x-2 flex items-center justify-start px-2 py-2.5">
          <p class="font-medium" v-text="props.data.author"/>
          <p class="text-xs" v-text="props.data.phoneNumber"/>
        </div>
      </div>
  </router-link>
</template>