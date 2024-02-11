<script setup>
import SimilarListing from "./similarListing.vue";
import useStatement from "../../composables/useStatement";
const {similarListingsForSpecificListing } = useStatement();

</script>

<template>
  <div class="flex flex-col gap-10 mt-8">
    <p class="font-bold text-3xl">მსგავსი განცხადებები</p>
    <div class="grid gap-20 grid-cols-4">
      <SimilarListing v-if="similarListingsForSpecificListing" v-for="listing in similarListingsForSpecificListing" :data="listing"/>
    </div>
  </div>
</template>
