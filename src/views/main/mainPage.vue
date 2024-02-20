<script setup>
import {ref} from "vue"
import Filter from "/src/components/listings/filter/Filter.vue"
import AddPost from "../../components/modals/AddPost.vue"
import TopFive from "../../components/leaderboard/topFive.vue";
import ListingsForMainPage from "../../components/listings/listingsForMainPage.vue";

const showModal = ref(false)
const is_teacher = ref(true)
</script>

<template>
  <div class="relative flex flex-col ">
    <top-five/>
    <div class="my-10 flex items-center justify-between">
      <h1 class="text-3xl font-bold"> განცხადებები</h1>


    </div>
    <ListingsForMainPage/>


    <add-post @closeModal="showModal = false" v-if="showModal"/>
  </div>
</template>