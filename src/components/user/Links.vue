<script setup>
import useUser from "../../composables/useUser.js";
import {ref} from "vue";

const {links} = useUser();
const currIndex = ref(0);
</script>

<template>
  <div class="flex flex-col justify-start gap-y-10 px-5 py-10 border border-[#CACACA] rounded-md">
    <RouterLink @click="currIndex = index" class="flex justify-start items-center gap-x-5" to="/profile"
                v-for="(link, index) in links"
                :key="index">
      <img :src="link.icon" alt="nav link icon"/>
      <p :class="{
            'text-[#FF001C]': index === 6,
            'text-primary': currIndex === index
          }" v-text="link.title"/>
    </RouterLink>
  </div>
</template>