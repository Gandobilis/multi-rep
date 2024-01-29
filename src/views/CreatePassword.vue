<script setup>
import Side from '../components/SideBar.vue';
import { useInput } from '../composables/newPassword';

const { inputs, handleInput, inputStyles, labelStyles } = useInput([
  {
    label: 'პაროლი'
  },
  {
    label: 'გაიმეორეთ პაროლი'
  },
]);

</script>

<template>
    <div>
        <div class="flex">
            <Side />
            <div class=" flex w-1/2 justify-center  ">
                <div class="flex flex-col justify-center   ">
                    <div class="flex flex-col items-center gap-y-20 ">
                        <h2 class="text-4xl font-medium"> რეგისტრაცია </h2>
                        <div class=" flex flex-col gap-y-8">
                            <div v-for="item in inputs" :key="item.index" class="flex flex-col ">
                                <div class="relative ">
                                    <input type="text" id="outlined"
                                        class="border border-black rounded-md w-60 h-12  bg-transparent focus:border-red-900 pl-4 " />
                                    <label for="outlined"
                                        class="absolute text-sm text-gray-900  transform -translate-y-4 scale-75 top-0.5 z-10 origin-[0] bg-white text-xl px-2 start-1">{{
                                            item.label }}</label>
                                </div>
                            </div>
                            <div>
                                <button class="px-16 mt-6 py-2 bg-store-red text-lg rounded-xl text-white ">რეგისტრაცია</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>