<script setup>
import useReport from "../../composables/useReport.js"
import PlusIcon from "../../assets/icons/modals/PlusIcon.vue";

const {reportTypes, _hoverIndex, hoveredIndex, _clickedIndex, clearIndex, clickedIndex, report} = useReport()


</script>

<template>
  <form
      @submit.prevent="report"
      class="absolute right-0 left-0 z-10 m-auto flex w-2/5 flex-col gap-y-6 bg-white p-5 shadow-2xl">
    <div class="flex w-full items-center justify-between border-b pb-6 border-border-gray">
      <p class="text-2xl font-semibold">დაარეპორტეთ ეს პოსტი</p>

      <img class="cursor-pointer" src="/src/assets/icons/modals/close.svg" alt="close icon"/>
    </div>

    <p>აირჩიეთ რეპორტის მიზეზი</p>

    <div class="flex flex-col gap-y-7">
      <div v-for="(row, index) in reportTypes" :key="index" class="flex justify-between">
        <div v-for="(item, itemIndex) in row" :key="itemIndex"
             @mouseover="hoveredIndex(index, itemIndex)"
             @mouseout="clearIndex"
             @click="clickedIndex(index, itemIndex)"
             :class="{'bg-primary text-white': (index.toString() + itemIndex.toString()) === _clickedIndex}"
             class="flex items-center whitespace-nowrap rounded-md border px-5 gap-x-2.5 py-2.5 hover:bg-primary hover:cursor-pointer hover:text-white">
          <p v-text="item"/>

          <plus-icon
              :stroke="index.toString() + itemIndex.toString() === _hoverIndex || index.toString() + itemIndex.toString() === _clickedIndex ? 'white' : 'black'"
              :alt="item"
          />
        </div>
      </div>
    </div>

    <div class="w-full flex justify-end font-medium mt-5">
      <button :class="{'!bg-primary !text-white': _clickedIndex !== ''}"
              class="bg-gray-300 text-gray-500 px-10 py-2.5 rounded-md hover:shadow-2xl">
        რეპორტი
      </button>
    </div>
  </form>
</template>