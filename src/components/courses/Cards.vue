<script setup>
const props = defineProps({
  courses: {
    type: Array,
    required: true
  }
})

const favouriteIcone = (index) => {
  props.courses[index].isFavourite = !props.courses[index].isFavourite
}
</script>
<template>
  <div class="grid grid-cols-3 gap-x-6 gap-y-5 relative">
    <div class="flex flex-col justify-around rounded-xl border border-black "
         v-for="(course, index) in courses"
         :key="index">
      <div class=" relative">
        <img class="w-full h-full" :src="course.image" alt="ჯავას კურსი">
        <div @click="favouriteIcone(index)">
          <img class="absolute inset-y-0 right-0 pr-5 pt-5 hover:cursor-pointer"
               :src="!course.isFavourite ? 'src/icone/loveWhite.svg' : 'src/icone/lovered.svg'" alt="ფავორიტი">
        </div>
      </div>
      <div class="space-y-4 ">
        <div class="flex flex-row space-x-36 mx-2.5 mt-5">
          <h1 class="font-semibold " v-text="course.title"/>
          <h1 class="text-meta">დღეს 19:57</h1>
        </div>
        <div class="flex flex-row space-x-9 mx-2.5 text-meta">
          <h1 class="font-bold text-price" v-text="course.price + ' ₾'"/>
          <h1>თვიურად</h1>
          <div class="flex flex-row space-x-2 text-meta">
            <div><img src="../../icone/clock.svg" alt=""></div>
            <h1>6 თვე</h1>
          </div>
          <div class="flex flex-row space-x-2.5  ">
            <div><img src="../../icone/biol.svg" alt=""></div>
            <p>{{ course.rating }}/5.0</p>
          </div>
        </div>
        <h1 class="mx-2.5 text-meta">დისტანციურად</h1>
        <div class="flex flex-row justify-between  border-t ">
          <h1 class="mx-2.5 my-3 text-primary">დეტალურად</h1>
          <img class="mx-2.5 my-3" src="../../icone/VectorKitxvis.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>