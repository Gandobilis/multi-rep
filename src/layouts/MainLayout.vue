<script setup>
    import SideBar from '../components/SideBar.vue';
</script>
<template>
    <div class="">
        <SideBar/>
        <main class="">
            <slot />
        </main>
    </div>
</template>