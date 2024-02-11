<script setup>
import useCourses from "/src/composables/useListings.js"
import Course from "/src/components/listings/Listing.vue"
import {useRoute} from "vue-router";
import {onMounted} from "vue";

const route = useRoute();

const {getListings, data, isLoading} = useCourses();

onMounted(async () => {
  await getListings(route.params.user_id);
});
</script>

<template>
  <div v-if="!isLoading" class="flex flex-col gap-y-20">
    <h1 class="text-5xl font-bold" v-text="`${data[0].teacher.name} განცხადებები`"/>
    <div class="grid grid-cols-3 gap-x-10 gap-y-8">
      <template v-for="(course, index) in data" :key="index">
        <course :data="course"/>
      </template>
    </div>
  </div>
  <p v-else>იტვირთება...</p>
</template>