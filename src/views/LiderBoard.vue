<script setup>
import {useLiderBoard} from '../composables/liderBoard'

const { headerItems, userInformation } = useLiderBoard();
</script>
<template>
    <div class="flex flex-col justify-center gap-3 p-10 w-store-colum mx-auto bg-white relative">
        <div class="text-black text-4xl font-normal tracking-wide uppercase relative top-0 left-0">
            ლიდერბორდი
        </div>
        <div class="flex items-center mt-24 ml-32 mb-10">
            <div v-for="item in headerItems" :key="item.text" :style="{ marginRight: item.margin }"
                class="text-red text-2xl font-normal tracking-wide">
                {{ item.text }}
            </div>
        </div>
        <div class="w-store-user h-store-user flex-shrink-0 rounded-2xl border border-gray-300 bg-white flex p-4 relative"
            v-for="index in 5" :key="index">
            <img :src="userInformation[0].path" alt="Profile Image" class="w-16 h-16 mr-12" />
            <div v-for="info in userInformation.slice(1)" :key="info.index" class="text-black">
                <img v-if="info.type === 'image'" :src="info.path" alt="PNG Image" class="w-8 h-8 mr-0 relative mt-4" />
                <template v-else>
                    <div class="text-2xl items-center mr-12 mt-4">
                        {{ info }}
                    </div>
                </template>
            </div>
            <button class="inline-flex justify-center items-center gap-10 text-red px-4 py-2 rounded-md text-2xl" >
                დეტალურად
            </button>
        </div>
    </div>
</template>