<script setup>
import useUser from "../../composables/useUser.js";

const {savedListings} = useUser();
</script>

<template>
  <p class="border-b px-5 py-3 lg:py-6 lg:text-2xl font-semibold border-b-border-gray" v-text="'შენახული განცხადებები'"/>

  <div class="flex flex-col gap-y-7 lg:gap-y-11 px-5 py-5 lg:py-10">
    <div class="flex items-center gap-x-5" v-for="(listing, index) in savedListings" :key="index">
      <img :src="listing.image" alt="listing image">

      <div class="flex w-full flex-col gap-y-3">
        <p class="lg:text-2xl font-medium" v-text="listing.title"/>

        <div class="flex max-lg:flex-wrap items-center justify-between">
          <div class="flex items-center gap-x-2">
            <img class="max-lg:w-5" src="/src/assets/icons/user/rating.svg" alt="rating icon">

            <p class="max-lg:text-sm"><span v-text="listing.rating"/>/5.0</p>
          </div>

          <p class="max-lg:text-sm font-semibold text-price" v-text="`${listing.price} ₾`"/>

          <p class="max-lg:text-xs text-meta" v-text="listing.time_unit"/>

          <p class="max-lg:text-xs text-meta" v-text="listing.publish_date"/>

          <div class="max-lg:hidden flex items-center gap-x-2">
            <p v-text="listing.author"/>

            <p class="text-xs" v-text="listing.phone"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>