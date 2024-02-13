<script setup>
import useListings from "/src/composables/useListings.js";
import forSpecificData from "/src/composables/forSpecificData.js";

import Course from "/src/components/listings/Listing.vue";
import {onMounted} from "vue";
import FilterForAllListings from "./filter/dualRange.vue";
import Dropdown from "./filter/dropdownForCities.vue";
import NormalDropdown from "./filter/normalDropdown.vue";
const {courses, filterListings} = useListings()
const {citiesData, getCitiesAndDistricts, getSubjects, subjects} = forSpecificData()

onMounted(async () => {
  await filterListings();
  await getCitiesAndDistricts();
  await getSubjects()

});
</script>

<template>


  <div v-if="citiesData && subjects" class="flex gap-10">
    <div class="mt-10 flex flex-col gap-10">
      <div class="flex flex-col gap-16">
        <p class="font-bold text-xl">ფასი</p>
        <filter-for-all-listings/>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-bold text-xl">საგანი</p>
        <normal-dropdown  :options="subjects.subjects" default-name="ყველა"/>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-bold text-xl">ქალაქი</p>
        <dropdown :options="citiesData.cities" value="default" default-name="ყველა"/>
      </div>

    </div>

    <div class="grid grid-cols-3 gap-x-10 gap-y-8">
      <div v-for="(course, index) in courses" :key="index">
        <course :data="course"/>
      </div>
    </div>
  </div>
</template>