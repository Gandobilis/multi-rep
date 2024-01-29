<script setup>
import { useVerification } from '../composables/verification';
import SideBar from '../components/SideBar.vue';

const {
  input1,
  input2,
  input3,
  input4,
  input2Ref,
  input3Ref,
  input4Ref,
  focusInput2,
  focusInput3,
  focusInput4,
} = useVerification();
</script>

<template>
  <div class="flex">
    <SideBar />
    <div class="flex w-1/2 flex-col justify-center gap-y-20">
      <h2 class="font-bold text-3xl text-center">
        შეიყვანეთ მეილზე გამოგზავნილი პინკოდი
      </h2>
      <div class="flex gap-x-4 items-center justify-center">
        <input class="border border-black w-16 h-16 rounded-md text-center mr-4" :maxlength="1" v-model="input1"
          @input="focusInput2" />
        <input class="border border-black w-16 h-16 rounded-md text-center mr-4" :maxlength="1" v-model="input2"
          @input="focusInput3" ref="input2Ref" />
        <input class="border border-black w-16 h-16 rounded-md text-center mr-4" :maxlength="1" v-model="input3"
          @input="focusInput4" ref="input3Ref" />
        <input class="border border-black w-16 h-16 rounded-md text-center mr-4" :maxlength="1" v-model="input4"
          @input="focusNextInput" ref="input4Ref" />
      </div>
      <p class="mt-8 text-2xl text-center">
        ხელახლა გაგზავნა შეგიძლიათ 59 წამში
      </p>
      <div class="flex flex-col gap-y-4 items-center mt-8 text-xl">
        <button class="py-2 px-12 rounded-lg bg-store-pink text-pink">
          შემდეგი
        </button>
        <span>ან</span>
        <span class="text-pink">ხელახლა გაგზავნა</span>
      </div>
    </div>
  </div>
</template>

  