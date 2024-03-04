<script setup>
import useReport from "/src/composables/useContact"

const {data, sendReport} = useReport()

const handleReport = async () => {
  await sendReport()
}
</script>

<template>
  <div class="p-12  flex items-center text-white justify-center lg:justify-between bg-primary">
    <img class="-scale-x-100 max-lg:hidden w-1/4"
         src="https://assets-global.website-files.com/5f21d1ffffa8639e7606ea49/61521ee4091cf72530f99801_Untitled_Artwork%20495%20(1).png"
         alt="">

    <div class="flex flex-col justify-center  md:w-1/4 gap-4 lg:gap-10">
      <p class="lg:text-3xl font-bold">დაგვიტოვეთ შეტყობინება</p>

      <div class="flex flex-col gap-2.5 lg:gap-4">
        <div class="flex flex-col  gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">სახელი</p>
          <input v-model="data.name" class="h-10 p-5 focus:outline-none rounded-md text-black lg:rounded-lg "
                 type="text">
        </div>

        <div class="flex flex-col gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">გვარი</p>
          <input v-model="data.surname" class="h-10 text-black p-5 focus:outline-none rounded-md lg:rounded-lg "
                 type="text">
        </div>
        <div class="flex flex-col gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">იმეილი</p>
          <input v-model="data.email" class="h-10 text-black p-5 focus:outline-none rounded-md lg:rounded-lg "
                 type="email"
                 name="">
        </div>
        <div class="flex flex-col gap-2.5 lg:gap-5">
          <p class="text-sm lg:text-xl">პრობლემა</p>
          <textarea v-model="data.issue"
                    class="resize-none text-black h-52 p-5 focus:outline-none rounded-md lg:rounded-lg"/>
        </div>
        <button @click="handleReport"
                class="hover:shadow-2xl max-lg:text-sm bg-black text-white py-3 rounded-md lg:rounded-lg lg:w-1/2">
          დადასტურება
        </button>
      </div>
    </div>

    <img class="max-lg:hidden w-1/4"
         src="https://assets-global.website-files.com/5f21d1ffffa8639e7606ea49/61521ee4091cf72530f99801_Untitled_Artwork%20495%20(1).png"
         alt="">

  </div>
</template>