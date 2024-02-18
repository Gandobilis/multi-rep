<script setup>

const props = defineProps({
  name: String,
  defaultName: String,
  options: Array,
});

const value = defineModel();
</script>

<template>
  <div class="flex flex-col gap-3">
    <label class="text-xl font-normal" for="project">{{ props.name }}</label>
    <select
        v-model="value"
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1 ">
      <option value="all">{{ props.defaultName }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option.name" v-text="option.name"/>
    </select>
  </div>
</template>