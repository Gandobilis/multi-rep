<script setup>
import useReport from "../../composables/useReport.js"
import PlusIcon from "../../assets/icons/modals/PlusIcon.vue";
import {ref} from "vue";

const {reportTypes, _hoverIndex, hoveredIndex, _clickedIndex, clearIndex, clickedIndex} = useReport()
const close = ref(null)
</script>

<template>
  <dialog id="my_modal" class="modal">
    <div class="modal-box max-w-3xl">
      <form method="dialog">
        <button ref="close" class="btn btn-sm btn-circle btn-ghost absolute right-4 top-6">✕</button>
      </form>
      <h3 class="lg:text-2xl font-semibold">დაარეპორტეთ ეს პოსტი</h3>
      <p class="mt-3 mb-4 pb-2 max-lg:text-sm border-b-2">აირჩიეთ რეპორტის მიზეზი</p>
      <form class="flex flex-col gap-y-6 bg-white" @submit.prevent="close.click()">
        <div class="flex flex-col gap-y-4 lg:gap-y-7">
          <div v-for="(row, index) in reportTypes" :key="index"
               class="flex max-lg:flex-col max-lg:gap-y-4 justify-between">
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
          <button type="submit" :class="{'!bg-primary !text-white': _clickedIndex !== ''}"
                  class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-gray-500 transition bg-gray-300 py-2 lg:py-3.5 hover:shadow-xl">
            რეპორტი
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>