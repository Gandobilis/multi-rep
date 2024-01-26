<script setup>
import courses from '../composables/courses'
import { ref } from "vue";

const { title, price, image, } = courses()


const favourite = ref(false)
const favouriteIcone = () => {
    favourite.value = !favourite.value
}

</script>
<template>
    <div class="flex flex-col space-y-24 px-16">
        <div class="flex justify-between mt-14">
            <h1 class="text-5xl">განცხადებები</h1>
            <div class="flex flex-row space-x-1">
                <p class="mt-3">დალაგება:</p>
                <button>პოპულარული</button>
                <img src="../../icone/choiBox.svg" alt="">
            </div>
        </div>
        <div class="grid grid-cols-3 gap-x-6 gap-y-5">
            <div class="flex flex-col justify-around rounded-xl border border-black " v-for="images in image"
                :key="images.index">
                <div class=" relative">
                    <img class="w-full h-full" :src="images" alt="ჯავას კურსი">
                    <div @click="favouriteIcone">
                        <img class="absolute inset-y-0 right-0 pr-5 pt-5 hover:cursor-pointer"
                            :src="favourite ? 'src/icone/loveOff.svg' : 'src/icone/love.svg'" alt="ფავორიტი">
                    </div>
                </div>
                <div class="space-y-4 ">
                    <div class="flex flex-row space-x-36 mx-2.5 mt-5">
                        <h1 class="font-semibold " v-text="title" />
                        <h1 class="text-meta">დღეს 19:57</h1>
                    </div>
                    <div class="flex flex-row space-x-9 mx-2.5 text-meta">
                        <h1 class="font-bold text-price" v-text="price" />
                        <h1>თვიურად</h1>
                        <div class="flex flex-row space-x-2 text-meta">
                            <div><img src="../../icone/clock.svg" alt=""></div>
                            <h1>6 თვე</h1>
                        </div>
                        <div class="flex flex-row space-x-2.5  ">
                            <div><img src="../../icone/biol.svg" alt=""></div>
                            <p>4.9/5.0</p>
                        </div>
                    </div>
                    <h1 class="mx-2.5 text-meta">დისტანციურად</h1>
                    <div class="flex flex-row justify-between  border-t ">
                        <h1 class="mx-2.5 my-3 text-primary">დეტალურად</h1>
                        <img class="mx-2.5 my-3" src="../../icone/VectorKitxvis.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>