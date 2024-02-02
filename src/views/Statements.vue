<script setup>
import {ref} from "vue";
import icon from '@/assets/icons/statements/statement-icon.svg';

const statements = ref(Array(6).fill({
  icon,
  title: 'ჯავას ახალი კურსი',
  publishDate: 'დღეს 19:57',
  price: '300 ₾',
  payType: 'თვიურად',
  duration: '6 თვე',
  rating: 4.9,
  author: 'გიორგი გიორგაძე',
  phoneNumber: '(+995) 599-111-222'
}));
</script>

<template>
  <div class="flex flex-col gap-y-20">
    <div class="flex justify-between items-center">
      <h1 class="text-5xl font-bold">განცხადებები</h1>
    </div>
    <div class="grid grid-cols-3 gap-x-24 gap-y-20">
      <div v-for="(statement, index) in statements" class="rounded-lg border border-gray-400" :key="index">
        <img :src="statement.icon" alt="statement icon" class="w-full"/>
        <div class="mt-4 mb-2 flex justify-between items-start px-2">
          <p v-text="statement.title" class="font-bold"/>
          <p v-text="statement.publishDate" class="text-meta"/>
        </div>
        <div class="flex justify-between items-center px-2 my-4">
          <p class="font-bold text-price text-xl" v-text="statement.price"/>
          <p class="text-meta" v-text="statement.payType"/>
          <div class="flex items-center gap-x-1.5">
            <img src="/src/assets/icons/statements/time.svg" alt="time icon">
            <p class="text-meta" v-text="statement.duration"/>
          </div>
          <div class="flex items-center gap-x-1.5 px-2">
            <img class="w-6 h-6" src="/src/assets/icons/leaderboard/star-icon.svg" alt="time icon">
            <p v-text="statement.rating + '/5.0'"/>
          </div>
        </div>
        <div class="px-2 mb-2">
          <p class="text-meta">დისტანციურად</p>
        </div>
        <div class="border-t border-t-meta gap-x-2 flex items-center justify-start px-2 py-2.5">
          <p class="font-medium" v-text="statement.author"/>
          <p class="text-xs" v-text="statement.phoneNumber"/>
        </div>
      </div>
    </div>
  </div>
</template>