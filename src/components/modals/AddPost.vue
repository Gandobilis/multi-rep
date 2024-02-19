<script setup>
import useAddPost from "/src/composables/useAddPost.js"
import Dropdown from "/src/components/modals/Dropdown.vue"
import AnimatedInput from "/src/components/auth/AnimatedInput.vue"

const emit = defineEmits(['closeModal'])

const {data, dropdowns, options, toggle, close} = useAddPost()
</script>

<template>
  <div
      class="bg-white absolute right-0 left-0 z-10 m-auto flex lg:w-1/3 flex-col items-center gap-y-6 lg:gap-y-12 px-5 pt-5 pb-10 shadow-2xl">
    <div class="flex w-full items-center justify-between">
      <p class="lg:text-2xl font-semibold" v-text="'დაამატეთ პოსტი'"/>
      <img class="cursor-pointer" src="/src/assets/icons/modals/close.svg" alt="close icon"
           @click="emit('closeModal')"/>
    </div>

    <form
        @submit.prevent=""
        class="flex w-3/5 flex-col gap-y-4 lg:gap-y-8">
      <animated-input
          v-model="data.title"
          placeholder="სათაური"/>

      <animated-input
          v-model="data.description"
          placeholder="აღწერა"

      />



      <Dropdown
          :options="options[0]"
          :show="dropdowns[0]"
          @close="close(0)"
          @toggle="toggle(0)"
          v-model:unit="data.price_unit"
          v-model:value="data.price"
          label="ფასი ₾"/>

      <Dropdown
          :options="options[1]"
          :show="dropdowns[1]" @close="close(1)"
          @toggle="toggle(1)"
          v-model:unit="data.time_unit"
          v-model:value="data.time"
          label="დრო"/>

      <div
          class="flex items-center justify-between">
        <div
            class="flex flex-row-reverse items-center gap-x-2">
          <label
              class="max-lg:text-xs font-medium"
              for="online">
            დისტანციურად
          </label>
          <input
              v-model="data.is_online"
              :value="true"
              id="online"
              class="max-lg:w-3 accent-primary"
              name="learning_type"
              type="radio"/>
        </div>

        <div
            class="flex flex-row-reverse items-center gap-x-2">
          <label
              class="max-lg:text-xs font-medium"
              for="online">
            მისამართით
          </label>
          <input
              v-model="data.is_online"
              :value="false"
              id="onsite"
              class="max-lg:w-3 accent-primary"
              name="learning_type"
              type="radio"/>
        </div>
      </div>

      <animated-input
          v-show="!data.is_online"
          v-model="data.city"
          placeholder="ქალაქი"/>

      <Dropdown
          :options="options[2]"
          :show="dropdowns[2]"
          @close="close(2)"
          @toggle="toggle(2)"
          v-model:unit="data.date_unit"
          v-model:value="data.date"
          label="პოსტის ვადა"/>

      <button
          type="submit"
          class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl"
          v-text="'შემდეგი'"/>

    </form>
  </div>
</template>