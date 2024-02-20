<script setup>
import useListings from "/src/composables/useListings.js";
import Listing from "/src/components/listings/Listing.vue";
import {onMounted, watch} from "vue";
import FilterForAllListings from "./filter/dualRange.vue";
import Dropdown from "./filter/dropdown.vue";

const {
  listings,
  filterListings,
  filterCities,
  filterSubjects,
  fetchCities,
  fetchSubjects,
  filterCity,
  filterSubject
} = useListings();

onMounted(async () => {
  await filterListings();
  await fetchCities();
  await fetchSubjects();
});
</script>

<template>
  <div class="flex max-lg:flex-col gap-10 ">
    <div class="mt-10 grid grid-rows-4 h-fit gap-y-4 lg:gap-y-10">
      <div class="flex flex-col gap-16">
        <p class="font-bold text-sm lg:text-xl">ფასი</p>

        <filter-for-all-listings/>
      </div>

      <div class="flex flex-col gap-1.5 lg:gap-2">
        <p class="font-bold text-sm lg:text-xl">საგანი</p>

        <Dropdown :options="filterSubjects" v-model="filterSubject" default-name="ყველა"/>
      </div>

      <div class="flex flex-col gap-1.5 lg:gap-2">
        <p class="font-bold text-sm lg:text-xl">ქალაქი</p>

        <Dropdown :options="filterCities" v-model="filterCity" default-name="ყველა"/>
      </div>

      <div class="flex flex-col gap-1.5 lg:gap-2">
        <p class="font-bold text-sm lg:text-xl">უბანი</p>

        <Dropdown value="default" default-name="ყველა"/>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-5 lg:gap-x-36 gap-y-4 lg:gap-y-8">
      <div v-for="(listing, index) in listings" :key="index">
        <Listing :data="listing"/>
      </div>
    </div>
  </div>
</template>