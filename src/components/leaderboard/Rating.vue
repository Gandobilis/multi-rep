<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  rating: {
    type: Object,
    required: true,
  },
})

const price = ref(props.rating.price)
const currency = ref(props.rating.currency === '$')

watch(currency, () => {
  if (currency.value) {
    price.value = Math.floor(price.value * 2.65)
  } else {
    price.value = Math.floor(price.value * 0.38)
  }
})
</script>

<template>
  <div
      class="grid grid-cols-3 grid-rows-3 items-center rounded-lg border px-4 pt-3 text-sm font-medium shadow-xl lg:grid-cols-7 lg:grid-rows-1 lg:py-6 lg:text-xl">
    <div class="avatar">
      <div class="w-16 rounded-full lg:max-2xl:w-20 lg:max-2xl:rounded-xl 2xl:w-32 2xl:rounded">
        <img :src="rating._photo" alt="rating image">
      </div>
    </div>

    <button
        class="active:no-animation w-fit cursor-auto btn btn-xs btn-ghost hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg !px-0"
        v-text="rating._teacher"/>

    <button
        class="active:no-animation w-fit cursor-auto btn btn-xs btn-ghost hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg !px-0"
        v-text="rating._subject"/>

    <button
        class="active:no-animation w-fit cursor-auto btn btn-xs btn-ghost hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg !px-0"
        v-text="rating._phone"/>

    <div class=" rating rating-xs rating-half lg:max-2xl:rating-sm 2xl:rating-md">
      <input disabled type="radio" v-for="index in 10" :key="index" class="cursor-auto bg-orange-400 mask mask-star-2"
             :class="index % 2 === 1 ? 'mask-half-1' : 'mask-half-2'"
             :checked="index === Math.floor(rating._score * 2)"/>
    </div>

    <div class="flex items-center gap-x-1">
      <button
          class="active:no-animation w-fit cursor-auto btn btn-xs btn-ghost hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg !px-0"
          v-text="price"/>
      <label class="swap">

        <input type="checkbox" v-model="currency"/>

        <span
            class="swap-off w-fit btn btn-xs btn-ghost hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg !px-0">GEL</span>
        <span
            class="swap-on w-fit btn btn-xs btn-ghost hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg !px-0">USD</span>
      </label>
    </div>

    <router-link :to="`/listings/${rating.id}`" class="text-primary btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
      დეტალურად
    </router-link>
  </div>
</template>