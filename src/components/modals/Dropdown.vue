<template>
  <div class="grid grid-cols-2 gap-x-4">

    <div class="flex rounded-md border-2 border-black p-2.5">
      <p v-text="label"/>
    </div>

    <div
        class="relative bg-[#ECECEC] rounded-md border border-black font-medium p-2.5">

      <div class="cursor-pointer flex justify-between items-center" @click="emit('toggleDropdown')">
        <p v-text="model"/>
        <img :class="{'rotate-180': show}" src="/src/assets/icons/modals/down-arrow.svg" alt="arrow icon"/>
      </div>

      <div
          v-if="show"
          class="z-10 absolute left-0 flex w-full flex-col rounded-md border border-black bg-white top-[50px] p-2.5 gap-y-2.5">
        <p v-for="(unit, index) in units" :class="{'font-semibold': unit === model}" class="cursor-pointer"
           :key="index" @click="model = unit;emit('closeDropDown')" v-text="unit"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"

const emit = defineEmits(['closeDropDown', 'toggleDropdown']);

defineProps({
  label: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    required: true
  }
})

const model = defineModel();

const units = ref([
  'დღე', 'კვირა', 'თვე', 'წელი'
])
</script>