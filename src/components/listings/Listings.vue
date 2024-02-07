<script setup>
import useListings from "/src/composables/useListings.js";
import Course from "/src/components/listings/Listing.vue";

const {courses} = useListings()
</script>

<template>
  <div class="grid grid-cols-3 gap-x-10 gap-y-8">
    <template v-for="(course, index) in courses" :key="index">
      <course :data="course"/>
    </template>
  </div>
</template>