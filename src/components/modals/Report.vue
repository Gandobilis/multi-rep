<script setup>
import useReport from "../../composables/useReport.js"
import PlusIcon from "../../assets/icons/modals/PlusIcon.vue";

const {reportTypes, _hoverIndex, hoveredIndex, _clickedIndex, clearIndex, clickedIndex, report} = useReport()
const emit = defineEmits(['closeModal'])
</script>

<template>
  <form
      @submit.prevent="report(); emit('closeModal')"
      class="absolute right-0 left z-10 m-auto flex max-lg:top-0 w-full lg:w-[40vw] flex-col gap-y-6 bg-white p-4 lg:p-5 shadow-2xl">
    <div class="flex w-full items-center justify-between border-b pb-6 border-border-gray">
      <p class="lg:text-2xl font-semibold">დაარეპორტეთ ეს პოსტი</p>

      <img @click="emit('closeModal')" class="cursor-pointer" src="/src/assets/icons/modals/close.svg"
           alt="close icon"/>
    </div>

    <p class="max-lg:text-sm">აირჩიეთ რეპორტის მიზეზი</p>

    <div class="flex flex-col gap-y-4 lg:gap-y-7">
      <div v-for="(row, index) in reportTypes" :key="index" class="flex max-lg:flex-col max-lg:gap-y-4 justify-between">
        <div v-for="(item, itemIndex) in row" :key="itemIndex"
             @mouseover="hoveredIndex(index, itemIndex)"
             @mouseout="clearIndex"
             @click="clickedIndex(index, itemIndex)"
             :class="{'bg-primary text-white': (index.toString() + itemIndex.toString()) === _clickedIndex}"
             class="flex items-center whitespace-nowrap rounded-sm lg:rounded-md border px-3 lg:px-5 gap-x-2.5 py-1.5 lg:py-2.5 hover:bg-primary hover:cursor-pointer hover:text-white">
          <p class="max-lg:text-sm" v-text="item"/>

          <plus-icon
              class="max-lg:w-3"
              :stroke="index.toString() + itemIndex.toString() === _hoverIndex || index.toString() + itemIndex.toString() === _clickedIndex ? 'white' : 'black'"
              :alt="item"
          />
        </div>
      </div>
    </div>

    <div class="w-full flex justify-end font-medium mt-5">
      <button :class="{'!bg-primary !text-white': _clickedIndex !== ''}"
              class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-gray-500 transition bg-gray-300 py-2 lg:py-3.5 hover:shadow-xl">
        რეპორტი
      </button>
    </div>
  </form>
</template>