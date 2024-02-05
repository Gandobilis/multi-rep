<script setup>
import useCourses from "/src/composables/useCourses.js";
import Course from "/src/components/courses/Course.vue";

const {courses} = useCourses()
</script>

<template>
  <div class="grid grid-cols-3 gap-x-10 gap-y-8">
    <template v-for="(course, index) in courses" :key="index">
      <course :data="course"/>
    </template>
  </div>
</template>