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
    <img class="hover:cursor-pointer" @click="$emit('handleDropdown', 2)"
      :src="show ? 'src/assets/icons/header/Vector1.svg' : 'src/assets/icons/header/Vector.svg'" alt="show icon" />
    <div v-if="show" class="absolute border border-gray-300 px-3 py-2 rounded-lg top-12 right-0 flex">
      <input v-if="show" type="text" class="border border-black px-3 py-2  placeholder-black" placeholder="ძიება" />
      <img :src="show ? 'src/assets/icons/header/Vector2.svg' : ''" class="px-4 mr-5 bg-red-800"/>
    </div>
  </div>
</template>