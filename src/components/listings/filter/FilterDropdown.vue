<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const value = defineModel();
</script>

<template>
  <div class="flex text-sm lg:text-xl  flex-col gap-3">
    <select
        v-model="value"
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1">
      <option selected value="all">ყველა</option>
      <option v-for="(option, index) in options" :key="index" :value="option" v-text="option"/>
    </select>
  </div>
</template>