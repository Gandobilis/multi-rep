<script setup>

const props = defineProps({
  name: String,
  defaultName: {
    type: String,
    default: "default",
  },
  options: Object,
})

setTimeout(()=>{
  console.log(props.options)

}, 2000)
</script>

<template>

  <div  class="flex flex-col gap-3">
    <label class="text-xl font-normal" for="project">{{ props.name }}</label>
    <select
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1 "
    >
      <option value="default">{{ props.defaultName }}</option>
      <option v-for="option in props.options" :key="option.id" :value="option.id">{{option.name}}</option>
    </select>
  </div>
</template>