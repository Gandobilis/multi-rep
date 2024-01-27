<template>
  <form method="post" @submit.prevent class="w-[243px]">
    <h1 class="text-[32px] mb-[50px] font-semibold">რეგისტრაცია</h1>
    <div class="relative w-full mb-[50px]">
      <input
          :style="{
            borderColor: error ? 'red' : 'black'
          }"
          v-model="email"
          class="placeholder-black focus:outline-primary border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="email"/>
        <label
            class="absolute -top-3.5 left-2.5 px-1 bg-white">ელ. ფოსტა</label
    </div>
    <div class="relative w-full mb-[50px]">
      <input
          :style="{
            borderColor: error ? 'red' : 'black'
          }"
          v-model="email"
          class="placeholder-black focus:outline-primary border rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="email"/>
      <label
          class="absolute -top-3.5 left-2.5 px-1 bg-white">ელ. ფოსტა</label
    </div>
    <router-link to=""
                 class="text-center text-primary  py-[6.5px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </router-link>
  </form>
</template>
<script setup>
</script>