<script setup>
import {ref} from "vue"

const show = ref(false)
</script>
<template>
  <div>
    <div>
      <!-- filter  button -->
      <div class="flex flex-row space-x-1">
        <p class="">დალაგება:</p>
        <div class="flex flex-row space-x-1" @click="show = !show">
          <button>პოპულარული</button>
          <img class="hover:cursor-pointer hover:rotate-180" src="../../icone/choiBox.svg" alt="" >
        </div>
      </div>
      <!-- filter menu -->
      <ul v-show="show"
          class="absolute z-10 bg-white right-0 py-2 mr-12  mt-2 rounded-md border-[#CACACA] shadow-xl w-60 ">
        <li class=" block px-4 py-2 text-sm  hover:cursor-pointer">
          პოპულარული
        </li>
        <li class=" block px-4 py-2 text-sm  hover:cursor-pointer">
          ახლანდელი
        </li>
        <li class=" block px-4 py-2 text-sm  hover:cursor-pointer">
          პროგრამირება
        </li>
        <li class=" block px-4 py-2 text-sm  hover:cursor-pointer">
          ზოგადი
        </li>
      </ul>
    </div>
  </div>
</template>
 