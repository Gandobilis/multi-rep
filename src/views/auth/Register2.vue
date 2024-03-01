<script setup>
import useRegister from "/src/composables/auth/useRegister";
import UploadIcon from "../../assets/icons/auth/uploadIcon.vue";

const {
  step2Models,
  step2Data,
  step2,
  error,
} = useRegister();
const handlePhotoUpload = (event) => {
  step2Data.value.profile_pic = event.target.files[0];
  console.log(step2Data.value)
};

const handleCvUpload = (event) => {
  step2Data.value.cv = event.target.files[0]
  console.log(step2Data.value)
};
</script>

<template>
  <div class="relative">

    <router-link to="/auth/register" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="step2()" class="flex flex-col items-center gap-7">
      <h1 class="mb-5 lg:mb-14 text-lg lg:text-3xl font-semibold">რეგისტრაცია</h1>

      <div class="w-full space-y-4  lg:space-y-10">
        <textarea class="border-2 border-black lg:text-left text-center lg:h-40 h-24 rounded-lg w-full px-3 py-3"
                  v-for="(field, index) in step2Models" :key="index"
                  :placeholder="field.placeholder"
                  v-model="step2Data[field.model]"
        />
      </div>

      <div class="flex flex-col gap-10">
        <div class="flex flex-col lg:text-lg gap-y-4 items-center">
          <div class="">
            <input
                type="file"
                id="photo"
                accept="image/*"
                @change="handlePhotoUpload"
                class="hidden"
            />
            <label
                for="photo"
                class="max-lg:text-xs w-full rounded-[5px] flex items-center cursor-pointer hover:opacity-80 hover:shadow-2xl gap-5 lg:px-4 px-1 lg:rounded-md font-medium text-white transition bg-black py-2 lg:py-3.5 "
            >
              ატვირთე პროფილის ფოტო
              <upload-icon class="w-5 h-5"/>
            </label>

          </div>
        </div>


        <div class="flex flex-col lg:text-lg gap-y-4 items-center">
          <div class="">
            <input
                type="file"
                id="cv"
                accept=".pdf"
                @change="handleCvUpload"
                class="hidden"
            />
            <label
                for="cv"
                class="max-lg:text-xs w-full rounded-[5px] flex gap-5 items-center lg:px-4 px-1 lg:rounded-md font-medium text-white transition bg-black py-2 lg:py-3.5 hover:shadow-2xl hover:opacity-80 cursor-pointer"
            >
              ატვირთე CV, PDF ფორმატში
              <upload-icon class="w-5 h-5"/>

            </label>
          </div>
        </div>
      </div>


      <div v-if="error" class="flex items-center w-full justify-start gap-x-1.5 mt-4 lg:mt-5">
        <img class="max-lg:w-2" src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-xs lg:text-sm text-error" v-text="error"/>
      </div>

      <button
          class="mt-4 lg:mt-10 max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl">
        შემდეგი
      </button>
    </form>
  </div>
</template>