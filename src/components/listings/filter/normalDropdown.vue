<script setup>
import {useRouter} from "vue-router";
import {computed, ref, watchEffect, defineProps} from "vue";

const props = defineProps({
  name: String,
  defaultName: {
    type: String,
    default: "default",
  },
  options: Object,
});

const router = useRouter();
const selectedSubject = ref("default");

const selectedSubjectId = computed(() => {
  return selectedSubject.value;
});

const handleSubjectChange = () => {
  if (selectedSubject.value === "default") {
    // Remove the 'subject' parameter from the query
    const {subject, ...currentQuery} = router.currentRoute.value.query;

    router.replace({
      query: {
        ...currentQuery,
      },
    });
  } else {
    router.push({
      query: {
        ...router.currentRoute.value.query,
        subject: selectedSubject.value,
      },
    });
  }
};

watchEffect(() => {
  if (selectedSubjectId.value === "default") {
    // If the selected subject is 'default', reset selectedSubject to 'default'
    selectedSubject.value = "default";
  }
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <label class="text-xl font-normal" for="project">{{ props.name }}</label>
    <select
        @change="handleSubjectChange"
        v-model="selectedSubject"
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1 "
    >
      <option value="default">{{ props.defaultName }}</option>
      <option v-for="option in props.options" :key="option.name" :value="option.name">{{ option.name }}</option>
    </select>
  </div>
</template>
