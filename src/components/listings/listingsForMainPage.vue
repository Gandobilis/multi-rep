<script setup>
import useListings from "/src/composables/useListings.js";

import Course from "/src/components/listings/Listing.vue";
import {onMounted, ref} from "vue";
const {getListingsForMainPage,listingsForMainPage} = useListings()



const firstTwo = ref()
const secondTwo = ref()
const thirdTwo = ref()
const fourthTwo = ref()



onMounted(async () => {
  await getListingsForMainPage();
  firstTwo.value = listingsForMainPage.value.slice(0, 2);
  secondTwo.value = listingsForMainPage.value.slice(2, 4);
  thirdTwo.value = listingsForMainPage.value.slice(4, 6);
  fourthTwo.value = listingsForMainPage.value.slice(6, 8);
});



</script>

<template>
  <div  class="">

    <div class="sm:block hidden space-y-4">
      <div class="flex items-center relative justify-center gap-3">
        <div v-if="listingsForMainPage" v-for="(course, index) in firstTwo " :key="index">
          <course is-main :data="course"/>
        </div>
      </div>

      <div class="flex items-center  justify-between">
        <div class="flex flex-col gap-3">
          <div v-for="(course, index) in secondTwo" :key="index">
            <course is-main :data="course"/>
          </div>
        </div>
        <div>
          <img class="w-16" src="https://www.pngkey.com/png/full/7-75406_arrow-signs-png-transparent-images-clipart-icons-pngriver.png" alt="">
          <a href="/listings" class="text-2xl text-primary cursor-pointer ">ნახეთ ყველა განცხადება</a>
        </div>
        <div class="flex flex-col  bottom-0 gap-3">
          <div v-for="(course, index) in fourthTwo" :key="index">
            <course is-main :data="course"/>
          </div>
        </div>
      </div>


      <div class="flex justify-center  gap-3">
        <div v-for="(course, index) in thirdTwo" :key="index">
          <course is-main :data="course"/>
        </div>
      </div>
    </div>

    <div class="flex lg:gap-0 gap-5 flex-col px-5 sm:hidden  items-center ">
      <course v-for="listing in listingsForMainPage" :data="listing"/>
      <a href="/listings" class="text-lg text-primary cursor-pointer ">ნახეთ ყველა განცხადება</a>

    </div>




  </div>
</template>