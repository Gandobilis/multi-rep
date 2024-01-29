<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  favourites: {
    type: Number,
    required: true
  }
})

defineEmits(['handleDropdown'])
</script>


<template>
  <div class="relative">
    <img class="hover:cursor-pointer"
         :src="show ? 'src/assets/icons/header/heart2.svg' : 'src/assets/icons/header/heart.svg'" alt="heart icon"
         @click="$emit('handleDropdown', 0)"/>
    <div v-if="show" class="absolute border border-gray-300 px-3 py-2 rounded-lg top-12 right-0 flex">
      <div class="p-2 flex flex-col">

      </div>
    </div>
    <div v-if="favourites > 0"
         class="absolute flex items-center justify-center -top-1.5 -right-1.5 rounded-full bg-primary w-5 h-5">
      <span class="text-white" v-text="favourites"/>
    </div>
  </div>
</template>
