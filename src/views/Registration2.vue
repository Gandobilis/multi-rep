<script setup>
import Side from '../components/SideBar.vue';
import { useRegistration2 } from '../composables/registration2';

const { inputs } = useRegistration2();
</script>

<template>
    <div>
        <div class="flex">
            <Side />
            <div class="flex w-1/2 justify-center">
                <div class="flex flex-col justify-center">
                    <div class="flex flex-col items-center gap-y-20">
                        <h2 class="text-4xl font-medium">რეგისტრაცია</h2>
                        <div class="flex flex-col gap-y-12">
                            <div v-for="item in inputs" :key="item.index" class="flex flex-col">
                                <input
                                    type="text"
                                    class="border border-black rounded-md w-60 h-12 placeholder:text-black placeholder:text-lg pl-3"
                                    :placeholder="item.placeholder"
                                />
                            </div>
                            <div class="relative">
                                <button class="absolute -translate-x-8 translate-y-4"></button>
                            </div>

                            <div>
                                <button class="px-20 py-2 bg-store-red text-lg rounded-xl text-white "> შემდეგი </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
