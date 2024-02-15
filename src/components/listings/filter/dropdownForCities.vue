<!-- dropdownForCities.vue -->
<script setup>
import { ref, watchEffect, computed, defineProps } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const selectedCity = ref("default");
const selectedDistrict = ref("default");
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

const selectedDistrictId = computed(() => {
  return selectedDistrict.value;
});

const handleCityChange = () => {
  const { district, ...currentQuery } = router.currentRoute.value.query;
  selectedDistrict.value = "default";

  router.replace({
    query: {
      ...currentQuery,
      city: selectedCity.value,
    }
  });
}

const handleDistrictChange = () => {
  router.push({
    query: {
      ...router.currentRoute.value.query,
      district: selectedDistrict.value,
    }
  });
}

watchEffect(() => {
  if (selectedCityId.value !== "default") {
    const selectedCityData = props.options.find(city => city.city_name === selectedCityId.value);
    districts.value = selectedCityData ? selectedCityData.districts : [];
  }
  else {
    const { city, ...currentQuery } = router.currentRoute.value.query;
    selectedCity.value = 'default';
    router.replace({
      query: {
        ...currentQuery,
      }
    });
    districts.value = [];
  }

  if(districts.value.length>0 && selectedDistrictId.value === 'default'){
    const { district, ...currentQuery } = router.currentRoute.value.query;
    selectedDistrict.value = 'default';
    router.replace({
      query: {
        ...currentQuery,
      }
    });

  }
});

</script>

<template>
  <div v-if="props.options" class="flex flex-col gap-3">
    <label class="text-xl font-normal" for="project">{{ props.name }}</label>
    <select
        @change="handleCityChange"
        v-model="selectedCity"
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1"
    >
      <option value="default">{{ props.defaultName }}</option>
      <option v-for="city in props.options" :value="city.city_name">{{ city.city_name }}</option>
    </select>
    <!-- Add a new dropdown for districts -->
    <select
        @change="handleDistrictChange"
        v-if="districts.length > 0"
        v-model="selectedDistrict"
    class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1"
    >
    <option value="default">აირჩიეთ უბანი</option>
    <option v-for="district in districts" :value="district">{{ district }}</option>
    </select>
  </div>
</template>
