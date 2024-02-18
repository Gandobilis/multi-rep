<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

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
  <router-link :to="`/listings/${data.id}`" class="block rounded-lg h-96 w-80 cursor-pointer group transition-all">
    <img :src="data._photo" alt="course icon"
         class="w-full group-hover:rounded-none transition-all rounded-2xl h-1/2"/>

    <div class="h-1/2">
      <div class="mt-4 mb-2 flex justify-between items-start px-2">
        <p class="font-bold" v-text="data.title?.length > 40 ? data.title.slice(0, 40) + '...' : data.title"/>

        <p class="text-meta text-end">{{ formatDate(data.date_created) }}</p>
      </div>

      <div class="flex justify-between items-center px-2 my-4">
        <p class="font-bold text-price text-xl" v-text="`${data.price} $`"/>

        <p class="font-bold">{{ data._subject }}</p>

        <div class="flex items-center gap-x-1.5 px-2">
          <template v-if="data.average_listing_score">
            <img class="w-6 h-6" src="/src/assets/icons/leaderboard/star-icon.svg" alt="time icon">

            <p v-text="data.average_listing_score + '/5.0'"/>
          </template>

          <template v-else>
            <p class="text-end">შეფასებები<br/> არ არის</p>
          </template>
        </div>
      </div>

      <div class="px-2 mb-2">
        <p class="text-meta">დისტანციურად</p>
      </div>

      <div class="border-t border-t-meta gap-x-2 flex items-center justify-start px-2 py-2.5">
        <p class="font-medium" v-text="data.author"/>

        <p class="text-xs" v-text="data.phoneNumber"/>
      </div>
    </div>
  </router-link>
</template>