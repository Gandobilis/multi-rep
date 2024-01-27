<script setup>
import {ref} from "vue";

const city = ref('')
const district = ref('')
const profession = ref('')
const cvRef = ref(null);
const photoRef = ref(null);
let cvFile = ref(null);
let photoFile = ref(null);

const manualClick = (inputType) => {
  if (inputType === 'cv') {
    cvRef.value.click();
  } else {
    photoRef.value.click();
  }
};

const handleFileUpload = (inputType, event) => {
  const file = event.target.files[0];
  if (inputType === 'cv') {
    cvFile.value = file;
  } else {
    photoFile.value = file;
  }
};
</script>

<template>
  <form method="post" @submit.prevent class="w-[243px] flex flex-col items-center gap-y-[50px]">
    <h1 class="text-[32px] font-semibold">რეგისტრაცია</h1>
    <div class="relative w-full">
      <input
          v-model="city"
          class="placeholder-black focus:outline-primary border border-black rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="text"/>
      <label class="absolute -top-3.5 left-2.5 px-1 bg-white">ქალაქი</label>
    </div>
    <div class="relative w-full">
      <input
          v-model="district"
          class="placeholder-black focus:outline-primary border border-black rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="text"/>
      <label class="absolute -top-3.5 left-2.5 px-1 bg-white">უბანი</label>
    </div>
    <div class="relative w-full">
      <input
          v-model="profession"
          class="placeholder-black focus:outline-primary border border-black rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="text"/>
      <label class="absolute -top-3.5 left-2.5 px-1 bg-white">პროფესია</label>
    </div>
    <div class="pt-[7px] pb-1.5 px-2.5 flex justify-between items-center w-full border border-black rounded-[5px]">
      <p v-text="cvFile ? cvFile.name : 'c.v'" class="text-nowrap overflow-x-hidden"/>
      <img @click="manualClick('cv')" class="hover:cursor-pointer ml-2.5"
           src="../../../assets/auth/file-upload-icon.svg" alt="file upload icon">
      <input
          ref="cvRef"
          @change="handleFileUpload('cv', $event)"
          class="sr-only"
          type="file">
    </div>
    <div class="pt-[7px] pb-1.5 px-2.5 flex justify-between items-center w-full border border-black rounded-[5px]">
      <p v-text="photoFile ? photoFile.name : 'პროფ. ფოტო'" class="text-nowrap overflow-x-hidden"/>
      <img @click="manualClick('photo')" class="hover:cursor-pointer ml-2.5"
           src="../../../assets/auth/file-upload-icon.svg" alt="file upload icon">
      <input
          ref="photoRef"
          @change="handleFileUpload('photo', $event)"
          class="sr-only"
          type="file">
    </div>
    <router-link to="/auth/registration-step-four"
                 class="mt-2.5 text-center py-[6.5px] rounded-[5px] hover:shadow-2xl text-white bg-primary w-full">
      შემდეგი
    </router-link>
  </form>
</template>