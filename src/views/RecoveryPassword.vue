<script setup>
import Side from '../components/SideBar.vue';
import { useInputs } from '../composables/recoveryPassword';

const { inputs } = useInputs([
  {
    placeholder: 'ელ. ფოსტა',
  },
]);
</script>

<template>
    <div class="flex">
        <Side />
        <div class="flex w-1/2 justify-center">
            <div class="flex flex-col justify-center">
                <h2 class="text-4xl font-medium">პაროლის აღდგენა</h2>
                <div class="flex flex-col gap-y-16">
                    <div v-for="item in inputs" :key="item.index" class="flex flex-col mt-20">
                        <input
                            type="text"
                            class="border border-black rounded-md w-60 h-12 placeholder:text-black placeholder:text-lg pl-3"
                            :placeholder="item.placeholder"
                        />
                    </div>
                    <button class="px-20 py-2 bg-store-red text-lg rounded-xl text-white">შემდეგი</button>
                </div>
            </div>
        </div>
    </div>
</template>
