<script setup>
import useListings from "/src/composables/useListings.js";
import forSpecificData from "/src/composables/forSpecificData.js";

import Course from "/src/components/listings/Listing.vue";
import { onMounted, ref } from "vue";
import FilterForAllListings from "./filter/dualRange.vue";
import Dropdown from "./filter/dropdownForCities.vue";
import NormalDropdown from "./filter/normalDropdown.vue";
import { VueAwesomePaginate } from "vue-awesome-paginate";
import { useRouter } from "vue-router";

const { courses, filterListings } = useListings();
const { citiesData, getCitiesAndDistricts, getSubjects, subjects } =
    forSpecificData();
const currentPage = ref(1);
const router = useRouter();

const onClickHandler = (page) => {
  router.push({ query: { page } });
};

onMounted(async () => {
  await filterListings();
  await getCitiesAndDistricts();
  await getSubjects();
});
</script>

<template>

  <div v-if="citiesData && subjects && courses" class="flex flex-col  justify-center ">
    <div class="flex gap-10">
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
      <div v-if="courses.data.length!==0" class="grid grid-cols-3 gap-x-10 gap-y-8">
        <div v-for="(course, index) in courses.data" :key="index">
          <course :data="course"/>
        </div>
      </div>
      <p v-else>განცხადებები ვერ მოიძებნა</p>
    </div>
  </div>

  <vue-awesome-paginate
      v-if="courses"
      :total-items="courses.count"
      :max-pages-shown="courses.page_count"
      :items-per-page="12"
      v-model="currentPage"
      :on-click="onClickHandler"
  />

</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #950E1D;
  border: 1px solid #950E1D;
  color: white;
}
.active-page:hover {
  background-color: #950E1D;
}
</style>