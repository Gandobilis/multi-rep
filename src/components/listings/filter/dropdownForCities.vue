<!-- dropdown.vue -->
<script setup>
import {ref, watchEffect, defineProps, watch} from 'vue';
import UseAddPost from "../../../composables/useAddPost.js";

const {selectedCityId, selectedDistrictId} = UseAddPost()
const districts = ref([]);
const props = defineProps({
  name: String,
  defaultName: {
    type: String,
    default: "default",
  },
  options: Object,
});

watch(selectedCityId, ()=>{
  selectedDistrictId.value = "default"
})

watchEffect(() => {
  if (selectedCityId.value !== "default") {
    const selectedCityData = props.options.find(city => city.city_id === selectedCityId.value);
    if(selectedCityData.districts){
      console.log(selectedCityData.districts)
      districts.value = selectedCityData.districts

    }console.log(districts.value)

  } else {
    districts.value = [];
  }

});
</script>

<template>

  <div v-if="props.options" class="flex flex-col gap-5">
    <select
        v-model="selectedCityId"
        class="text-sm lg:text-xl w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1">
      <option value="default">ქალაქი</option>
      <option v-for="city in props.options" :key="city.city_id" :value="city.city_id">{{ city.city_name }}</option>
    </select>
    <!-- Add a new dropdown for districts -->
    <select
        v-if="districts.length > 0"
        v-model="selectedDistrictId"
        class="text-sm lg:text-xl w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1">
      <option value="default">უბანი</option>

      <option v-for="district in districts"  :value="district.district_id">{{ district.district_name }}</option>
    </select>
  </div>
</template>
