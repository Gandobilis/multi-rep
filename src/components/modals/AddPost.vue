<script setup>
import Dropdown from "@/components/modals/Dropdown.vue"
import {ref} from "vue"
import AnimatedInput from "@/components/layouts/auth/AnimatedInput.vue";

const title = ref('')
const description = ref('')
const priceUnit = ref('თვე')
const price = ref('')
const timeUnit = ref('თვე')
const time = ref('')
const dateUnit = ref('თვე')
const date = ref('')
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

const handleAddPost = () => {
  console.log('Title:', title.value)
  console.log('Description:', description.value)
  console.log('Price Unit:', priceUnit.value)
  console.log('Price:', price.value)
  console.log('Time Unit:', timeUnit.value)
  console.log('Time:', time.value)
  console.log('Date Unit:', dateUnit.value)
  console.log('Date:', date.value)
  console.log('Is Online:', isOnline.value)
  console.log('City:', city.value)
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
        @submit.prevent="handleAddPost"
        class="flex w-3/5 flex-col gap-y-8"
    >
      <animated-input
          v-model="title"
          placeholder="სათაური"
      />
      <animated-input
          v-model="description"
          placeholder="აღწერა"
      />
      <Dropdown :options="['თვე', 'ერთჯერადი']" :show="showDropdowns[0]" @closeDropDown="closeDropdown(0)"
                @toggleDropdown="toggleDropdown(0)"
                v-model:unit="priceUnit" v-model:value="price" label="ფასი ₾"/>
      <Dropdown :options="['დღე', 'კვირა', 'თვე', 'წელი']" :show="showDropdowns[1]" @closeDropDown="closeDropdown(1)"
                @toggleDropdown="toggleDropdown(1)"
                v-model:unit="timeUnit" v-model:value="time" label="დრო"/>
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
      <animated-input
          v-show="!isOnline"
          v-model="city"
          placeholder="ქალაქი"
      />
      <Dropdown :options="['დღე', 'კვირა', 'თვე', 'წელი']" :show="showDropdowns[2]" @closeDropDown="closeDropdown(2)"
                @toggleDropdown="toggleDropdown(2)"
                v-model:unit="dateUnit" v-model:value="date" label="პოსტის ვადა"/>
      <button
          type="submit"
          class="rounded-md py-3 font-medium text-white bg-primary hover:shadow-2xl"
      >
        შემდეგი
      </button>
    </form>
  </div>
</template>