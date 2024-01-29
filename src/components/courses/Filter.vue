<script setup>
import {ref} from "vue"

const show = ref(false)

const filterAttributes = ref([
  'პოპულარული',
  'ახლანდელი',
  'ფასი'
]);

defineProps({
  chosenAttributeIndex: {
    type: Number,
    required: true
  }
})

defineEmits(['changeChosenAttributeIndex'])
</script>
<template>
  <div>
    <div>
      <!-- filter  button -->
      <div class="flex flex-row space-x-1">
        <p class="">დალაგება:</p>
        <div class="flex flex-row space-x-1" @click="show = !show">
          <button class="font-semibold" v-text="filterAttributes[chosenAttributeIndex]"/>
          <img class="hover:cursor-pointer" :class="show ? 'rotate-180' : ''" src="../../icone/choiBox.svg" alt="">
        </div>
      </div>
      <!-- filter menu -->
      <ul v-show="show"
          class="absolute z-10 flex flex-col gap-y-4 bg-white right-0 py-2 mr-12 mt-2 rounded-md border-[#CACACA] shadow-xl w-60">
        <li v-for="(attribute, index) in filterAttributes" :key="index"
            @click="$emit('changeChosenAttributeIndex', index)"
            :class="chosenAttributeIndex === index ? 'font-bold border-l-2 border-black' : 'font-normal'"
            class="block px-4 text-sm hover:cursor-pointer" v-text="attribute"/>
      </ul>
    </div>
  </div>
</template>
 