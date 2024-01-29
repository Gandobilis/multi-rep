<script setup>
import Cards from './Cards.vue';
import Filter from './filter.vue';
import useCourses from "../../composables/useCourses.js";
import {onMounted} from "vue";

const {courses, chosenAttributeIndex} = useCourses()

const changeChosenAttributeIndex = (index) => {
  chosenAttributeIndex.value = index
  sortCourses()
}

const sortCourses = () => {
  let filterFunction;
  if (chosenAttributeIndex.value === 0) {
    filterFunction = (c1, c2) => c1.rating - c2.rating
  } else if (chosenAttributeIndex.value === 1) {
    filterFunction = (c1, c2) => c1.publishingDate - c2.publishingDate
  } else {
    filterFunction = (c1, c2) => c1.price - c2.price
  }
  courses.value.sort(filterFunction)
}

onMounted(() => {
  sortCourses()
})
</script>
<template>
  <div class="flex flex-col space-y-24 px-16">
    <div class="flex justify-between mt-14">
      <h1 class="text-5xl">განცხადებები</h1>
      <Filter :chosenAttributeIndex="chosenAttributeIndex" @changeChosenAttributeIndex="changeChosenAttributeIndex"/>
    </div>
    <Cards :courses="courses"/>
  </div>
</template>