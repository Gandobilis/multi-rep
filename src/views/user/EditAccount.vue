<script setup>
import useUser from "../../composables/useUser.js";

const {} = useUser();
</script>

<template>
  <form @submit.prevent="">
    <button class="w-full rounded-md bg-primary text-white py-2.5" v-text="'შენახვა'"/>
  </form>
</template>