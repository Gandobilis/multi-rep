<script setup>
import HeartIcon from "../../assets/icons/header/HeartIcon.vue";
import forFavorites from "/src/composables/forFavorites.js";
import {onMounted} from "vue";
import useUser from "../../composables/useUser.js";

defineProps({
  data: {
    type: Object,
    required: true,
  },
  isMain: {
    type: Boolean,
    default: false,
  },
});
const {addToFavorites, getFavoriteListings, removeFromFavorites, favoriteListings} = forFavorites()
const {isAuthenticated,checkIfAuthenticated} = useUser()
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

onMounted(() => {
  getFavoriteListings()
  checkIfAuthenticated()

})

const handleHeartIconClick = async (id) => {

  event.preventDefault()
  try {
    if (isFavorite(id)) {
      await removeFromFavorites(id);

    } else {
      await addToFavorites(id);
    }

    // Update the favoriteListings after adding/removing from favorites
    await getFavoriteListings();

  } catch (error) {
    console.error(error);
  }

};

const isFavorite = (id) => {
  return favoriteListings.value.some((favorite) => favorite.id === id);
};
</script>

<template>
  <a :href="`/listings/${data.id}`" :class=" {'w-96':isMain}"
     class="overflow-hidden max-lg:text-sm block h-96  border rounded-lg cursor-pointer transition-all">
    <img v-if="data._photo" :src="data._photo"
         class="hover:scale-105 w-full group-hover:rounded-none object-cover h-1/2 transition-all" alt="course  icon"/>
    <img src="/src/assets/images/default-course.png"
         class="hover:scale-105 w-full group-hover:rounded-none object-cover h-1/2 transition-all" v-else
         alt="default course image"/>

    <div class="flex flex-col justify-between h-1/2  px-4">
      <div class="mt-4 mb-2 flex  justify-between items-start px-2">
        <p class="font-bold text-sm " v-text="data.title?.length > 40 ? data.title.slice(0, 40) + '...' : data.title"/>

        <p class="text-meta text-end">{{ formatDate(data.date_created) }}</p>
      </div>

      <div class="flex justify-between items-center px-2 my-2 lg:my-4">
        <p class="font-bold text-price " v-text="`${data.price} ${data.currency} / ${data.time_unit}`"/>


        <div class="flex items-center gap-x-1.5 px-2">
          <img class="w-6 h-6" src="/src/assets/icons/leaderboard/star-icon.svg" alt="time icon">
          <p v-text="data.average_listing_score ?? '0' + '/5.0'"/>
        </div>
      </div>

      <div  class="px-2 mb-2 flex justify-between">
        <div class="flex w-full justify-between">
          <p class="text-meta">{{ data._city }}</p>
          <p class="text-black font-semibold">{{ data._subject }}</p>


        </div>
        <heart-icon
            v-if="isAuthenticated"
            @click="handleHeartIconClick(data.id)"
            class="w-5 hover:opacity-70 h-5"
            :stroke="isFavorite(data.id) ? 'red' : 'black'"
        />
      </div>


      <div class="  gap-x-2 flex items-center justify-between px-2 py-2.5">
        <div class="flex items-center gap-x-3.5">
          <img v-if="data?.teacher.profile_pic" class="w-10 aspect-square rounded-full" alt="user image"
               :src="data?.teacher.profile_pic">
          <img v-else class="w-10 aspect-square rounded-full" src="/src/assets/images/Profile.png"
               alt="default profile pic"/>
          <p class="font-medium" v-text="data?._teacher"/>
        </div>


        <p class="text-primary" v-text="data?._phone"/>
      </div>
    </div>
  </a>
</template>