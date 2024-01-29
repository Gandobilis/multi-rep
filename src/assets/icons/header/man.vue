<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

defineEmits(['handleDropdown'])
</script>
<template>
  <div class="relative">
    <img class="hover:cursor-pointer"
         :src="show ? 'src/assets/icons/header/man.svg' : 'src/assets/icons/header/man.svg'"
         alt="search icon" @click="$emit('handleDropdown', 1)"/>
    <!-- Dropdown content -->
    <div v-if="show" class="absolute mt-2 right-0 w-28 bg-white rounded-lg shadow-lg border border-gray-300">
      <div class="flex items-start">
        <div class="flex flex-col items-start">
          <img class="hover:cursor-pointer py-2 px-2"
               :src="show ? 'src/assets/icons/header/little-man.svg' : 'src/assets/icons/header/little-man.svg'"
               alt="little-man"/>
          <img class="hover:cursor-pointer py-4 px-2"
               :src="show ? 'src/assets/icons/header/little-log-out.svg' : 'src/assets/icons/header/little-log-out.svg'"
               alt="little-log-out"/>
        </div>
        <div class="flex flex-col items-start py-2">
          <p class="h-8 cursor-pointer font-medium">ნახვა</p>
          <p class="text-red-800 cursor-pointer font-medium">გასვლა</p>
        </div>
      </div>
    </div>
  </div>
</template>

