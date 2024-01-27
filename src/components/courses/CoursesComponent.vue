<script setup>
import Cards from './Cards.vue';
import Filter from './filter.vue';



</script>
<template>
   <div class="flex flex-col space-y-24 px-16">
    <div class="flex justify-between mt-14">
      <h1 class="text-5xl">განცხადებები</h1>
      <Filter/>
    </div>
    <Cards/>
  </div>
</template>