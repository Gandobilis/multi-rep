<script setup>
import { ref } from "vue"
const show = ref(false)

</script>
<template>
    <div>
        <div>
            <!-- filter  button -->
            <div class="flex flex-row space-x-1">
                <p class="">დალაგება:</p>
                <div class="flex flex-row space-x-1" @click="show = !show">
                    <button>პოპულარული</button>
                    <img class="hover:cursor-pointer" src="../../icone/choiBox.svg" alt="">
                </div>
            </div>
            <!-- filter menu -->
            <ul v-show="show"
                class=" absolute  right-0 py-2 mr-12  mt-2 bg-indigo-500 rounded-md border-[#CACACA] shadow-xl w-60 ">
                <li class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100 hover:cursor-pointer">
                    პოპულარული
                </li>
                <li class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100 hover:cursor-pointer">
                    ახლანდელი
                </li>
                <li class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100 hover:cursor-pointer">
                    პროგრამირება
                </li>
                <li class=" block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100 hover:cursor-pointer">
                    ზოგადი
                </li>
            </ul>
        </div>
    </div>
</template>
 