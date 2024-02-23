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

  <div class="p-12 flex items-center justify-between bg-secondary-bg">
    <img class="-scale-x-100 max-lg:hidden w-1/4"
         src="https://assets-global.website-files.com/5f21d1ffffa8639e7606ea49/61521ee4091cf72530f99801_Untitled_Artwork%20495%20(1).png"
         alt="">

    <div class="flex flex-col w-1/4 gap-4 lg:gap-10">
      <p class="lg:text-3xl font-bold">დაგვიტოვეთ შეტყობინება</p>

      <div class="flex flex-col gap-2.5 lg:gap-4">
        <div class="flex flex-col gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">სახელი</p>
          <input v-model="name" class="h-10 p-5 focus:outline-none rounded-md lg:rounded-lg " type="text" name=""
                 id="">
        </div>


        <div class="flex flex-col gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">გვარი</p>
          <input v-model="surname" class="h-10 p-5 focus:outline-none rounded-md lg:rounded-lg " type="text" name=""
                 id="">
        </div>

        <div class="flex flex-col gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">იმეილი</p>
          <input v-model="email" class="h-10 p-5 focus:outline-none rounded-md lg:rounded-lg " type="email" name=""
                 id="">
        </div>

        <div class="flex flex-col gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">პრობლემა</p>
          <textarea v-model="issue" class="resize-none h-52 p-5 focus:outline-none rounded-md lg:rounded-lg"/>
        </div>

        <button @click="sendReport(name,surname,email,issue)"
                class="hover:shadow-2xl max-lg:text-sm bg-primary text-white py-3 rounded-md lg:rounded-lg lg:w-1/2">
          დადასტურება
        </button>
      </div>
    </div>

    <img class="max-lg:hidden w-1/4"
         src="https://assets-global.website-files.com/5f21d1ffffa8639e7606ea49/61521ee4091cf72530f99801_Untitled_Artwork%20495%20(1).png"
         alt="">

  </div>
</template>