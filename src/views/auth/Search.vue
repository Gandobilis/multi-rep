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
</script>

<template>
    <div class="gap-y-72">
        <h1 class="text-6xl font-medium py-20 px-28">ძებნის შედეგები</h1>
        <div class="flex">
            <div>
                <div class="flex flex-col border border-black rounded-lg pr-2 mx-28 gap-y-6">
                    <div v-for="(item, index) in types" :key="index" class="flex ml-6  focus:bg-[#CACACA] py-2 pr-72 rounded ">
                        <img :src="item.icon" alt="">
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
            <div></div>

        </div>
    </div>
</template>