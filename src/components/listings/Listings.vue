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
  <div class="flex gap-10">
    <div class="mt-10 flex flex-col gap-10">
      <div class="flex flex-col gap-16">
        <p class="font-bold text-xl">ფასი</p>

        <filter-for-all-listings/>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-bold text-xl">საგანი</p>

        <Dropdown :options="filterSubjects" v-model="filterSubject" default-name="ყველა"/>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-bold text-xl">ქალაქი</p>

        <Dropdown :options="filterCities" v-model="filterCity" default-name="ყველა"/>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-bold text-xl">უბანი</p>

        <Dropdown value="default" default-name="ყველა"/>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-x-10 gap-y-8">
      <div v-for="(listing, index) in listings" :key="index">
        <Listing :data="listing"/>
      </div>
    </div>
  </div>
</template>