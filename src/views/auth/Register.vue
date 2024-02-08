<script setup>
import useRegister from "/src/composables/useRegister";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";

const {
  formFields,
  formData,
  error,
  register,
} = useRegister();
</script>

<template>
  <div class="relative">
    <router-link to="/auth/login" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="register" class="w-[243px] flex flex-col items-center gap-y-[50px]">
      <h1 class="text-[32px] font-semibold">რეგისტრაცია</h1>

      <template v-for="(field, index) in formFields" :key="index">
        <div v-if="index === 5"
             class="hover:border-primary w-full rounded-[5px] gap-y-[18px] flex flex-col items-start border-2 border-black pl-2.5 py-[13px]">

          <div class="flex items-center gap-x-2.5">
            <input v-model="formData[field.model]" checked type="radio" :value="false" name="type"
                   class="checked:accent-primary cursor-pointer">

            <label class="text-sm">მოსწავლე</label>
          </div>

          <div class="flex items-center gap-x-2.5">
            <input v-model="formData[field.model]" type="radio" name="type" :value="true"
                   class="checked:accent-primary cursor-pointer">

            <label class="text-sm">მასწავლებელი</label>
          </div>
        </div>

        <animated-input v-else :placeholder="field.placeholder"
                        v-model="formData[field.model]"
                        :show-password-toggle="field.showToggle"/>
      </template>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-2 -my-10">
        <img src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-sm text-error" v-text="error"/>
      </div>

      <button type="submit"
              class="mt-2.5 text-center py-[6.5px] rounded-[5px] hover:shadow-2xl text-white bg-primary w-full">
        შემდეგი
      </button>
    </form>
  </div>
</template>

