<script setup>
import {useRouter} from "vue-router";

defineProps({
  path: {
    type: String,
    required: true,
  },
});

const router = useRouter();
</script>

<template>
  <button
      @click="router.push(path)"
      class="pb-1 cursor-pointer text-2xl lg:hover:pb-1.5"
      :style="{
            color: router.currentRoute.value.path === path ? '#950E1D' : 'black',
            borderBottom: router.currentRoute.value.path === path ? '2px solid #950E1D' : 'none'
        }">
    <slot/>
  </button>
</template>