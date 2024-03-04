<script setup>
import useListings from "/src/composables/useListings.js";
import Listing from "/src/components/listings/Listing.vue";
import {onMounted} from "vue";
import FilterForAllListings from "./filter/dualRange.vue";
import FilterDropdown from "./filter/FilterDropdown.vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";

const {
  listings,
  filterCities,
  filterSubjects,
  fetchCities,
  fetchSubjects,
  filterCity,
  filterSubject,
  filterDistrict,
  clearFilters,
  currentPage,
} = useListings();

onMounted(async () => {
  await fetchCities();
  await fetchSubjects();
});
</script>

<template>
  <vue-awesome-paginate
      v-if="listings?.count !== 0"
      :total-items="listings?.count"
      :items-per-page="12"
      :max-pages-shown="listings?.page_count"
      v-model="currentPage"
  />
  <div class="flex max-lg:flex-col gap-10 ">
    <div class="mt-10 flex flex-col  lg:h-full gap-5  lg:gap-y-10 lg:w-[10%]">
      <div class="flex flex-col gap-16">
        <p class="font-bold text-sm lg:text-xl">ფასი</p>
        <filter-for-all-listings/>
      </div>
      <div class="flex flex-col gap-1.5 lg:gap-2">
        <p class="font-bold text-sm lg:text-xl">საგანი</p>

        <filter-dropdown
            :options="[...new Set(filterSubjects.map(subject => subject.name))]"
            v-model="filterSubject"
        />
      </div>

      <div class="flex flex-col gap-1.5 lg:gap-2">
        <p class="font-bold text-sm lg:text-xl">ქალაქი</p>
        <filter-dropdown :options="[...new Set(filterCities.map(city => city.city_name))]"
                         v-model="filterCity"/>
      </div>

      <div class="flex flex-col gap-1.5 lg:gap-2">
        <p class="font-bold text-sm lg:text-xl">უბანი</p>

        <filter-dropdown :options="[...new Set(filterCities.find(city => city.city_name === filterCity)?.districts)]"
                         v-model="filterDistrict"

        />

      </div>

      <button @click="clearFilters"
              class="max-lg:text-xs w-full rounded-[5px] py-3 lg:rounded-md border text-center font-medium transition border-primary text-primary lg:py-3.5 hover:bg-primary hover:text-white hover:shadow-xl">
        გასუფთავება
      </button>

    </div>
    <div v-if="listings" class="flex flex-col items-center gap-y-10">
      <div class="grid grid-cols-1 lg:grid-rows-4 lg:grid-cols-3 gap-4">
        <Listing :data="listing" v-for="(listing, index) in listings?.data" :key="index"/>
      </div>
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-rows-4 lg:grid-cols-3 gap-4 w-full">
      <div v-for="index in 12" class="flex flex-col h-96" :key="index">
        <div class="skeleton w-full h-1/2 rounded-b-none rounded-t-lg"></div>
        <div class="flex flex-col justify-between h-1/2 p-4">
          <div class="flex items-center justify-between">
            <div class="skeleton h-8 w-2/5 rounded-lg"></div>
            <div class="skeleton h-8 w-2/5 rounded-lg"></div>
          </div>
          <div class="flex items-center justify-between">
            <div class="skeleton h-8 w-1/5 rounded-lg"></div>
            <div class="skeleton h-8 w-2/5 rounded-lg"></div>
            <div class="skeleton h-8 w-1/5 rounded-lg"></div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-4 w-2/5">
              <div class="skeleton rounded-full h-14 aspect-square"></div>
              <div class="skeleton h-8 w-2/3 rounded-lg"></div>
            </div>
            <div class="skeleton h-8 w-2/5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #950E1D;
  color: white;
}

.active-page:hover {
  background-color: #950E1D;
}
</style>