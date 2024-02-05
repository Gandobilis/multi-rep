<script setup>
import useProfile from "../../composables/useProfile.js";
import {ref} from "vue";
// import {useRouter} from "vue-router";
// როუტერეზე უნდა გადაკეთდეს
// const router = useRouter();

const currentIndex = ref(0);
const {data, links} = useProfile();
</script>

<template>
  <div class="flex gap-x-10">
    <div class="w-1/3 flex flex-col gap-y-10">
      <div class="flex items-start gap-x-5 justify-start border border-[#CACACA] rounded-md p-5">
        <img :src="data.image" alt="user icon">
        <div class="text-xs flex flex-col gap-y-5">
          <p v-text="data.username"/>
          <p class="font-semibold text-[#A4A4A4]" v-text="`ID: ${data.id}`"/>
          <p v-text="`ელ. ფოსტა: ${data.email}`"/>
          <p v-text="`ტელეფონის ნომერი: ${data.phone}`"/>
          <p v-text="`პროფესია: ${data.profession}`"/>
        </div>
      </div>
      <div class="flex flex-col justify-start gap-y-10 px-5 py-10 border border-[#CACACA] rounded-md">
        <RouterLink @click="currentIndex = index" class="flex justify-start items-center gap-x-5" to="/profile"
                    v-for="(link, index) in links"
                    :key="index">
          <img :src="link.icon" alt="nav link icon"/>
          <p :class="{
            'text-[#FF001C]': index === 6,
            'text-primary': currentIndex === index
          }" v-text="link.title"/>
        </RouterLink>
      </div>
    </div>

    <div class="w-2/3 border border-[#CACACA] rounded-md">

    </div>
  </div>
</template>