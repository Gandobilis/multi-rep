<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>
<template>
    <Header />
    <main class="container mx-auto">
        <slot />
    </main>
    <Footer />
</template>