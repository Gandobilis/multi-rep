<script setup>

const props = defineProps({
  name: String,
  defaultName: String,
  options: Array,
})

</script>

<template>
  <div class="flex flex-col gap-3">
    <label class="text-xl font-normal" for="project">{{ props.name }}</label>
    <select
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1 ">
      <option value="default">{{ props.defaultName }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option.id" v-text="option.name"/>
    </select>
  </div>
</template>