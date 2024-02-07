<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="rounded-lg border border-gray-400">
    <img :src="data.icon" alt="course icon" class="w-full"/>
    <div class="mt-4 mb-2 flex justify-between items-start px-2">
      <p v-text="data.title" class="font-bold"/>
      <p v-text="data.publishDate" class="text-meta"/>
    </div>
    <div class="flex justify-between items-center px-2 my-4">
      <p class="font-bold text-price text-xl" v-text="data.price"/>
      <p class="text-meta" v-text="data.payType"/>
      <div class="flex items-center gap-x-1.5">
        <img src="/src/assets/icons/courses/time.svg" alt="time icon">
        <p class="text-meta" v-text="data.duration"/>
      </div>
      <div class="flex items-center gap-x-1.5 px-2">
        <img class="w-6 h-6" src="/src/assets/icons/leaderboard/star-icon.svg" alt="time icon">
        <p v-text="data.rating + '/5.0'"/>
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
</template>