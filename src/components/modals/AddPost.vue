<script setup>
import Dropdown from "@/components/modals/Dropdown.vue"
import {ref} from "vue"

const title = ref('')
const description = ref('')
const price = ref('თვე')
const time = ref('თვე')
const date = ref('თვე')
const isOnline = ref(true)
const city = ref('')

const showDropdowns = ref([false, false, false])

const toggleDropdown = (index) => {
  if (showDropdowns.value[index]) {
    showDropdowns.value[index] = !showDropdowns.value[index]
  } else {
    showDropdowns.value = [false, false, false]
    showDropdowns.value[index] = true
  }
}

const closeDropdown = (index) => {
  showDropdowns.value[index] = false
}
</script>

<template>
  <div
      class="absolute right-0 left-0 z-10 m-auto flex w-1/3 flex-col items-center gap-y-12 px-5 pt-5 pb-10 shadow-2xl">
    <div class="flex w-full justify-between">
      <p class="text-2xl font-semibold">დაამატეთ პოსტი</p>
      <img class="cursor-pointer" src="@/assets/icons/modals/close.svg" alt="close icon"/>
    </div>
    <form
        @submit.prevent
        class="flex w-3/5 flex-col gap-y-8"
    >
      <input
          v-model="title"
          class="rounded-md border-2 border-black font-medium placeholder-black p-2.5"
          placeholder="სათაური"
      />
      <textarea
          v-model="description"
          class="rounded-md border-2 border-black font-medium placeholder-black p-2.5"
          placeholder="აღწერა"
      />
      <Dropdown :show="showDropdowns[0]" @closeDropDown="closeDropdown(0)" @toggleDropdown="toggleDropdown(0)"
                v-model="price" label="ფასი ₾"/>
      <Dropdown :show="showDropdowns[1]" @closeDropDown="closeDropdown(1)" @toggleDropdown="toggleDropdown(1)"
                v-model="time" label="დრო"/>
      <div
          class="flex items-center justify-between"
      >
        <div
            class="flex flex-row-reverse items-center gap-x-2"
        >
          <label
              class="font-medium"
              for="online"
          >
            დისტანციურად
          </label>
          <input
              v-model="isOnline"
              :value="true"
              id="online"
              class="accent-primary"
              name="learning_type"
              type="radio"
          />
        </div>
        <div
            class="flex flex-row-reverse items-center gap-x-2"
        >
          <label
              class="font-medium"
              for="online"
          >
            მისამართით
          </label>
          <input
              v-model="isOnline"
              :value="false"
              id="onsite"
              class="accent-primary"
              name="learning_type"
              type="radio"
          />
        </div>
      </div>
      <input
          v-model="city"
          placeholder="თბილისი"
          class="rounded-md border-2 border-black font-medium placeholder-black p-2.5"
      />
      <Dropdown :show="showDropdowns[2]" @closeDropDown="closeDropdown(2)" @toggleDropdown="toggleDropdown(2)"
                v-model="date" label="ვადა"/>
      <button
          type="submit"
          class="rounded-md py-3 font-medium text-white bg-primary hover:shadow-2xl"
      >
        შემდეგი
      </button>
    </form>
  </div>
</template>