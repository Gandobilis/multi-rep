<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import forSpecificData from "../../composables/forSpecificData.js"
import {onMounted} from "vue";

const {topTenTeachers, getTopTenTeachers} = forSpecificData()

const mainOptions = {
  perMove: 3,
  type: 'slide',
  rewindByDrag: true,
  perPage: 5,
  pagination: false,
  focus: 'center',
  arrows: true,
  gap: '1rem',
  breakpoints: {
    768:{
      perPage: 1.5,
      arrows: false
    }
  }

}

onMounted(async () => {
  await getTopTenTeachers();


});
</script>
<template>
  <section>
    <Splide  :options="mainOptions" :has-track="false" >
      <div class="flex flex-col gap-10  ">
        <h1 class="text-3xl font-bold">ტოპ მასწავლებლები</h1>

        <div>
          <SplideTrack>
            <SplideSlide class="" v-for="(teacher, index) in topTenTeachers">
              <div class="flex flex-col items-center gap-7 h-96 rounded-lg transition-all cursor-pointer">
                <img v-if="index===0" class="w-10 h-16 rotate-12" src="../.././assets/icons/topTeachers/goldenCrown.svg" alt="">
                <img v-if="index===1" class="w-10 h-16 rotate-12" src="../.././assets/icons/topTeachers/silverCrown.svg" alt="">
                <img v-if="index===2" class="w-10 h-16 rotate-12" src="../.././assets/icons/topTeachers/bronzeCrown.svg" alt="">
                <div class="h-16" v-if="index>2"></div>

                <div class="relative flex flex-col items-center justify-center">
                  <img class=" w-24 h-24 rounded-full" :src="teacher.profile_pic" alt="">
                  <div class="absolute rounded-lg px-4 flex -bottom-3 bg-secondary-bg gap-2">
                    <img class="w-5 h-5" src="../.././assets/icons/leaderboard/star-icon.svg" alt="">
                    <p class="font-bold">5.0</p>

                  </div>
                </div>
                <div class="flex flex-col items-center justify-center w-1/2 gap-2">
                  <p class="font-bold text-lg">{{teacher.first_name}}</p>
                </div>

              </div>
            </SplideSlide>
          </SplideTrack>
        </div>
      </div>
    </Splide>
  </section>
</template>