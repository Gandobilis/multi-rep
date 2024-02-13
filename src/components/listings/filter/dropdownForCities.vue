<!-- dropdownForCities.vue -->
<script setup>
import { ref, watchEffect, computed, defineProps } from 'vue';

const selectedCity = ref("default");
const districts = ref([]);
const props = defineProps({
  name: String,
  defaultName: {
    type: String,
    default: "default",
  },
  options: Object,
});

const selectedCityId = computed(() => {
  return selectedCity.value;
});

watchEffect(() => {
  if (selectedCityId.value !== "default") {
    const selectedCityData = props.options.find(city => city.city_name === selectedCityId.value);
    districts.value = selectedCityData ? selectedCityData.districts : [];
    console.log()
  } else {
    districts.value = [];
  }
});
</script>

<template>
  <div v-if="props.options" class="flex flex-col gap-3">
    <label class="text-xl font-normal" for="project">{{ props.name }}</label>
    <select
        v-model="selectedCity"
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1"
    >
      <option value="default">{{ props.defaultName }}</option>
      <option v-for="city in props.options" :key="city.city_name" :value="city.city_name">{{ city.city_name }}</option>
    </select>
    <!-- Add a new dropdown for districts -->
    <select
        v-if="districts.length > 0"
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1"
    >
      <option value="default">Select District</option>
      <option v-for="district in districts" :key="district" :value="district">{{ district }}</option>
    </select>
  </div>
</template>
