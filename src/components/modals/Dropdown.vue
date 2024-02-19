<template>
  <div class="grid grid-cols-2 gap-x-4">
    <animated-input v-model="value" :placeholder="label"/>

    <div
        class="max-lg:text-xs relative bg-[#ECECEC] rounded-md border border-black font-medium p-2 lg:p-2.5">
      <div class="flex cursor-pointer items-center justify-between" @click="emit('toggle')">
        <p v-text="util"/>

        <img :class="{'rotate-180': show}" src="/src/assets/icons/modals/down-arrow.svg" alt="arrow icon"/>
      </div>

      <div
          v-if="show"
          class="absolute left-0 z-10 flex w-full flex-col rounded-md border border-black bg-white top-10 lg:top-14 p-2.5 gap-y-2.5">
        <p v-for="(option, index) in options" :class="{'font-semibold text-primary': option === unit}"
           class="cursor-pointer"
           :key="index" @click="util = option;emit('close')" v-text="option"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";

const util = defineModel('unit');
const value = defineModel('value');

const emit = defineEmits(['close', 'toggle']);
defineProps({
  label: {type: String, required: true},
  show: {type: Boolean, required: true},
  options: {type: Object, required: true},
});
</script>