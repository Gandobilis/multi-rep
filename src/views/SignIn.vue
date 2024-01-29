<script setup>
import Side from '../components/SideBar.vue'
import {useSignIn} from '../composables/signIn';

const {inputs} = useSignIn();
</script>

<template>
  <div class="flex">
    <Side/>
    <div class="flex w-1/2 justify-center">
      <div class="flex flex-col justify-center">
        <h2 class="text-5xl font-medium">ავტორიზაცია</h2>
        <div class="flex flex-col gap-y-5 items-center">
          <div v-for="item in inputs" :key="item.index" class="flex flex-col mt-16">
            <input
                type="text"
                class="border border-black rounded-md w-60 h-12 placeholder:text-black placeholder:text-lg pl-3"
                :placeholder="item.placeholder"
            />
          </div>
          <div class="relative">
          <a href="" class="text-red text-lg absolute whitespace-nowrap">დაგავიწყდა?</a>
          </div>
          <div class="mt-10">
            <button class="px-20 py-2 bg-store-red text-lg rounded-xl text-white">შესვლა</button>
          </div>
          <div class="flex flex-col font-medium gap-y-4 items-center text-xl">
            <span>ან</span>
            <span class="text-red">რეგისტრაცია</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>