<script setup>
import mainLogo from '@/assets/icons/header/main-logo.vue';
import heart from '@/assets/icons/header/heart.vue';
import search from '@/assets/icons/header/search.vue';
import man from '@/assets/icons/header/man.vue';
import {ref} from 'vue';

const activeTab = ref('first');

const favourites = ref(5)
const dropdowns = ref([false, false, false])

const handleDropdown = (index) => {
  if (dropdowns.value.some(d => d)) {
    if (dropdowns.value.indexOf(true) !== index) {
      dropdowns.value[index] = true
    }
    dropdowns.value[dropdowns.value.indexOf(true)] = false
  } else {
    dropdowns.value[index] = true
  }
  console.log(dropdowns.value)
}

const handleClick = (tab) => {
  activeTab.value = tab;
};
</script>
<template>
  <div class="flex pt-10 px-20 justify-between">
    <div class="flex items-center">
      <mainLogo class="mr-4"/>
      <h1 class="text-primary text-2xl font-medium">E-LEARNING</h1>
    </div>
    <div class="flex">
      <button class="mr-10 text-xl
        hover:pb-0.5" @click="handleClick('first')" :style="{
            color: activeTab === 'first' ? '#950E1D' : 'black',
            borderBottom: activeTab === 'first' ? '2px solid #950E1D' : 'none'
        }">მთავარი
      </button>
      <button class="mr-20 text-xl
        hover:pb-0.5" @click="handleClick('second')" :style="{
            color: activeTab === 'second' ? '#950E1D' : 'black',
            borderBottom: activeTab === 'second' ? '2px solid #950E1D' : 'none'
        }">ლიდერბორდი
      </button>
      <heart :show="dropdowns[0]" :favourites="favourites" @handleDropdown="handleDropdown"/>
      <man :show="dropdowns[1]" class="mx-20" @handleDropdown="handleDropdown"/>
      <search :show="dropdowns[2]" @handleDropdown="handleDropdown"/>
    </div>
  </div>
  <hr class="border-t border-gray-300 my-10 w-full"/>
</template>



