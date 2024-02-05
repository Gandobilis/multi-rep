<script setup>
import useUser from "../../composables/useUser.js";

const {data} = useUser();
</script>

<template>
  <div class="flex items-start gap-x-5 justify-start border border-[#CACACA] rounded-md p-5">
    <component :is="data.image"/>
    <div class="text-xs flex flex-col gap-y-5">
      <p v-text="data.username"/>
      <p class="font-semibold text-[#A4A4A4]" v-text="`ID: ${data.id}`"/>
      <p v-text="`ელ. ფოსტა: ${data.email}`"/>
      <p v-text="`ტელეფონის ნომერი: ${data.phone}`"/>
      <p v-text="`პროფესია: ${data.profession}`"/>
    </div>
  </div>
</template>