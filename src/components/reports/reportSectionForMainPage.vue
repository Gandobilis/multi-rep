<script setup>
import useReport from "/src/composables/useReport.js";
import {ref} from "vue";
const {sendReport} = useReport()
const name = ref()
const surname = ref()
const email = ref()
const issue = ref()

</script>

<template>

  <div class=" p-12 flex  items-center justify-center bg-secondary-bg">

    <div class=" flex flex-col gap-10">
      <p class=" text-4xl font-bold">შეგვატყობინე პრობლემის შესახებ </p>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col w-1/2 gap-7">
          <p class="text-xl">სახელი</p>
          <input v-model="name" class="h-10 p-5 focus:outline-none rounded-2xl " type="text" name="" id="">
        </div>


        <div class="flex flex-col w-1/2 gap-7">
          <p class="text-xl">გვარი</p>
          <input v-model="surname" class="h-10 p-5 focus:outline-none rounded-2xl " type="text" name="" id="">
        </div>

        <div class="flex flex-col w-1/2 gap-7">
          <p class="text-xl">იმეილი</p>
          <input v-model="email"  class="h-10 p-5 focus:outline-none rounded-2xl " type="email" name="" id="">
        </div>

        <div class="flex flex-col w-1/2 gap-7">
          <p class="text-xl" >პრობლემა</p>
          <textarea v-model="issue" class="h-52 p-5 focus:outline-none rounded-2xl"/>
        </div>
        <button @click="sendReport(name,surname,email,issue)" class="bg-primary text-white py-3 rounded-2xl w-1/2">დადასტურება</button>
      </div>
    </div>

    <img class="w-[20%]" src="https://assets-global.website-files.com/5f21d1ffffa8639e7606ea49/61521ee4091cf72530f99801_Untitled_Artwork%20495%20(1).png" alt="">

  </div>
</template>