<script setup>
import { ref } from 'vue';

const heart = ref(false);

function toggleHeart() {
    heart.value = !heart.value;
}
</script>


<template>
    <div class="relative">
        <img class="hover:cursor-pointer"
            :src="heart ? 'src/assets/icons/header/heart2.svg' : 'src/assets/icons/header/heart.svg'" alt="heart icon"
            @click="toggleHeart" />
        <div v-if="heart" class="absolute border border-gray-300 px-3 py-2 rounded-lg top-12 right-0 flex">
            <div class="p-2 flex flex-col">

            </div>
        </div>
    </div>
</template>
