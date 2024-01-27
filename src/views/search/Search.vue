<script setup>
import { ref } from 'vue'

const types = ref([
    {
        title: 'განცხადებები ',
        icon: 'src/assets/imgs/განცხადებები (1).png'
    },
    {
        title: 'მასწავლებლები',
        icon: 'src/assets/imgs/იუზერი.png'
    }
])
const isSelected = ref(0)
const changeSelect = (index) => {
    isSelected.value = index

}
const checkInputs = ref([
    {
        label: 'პოპულარული'
    },
    {
        label: 'ფასით'
    },
])
const inputs = ref([
    {
        label: 'ქალაქი'
    },
    {
        label: 'უბანი'
    },
])
</script>

<template>
    <div class="flex flex-col gap-y-9">
        <h1 class="text-6xl font-medium py-20 px-28">ძებნის შედეგები</h1>
        <div class="flex">
            <div class="flex flex-col gap-y-12">
                <div class="flex flex-col border border-[#CACACA] rounded-xl pr-2 mx-28 py-3 gap-y-2">
                    <div :style="{ 'background-color': isSelected === index ? 'gray' : 'white' }"
                        @click="changeSelect(index)" v-for="(item, index) in types" :key="index"
                        class="flex ml-2 pl-3 py-3 my-1 gap-x-6 pr-60 rounded-lg ">
                        <img :src="item.icon" alt="" class="">
                        <span>{{ item.title }}</span>
                    </div>
                </div>
                <div class="flex flex-col border border-[#CACACA] rounded-xl  mx-28 py-3 gap-y-2">
                    <h2 class=" pl-5 pt-2 text-3xl border-b border-[#CACACA] ">დალაგება</h2>
                    <div v-for="(item, index) in checkInputs" :key="index" class="flex items-center mt-4 gap-y-2 gap-x-4 pl-5">
                        <input id="default-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                        <label for="default-checkbox" class="text-sm font-medium text-gray-900 ">{{
                            item.label }}</label>
                    </div>
                    <div class="pl-5 my-4" v-for="(item, index) in inputs" :key="index">
                        <!-- <label for="" class="absolute">ქალაქი </label> -->
                        <input :placeholder="item.label" type="text" class="border  border-black w-52 h-9 pl-5 rounded">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="">
                    <div>
                        
                    </div>
                </div>
            </div>

    </div>
</div></template>