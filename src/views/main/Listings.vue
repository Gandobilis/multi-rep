<script setup>
import {ref} from "vue"
import Listings from "/src/components/listings/Listings.vue"
import Filter from "/src/components/listings/filter/Filter.vue"
import AddPost from "../../components/modals/AddPost.vue"

const showModal = ref(false)
const is_teacher = ref(false)
</script>

<template>
  <div class="relative flex flex-col gap-y-20">
    <div class="my-10 flex items-center justify-between">
      <h1 class="text-5xl font-bold"> განცხადებები</h1>

      <div class="flex items-center gap-x-10">
        <button @click="showModal = true" v-if="is_teacher" class="font-semibold text-primary">დაამატე განცხადება
        </button>
        <Filter/>
      </div>
    </div>
    <listings/>
    <add-post @closeModal="showModal = false" v-if="showModal"/>
  </div>
</template>