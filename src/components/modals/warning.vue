<script setup>
import forWarnings from "../../composables/forWarnings.js";


const {toggle, isToggled} = forWarnings()
const props = defineProps(["method", "text"]);

</script>

<template>
  <div v-if="isToggled===true" class="flex text-xl justify-centers lg:absolute  lg:h-screen  top-[40%] ">
    <div class="rounded-2xl bg-white z-[999]  items-center p-5 flex flex-col gap-10 justify-between h-fit shadow-2xl">
      <p class="w-10/12 font-semibold text-center">
        {{props.text}}
      </p>
      <div class="flex w-full justify-between gap-3">
        <button @click="props.method()" class="bg-primary text-white hover:opacity-80 transition-all px-8 py-2 rounded-2xl">დიახ</button>
        <button @click="toggle(false)" class="bg-white text-black hover:opacity-80 transition-all border-2 border-black px-8 py-2 rounded-2xl">არა</button>
      </div>

    </div>
  </div>
</template>