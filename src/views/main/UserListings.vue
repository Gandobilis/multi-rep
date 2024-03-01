<script setup>
import useCourses from "/src/composables/useListings.js"
import Listing from "/src/components/listings/Listing.vue"
import {useRoute} from "vue-router";
import {onMounted} from "vue";

const route = useRoute();

const {getListings, data, isLoading} = useCourses();

onMounted(async () => {
  await getListings(route.params.user_id);
});
</script>

<template>
  <div v-if="!isLoading" class="flex flex-col gap-y-6 lg:gap-y-20 max-lg:px-5">
    <h1 class="max-lg:text-center lg:text-5xl font-bold" v-text="`${data[0].teacher.name}-ის განცხადებები`"/>
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
      <Listing v-for="(course, index) in data" :key="index" :data="course"/>
    </div>
  </div>
  <p v-else>განცხადებები იძებნება ...</p>
</template>