<script setup>
import mainLogo from '../assests/icons/auth/main-logo.vue'
import heart from '../assests/icons/auth/heart.vue'
import search from '../assests/icons/auth/search.vue'
import man from '../assests/icons/auth/man.vue'
</script>
<template>
    <div class="flex pt-10 pl-20">
        <div class="flex items-center">
            <mainLogo class="mr-4" />
            <h1 class="text-primary text-2xl font-medium tracking-wide">E-LEARNING</h1>
        </div>
        <div class="flex  pl-[450px]">
            <p class="mr-10 text-xl">მთავარი</p>
            <p class="mr-20 text-xl">ლიდერბორდი</p>
            <heart />
            <man class="mx-20" />
            <search />
        </div>
    </div>
</template>