<script setup>
import Courses from "/src/components/courses/Courses.vue";
import Filter from "/src/components/courses/Filter.vue";
</script>

<template>
  <div class="flex flex-col gap-y-20">
    <div class="flex justify-between items-center my-10">
      <h1 class="text-5xl font-bold">განცხადებები</h1>
      <Filter/>
    </div>
    <courses/>
  </div>
</template>