<script setup>
import mainLogo from '../assests/icons/auth/main-logo.vue';
import heart from '../assests/icons/auth/heart.vue';
import search from '../assests/icons/auth/search.vue';
import man from '../assests/icons/auth/man.vue';
import exit from '../assests/icons/auth/exit.vue';
import { ref } from 'vue';

const activeTab = ref(null);

const handleClick = (tab) => {
    activeTab.value = tab;
};
</script>
<template>
    <div class="flex pt-10 px-20 justify-between">
        <div class="flex items-center">
            <mainLogo class="mr-4" />
            <h1 class="text-primary text-2xl font-medium ">E-LEARNING</h1>
        </div>
        <div class="flex">
            <button class="mr-10 text-xl relative focus:outline-none 
        hover:text-red-500 hover:border-b-2 hover:border-red-500 
        focus:text-red-500 focus:border-b-2 focus:border-red-500 
        {{ activeTab === 'first' ? 'underline' : '' }}" @click="handleClick('first')">მთავარი
            </button>
            <button class="mr-20 text-xl relative focus:outline-none 
        hover:text-red-500 hover:border-b-2 hover:border-red-500 
        focus:text-red-500 focus:border-b-2 focus:border-red-500 
        {{ activeTab === 'second' ? 'underline' : '' }}" @click="handleClick('second')">ლიდერბორდი
            </button>
            <heart />
            <man class="mx-20" />
            <search />
        </div>
    </div>
    <hr class="border-t border-gray-300 my-8 w-full" />
</template>



