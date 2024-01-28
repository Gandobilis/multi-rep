<script setup>
import {ref} from "vue";

const reportTypes = [
  ['შევიწროვება',
    'არასწორი ინფორმაცია',
    'ყალბი ანგარიში'],
  ['თვითზიანი',
    'თაღლითობა',
    'სპამი',
    'ძალადობა'],
  ['უკანონო მომსახურება',
    'ცილისწამება',
    'ბავშვის ექსპლუატაცია']
];
const items = [
  'დაარეპორტეთ ეს პოსტი',
];

const _hoverIndex = ref('')

const hoveredIndex = (i, j) => {
  _hoverIndex.value = i.toString() + j.toString()
}

const clickedIndex = (i, j) => {
  clickedIndex.value = i.toString() + j.toString()
}

const clearIndex = () => {
  _hoverIndex.value = ''
}

const reasons = [
  " აირჩიეთ რეპორტის მიზეზი",
];

</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <form class="w-[877px] h-[515px] bg-white rounded-[10px] border border-report1">
      <div v-for="(item) in items"
           class=" absolute text-5xl  mt-[30px] ml-[30px] uppercase"
           v-text="item"/>
      <div class="relative">
        <img
            src="/src/logo/Vector.svg"
            class="absolute mt-[39px] right-[30px]   px-2 bg-white rounded-[5px]"
            alt="add icon"
        />
      </div>
      <div class="w-[876.02px] mt-[110px]  border border-report1 "></div>
      <!-- მიზეზის არჩევა -->
      <div v-for="(reason) in reasons"
           class="w-[339px] h-8 mt-[15px] ml-[30px] text-2xl" v-text="reason"/>

      <!-- მიზეზები -->
      <div class="flex flex-col px-[30px] gap-y-[30px] pt-[23px] tracking-[1.6px]">
        <div v-for="(row, index) in reportTypes" :key="index" class="w-full flex justify-between">
          <div v-for="(item, itemIndex) in row" :key="itemIndex"
               @mouseover="hoveredIndex(row, item)"
               @mouseout="clearIndex"
               @click="clickedIndex(row, item)"
               class="flex gap-x-[10px] py-[10px] px-5 border whitespace-nowrap border-report2 rounded-[5px] hover:bg-primary hover:text-white hover:cursor-pointer">
            <p v-text="item"/>

            <img
                :src="row.toString() + item.toString() === _hoverIndex ? 'src/logo/Vector-white.svg' : 'src/logo/vector-plus.svg'"
                :alt="item"
            />
          </div>
        </div>
      </div>

      <div class="w-[876.02px] mt-[50px]  border border-report1 "></div>

      <button
          class="px-[60.5px] py-[6.5px] ml-[647px] mt-[30px] text-secondary-text bg-secondary-bg rounded-[5px]">
        რეპორტი
      </button>
    </form>
  </div>
</template>
