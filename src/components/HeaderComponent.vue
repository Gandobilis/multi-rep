<script setup>
import mainLogo from '../assests/icons/auth/main-logo.vue';
import heart from '../assests/icons/auth/heart.vue';
import search from '../assests/icons/auth/search.vue';
import man from '../assests/icons/auth/man.vue';
import {ref} from 'vue';

const activeTab = ref('first');

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
        hover:pb-0.5" @click="handleClick('first')"
              :style="{
          color: activeTab === 'first' ? '#950E1D' : 'black',
          borderBottom: activeTab === 'first' ? '2px solid #950E1D' : 'none'
        }"
      >მთავარი
      </button>
      <button class="mr-20 text-xl
        hover:pb-0.5" @click="handleClick('second')"
              :style="{
          color: activeTab === 'second' ? '#950E1D' : 'black',
          borderBottom: activeTab === 'second' ? '2px solid #950E1D' : 'none'
        }">ლიდერბორდი
      </button>
      <heart/>
      <man class="mx-20"/>
      <search/>
    </div>
  </div>
  <hr class="border-t border-gray-300 my-8 w-full"/>
</template>



