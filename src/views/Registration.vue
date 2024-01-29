<script setup>
import Side from '../components/SideBar.vue';
import { useRegistration } from '../composables/registraction';

const { inputs } = useRegistration();
</script>

<template>
  <div class="flex">
    <Side />
    <div class="flex w-1/2 justify-center">
      <div class="flex flex-col justify-center">
        <h2 class="text-5xl font-medium">რეგისტრაცია</h2>
        <div class="flex flex-col gap-y-12 mt-10">
          <div v-for="item in inputs" :key="item.index" class="flex flex-col">
            <input
              type="text"
              class="border border-black rounded-md w-60 h-12 placeholder:text-black placeholder:text-lg pl-3"
              :placeholder="item.placeholder"
            />
          </div>
          <div class="flex flex-col border border-black rounded-md pl-4">
            <div class="flex items-center my-3">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-4 text-red"
              />
              <label
                for="inline-radio"
                class="ms-2 text-sm font-medium text-black dark:text-black-300"
              >
                მოსწავლე
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-4 text-red"
              />
              <label
                for="inline-2-radio"
                class="ms-2 text-sm font-medium text-black dark:text-black-300"
              >
                მასწავლებელი
              </label>
            </div>
          </div>
          <div>
            <button class="px-20 py-2 bg-store-red text-lg rounded-xl text-white">შესვლა</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
