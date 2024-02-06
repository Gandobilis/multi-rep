<script setup>
import useUser from "../../composables/useUser.js";

const {filterType, filterItems, filters, filteredItems} = useUser();
</script>

<template>
  <p class="border-b px-5 py-6 text-2xl font-semibold border-b-border-gray" v-text="'ჩემი განცხადებები'"/>

  <div class="flex flex-col gap-y-11 px-5 py-10">
    <div class="flex w-full justify-between">
      <p :class="{'text-primary': filterType === filter}"
         class="font-medium cursor-pointer"
         @click="filterItems(filter)"
         v-for="(filter, index) in filters" :key="index" v-text="filter"/>
    </div>

    <div class="flex items-center gap-x-5" v-for="(listing, index) in filteredItems" :key="index">
      <img :src="listing.image" alt="listing image">

      <div class="flex w-full flex-col gap-y-3">
        <p class="text-2xl font-medium" v-text="listing.title"/>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <img src="/src/assets/icons/user/rating.svg" alt="rating icon">

            <p><span v-text="listing.rating"/>/5.0</p>
          </div>

          <p class="font-semibold text-price" v-text="`${listing.price} ₾`"/>

          <p class="text-meta" v-text="listing.time_unit"/>

          <p class="text-meta" v-text="listing.publish_date"/>

          <div v-if="!listing.active" class="flex items-center gap-x-2">
            <p class="font-medium text-[#FF001C]" v-text="'ვადაგასული'"/>

            <RouterLink to="/user/my-listings" class="font-medium text-[#177B15]"
                        v-text="'გახანგრძლივება'"/>
          </div>

          <div v-else class="flex items-center gap-x-2">
            <p v-text="listing.author"/>

            <p class="text-xs" v-text="listing.phone"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>