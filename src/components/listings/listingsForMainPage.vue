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
  <div  class="relative">
    <img class="w-56 sm:flex hidden bottom-0  absolute h-56" src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-teacher-cute-cartoon-three-dimensional-illustration-png-image_9128914.png" alt="">
    <img class="w-56 sm:flex hidden absolute top-0 h-56" src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-female-teacher-character-cute-cartoon-3d-illustration-png-image_9128915.png" alt="">
    <img class="w-56 sm:flex hidden absolute bottom-0 right-0 h-56" src="https://static.vecteezy.com/system/resources/previews/023/841/800/original/adorable-blue-bots-small-cute-robots-generated-by-ai-free-png.png" alt="">
    <img class="w-48 sm:flex hidden absolute top-0 right-5 h-48" src="https://cdn-icons-png.flaticon.com/256/6663/6663869.png" alt="">

    <div class="sm:block hidden">
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
          <img class="w-16" src="https://www.pngkey.com/png/full/7-75406_arrow-signs-png-transparent-images-clipart-icons-pngriver.png
" alt="">
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

    <div class="flex flex-col px-5 sm:hidden  items-center ">
      <course v-for="listing in listingsForMainPage" :data="listing"/>
      <a href="/listings" class="text-lg text-primary cursor-pointer ">ნახეთ ყველა განცხადება</a>

    </div>




  </div>
</template>