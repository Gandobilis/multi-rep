<script setup>
import { ref } from "vue"
const show = ref(false)

</script>
<template>
    <div>
        <div>
            <!-- Dropdown  button -->
            <div class="flex flex-row space-x-1">
                <p class="">დალაგება:</p>
                <div class="flex flex-row space-x-1" @click="show = !show">
                    <button>პოპულარული</button>
                    <img class="hover:cursor-pointer" src="../../icone/choiBox.svg" alt="">
                </div>
            </div>
            <!-- Dropdown menu -->
            <div v-show="show" class=" absolute  right-0 py-2  mt-2 bg-indigo-500 rounded-md shadow-xl w-44 ">
                <router-link to="/"
                    class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100">
                    პოპულარული
                </router-link>
                <router-link to="/"
                    class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100">
                    ახლანდელი
                </router-link>
                <router-link to="/"
                    class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100">
                    პროგრამირება
                </router-link>
                <router-link to="/"
                    class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100">
                    ზოგადი
                </router-link>
            </div>
        </div>
    </div>
</template>
 