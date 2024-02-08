<script setup>
import useListings from "/src/composables/useListings.js"
import Course from "/src/components/listings/Listing.vue"
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()

const {getListings} = useListings()
const data = ref([])

onMounted(() => {
  data.value = getListings(route.params.user_id)
})
</script>

<template>
  <div class="flex flex-col gap-y-20">
    <h1 class="text-5xl font-bold" v-text="`${data.username} განცხადებები`"/>
    <div class="grid grid-cols-3 gap-x-10 gap-y-8">
      <template v-for="(course, index) in data.listings" :key="index">
        <course :data="course"/>
      </template>
    </div>
  </div>
</template>