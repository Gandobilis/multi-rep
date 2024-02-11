<script setup>
const props = defineProps({
    data:Object
})

setTimeout(()=>{
  console.log(props.data)
})

import Star from "../../assets/icons/SearchResults/star.vue";
</script>

<template>
  <div class="flex flex-col w-56 hover:shadow-xl cursor-pointer gap-3">
    <img class="rounded-2xl w-full h-44" :src="props.data._photo" alt="">

    <div class="flex flex-col  justify-center it gap-3">
      <p class="font-bold">{{props.data.title}}</p>
      <div class="flex gap-1 font-medium ">
        <span>{{props.data.average_listing_score}}</span>/ 5
        <star/>
      </div>
      <p class="text-sm text-ce">{{props.data.description?.length > 60
          ? props.data.description.slice(0, 60) + "..."
          : props.data.description}}</p>

      <div class="flex gap-3 border-2 py-1 px-3 justify-center rounded-3xl border-secondary-bg items-center text-sm font-medium">
        <img class="w-10 rounded-full h-10" :src="props.data.teacher.profile_pic" alt="">
        <p>{{props.data.teacher.name}}</p>
        <p class="bg-primary text-white py-1 px-3 rounded-2xl text-center">598757596</p>
      </div>
    </div>

  </div>
</template>
