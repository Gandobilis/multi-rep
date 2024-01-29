<script setup>
import {ref, onMounted} from 'vue';

const heads = ref('სათაური')
onMounted(() => {
  heads.value.focus()
});
</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <form class="w-[877px] h-[730px] rounded-[10px] border border-stone-300">
      <h1 class=" absolute text-5xl  mt-[30px] ml-[40px] uppercase">პოსტის დამატება</h1>
      <div class="relative">
        <img
            src="/src/logo/Vector.svg"
            class="absolute mt-[49px] right-[40px]   px-2 bg-white rounded-[5px]"
            alt="add icon"
        />
      </div>
      <div class="w-[876.02px] mt-[110px]  border border-report1 "></div>
      <div class="flex flex-col justify-center  items-center">
        <input ref="heads" class="mt-[30px] w-[300px] h-[35px]  rounded-[5px] border border-black input-field"
               placeholder="სათაური"/>
        <input ref="abouts" class="w-[300px] h-[150px] mt-[30px] rounded-[5px] border border-black"
               placeholder="აღწერა"/>
        <div class="mt-[30px] w-[300px] h-[70px] rounded-[5px] border border-black">
          <div class="flex items-center mb-4">
            <input type="radio" value="" name="default-radio" class="ml-[10px] mt-[13px] w-2.5 h-2.5 text-blue-600">
            <label for="default-radio-1" class="text-black ml-[10px] text-xs mt-[13px] ">ზოგადი</label>
          </div>
          <div class="flex items-center">
            <input type="radio" value="" name="default-radio" class="  ml-[10px] mb-[13px] w-2.5 h-2.5 text-blue-600  ">
            <label for="default-radio-2" class="mb-[13px] ml-[10px] text-black text-xs ">კურსი</label>
          </div>
        </div>
        <div class="flex flex-cols">
          <p class="w-[190px] h-[35px] rounded-[5px] border border-black">ხანგრძლივობა</p>
          <p class="w-[90px]  h-[35px]  rounded-[5px] border border-black">xzcsc</p>
        </div>
      </div>
    </form>
  </div>
</template>
