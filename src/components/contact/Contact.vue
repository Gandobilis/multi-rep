<script setup>
import useReport from "/src/composables/useContact"
import SuccessAlert from "../alerts/SuccessAlert.vue";
import ErrorAlert from "../alerts/ErrorAlert.vue";

const {data, success, error, sendReport} = useReport()

const handleReport = async () => {
  await sendReport()
}
</script>

<template>
  <div
      class="flex items-center justify-center py-6 lg:py-12 text-gray-900 max-lg:bg-secondary-bg lg:bg-gradient-to-r lg:from-secondary-bg lg:justify-between">
    <img class="max-lg:hidden w-1/4 -scale-x-100" alt="left reporter bird"
         src="https://assets-global.website-files.com/5f21d1ffffa8639e7606ea49/61521ee4091cf72530f99801_Untitled_Artwork%20495%20(1).png">

    <div
        class="flex max-md:mx-auto flex-col justify-center gap-4 max-md:px-8 w-full md:max-lg:w-1/3  lg:w-1/4 lg:gap-10">
      <p class="font-bold lg:text-3xl" v-text="'დაგვიტოვეთ შეტყობინება'"/>

      <form @submit.prevent="handleReport" class="flex flex-col gap-2.5 lg:gap-4">
        <div class="flex flex-col gap-2.5 lg:gap-5">
          <label for="name" class="text-sm lg:text-xl lg:font-medium" v-text="'სახელი'"/>

          <input id="name" type="text" v-model="data.name"
                 class="h-10 lg:h-11 p-5 text-black focus:outline-none rounded-md">
        </div>

        <div class="flex flex-col gap-2.5 lg:gap-5">
          <label for="surname" class="text-sm lg:text-xl lg:font-medium" v-text="'გვარი'"/>

          <input id="surname" type="text" v-model="data.surname"
                 class="h-10 lg:h-11 p-5 text-black focus:outline-none rounded-md">
        </div>

        <div class="flex flex-col gap-2.5 lg:gap-5">
          <label for="email" class="text-sm lg:text-xl lg:font-medium" v-text="'ელ. ფოსტა'"/>

          <input id="email" type="email" v-model="data.email"
                 class="h-10 lg:h-11 p-5 text-black focus:outline-none rounded-md">
        </div>

        <div class="flex flex-col gap-2.5 lg:gap-5">
          <label for="issue" class="text-sm lg:text-xl lg:font-medium" v-text="'პრობლემა'"/>

          <textarea id="issue" v-model="data.issue"
                    class="h-52 resize-none p-5 text-black focus:outline-none rounded-md"/>
        </div>

        <success-alert v-if="success" :message="success"/>

        <error-alert v-if="error" :message="error"/>

        <button class="bg-black text-white btn btn-ghost glass"
                v-text="'გაგზავნა'"/>
      </form>
    </div>

    <img class="max-lg:hidden w-1/4" alt="right reporter bird"
         src="https://assets-global.website-files.com/5f21d1ffffa8639e7606ea49/61521ee4091cf72530f99801_Untitled_Artwork%20495%20(1).png">
  </div>
</template>