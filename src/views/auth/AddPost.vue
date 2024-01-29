<script setup></script>
<template>
  <div class="flex items-center justify-center h-screen">
    <form class="w-[877px] h-[730px] rounded-[10px] border border-stone-300">
      <h1 class="absolute text-5xl mt-[30px] ml-[30px] uppercase">
        პოსტის დამატება
      </h1>
      <div class="relative">
        <img
          src="/src/logo/Vector.svg"
          class="absolute mt-[49px] right-[30px]  bg-white rounded-[5px]"
          alt="add icon"
        />
      </div>
      <div class="w-[876.02px] mt-[100px] border border-report1"></div>
      <div class="flex flex-col justify-center items-center">
      <div></div>
        <input
          class="mt-[30px] w-[300px] h-[35px] placeholder-black rounded-[5px] border border-black input-field"
          placeholder="სათაური "
        />
        <input
          class="w-[300px] placeholder-black h-[150px] break-all mt-[30px] rounded-[5px] border border-black"
          placeholder="აღწერა"
        />
        <div
          class="mt-[30px] w-[300px] h-[70px] rounded-[5px] border border-black"
        >
          <div class="flex items-center mb-4">
            <input
              type="radio"
              value=""
              name="default-radio"
              class="ring-offset-green-400 ml-[10px] mt-[13px] w-2.5 h-2.5 "
            />
            <label
              for="default-radio-1"
              class="text-black ml-[10px] text-xs mt-[13px]"
              >ზოგადი</label
            >
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              
              class="ml-[10px] mb-[13px] w-2.5 h-2.5"
            />
            <label
              
              class=" mb-[13px] ml-[10px] text-black text-xs"
              >კურსი</label
            >
          </div>
        </div>
        <div class="flex mt-[30px]">
          <div class="w-[196px] h-[35px] rounded-[5px] border border-black">
            <p class="ml-[10px] mt-[7px] mb-[6px]">ხანგრძლივობა</p>
          </div>
          <div class="relative">
            <div
              class="flex items-center w-[99px] h-[35px] ml-[5px] rounded-[5px] border border-black"
            >
              <p class=" ml-[10px] mt-[7px] mb-[6px]">თვე</p>
    
    
    <img src="/src/logo/dropdownarrow.svg" class="ml-[34px] " />
            </div>
          </div>
        </div>
        <div class="flex mt-[30px]">
          <div class="w-[150px] h-[35px] rounded-[5px] border border-black">
            <p class="ml-[10px] mt-[7px] mb-[6px]">ფასი</p>
          </div>
          <div class="relative">
            <div
              class="flex items-center w-[145px] h-[35px] ml-[5px] rounded-[5px] border border-black">
              <p class=" ml-[10px] mt-[7px] mb-[6px]">თვიურად</p>
    
    <img src="/src/logo/dropdownarrow.svg" class="ml-[34px] " />
            </div>
          </div>
        </div>


        <div
          class="mt-[30px] w-[300px] h-[70px] rounded-[5px] border border-black"
        >
          <div class="flex items-center mb-4">
            <input
              type="radio"
              value=""
              name="default-radio"
              class="ml-[10px] mt-[13px] w-2.5 h-2."
            />
            <label
              for="default-radio-1"
              class="text-black ml-[10px] text-xs mt-[13px]"
              >მისამართი</label
            >
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              value=""
              name="default-radio"
              class="ml-[10px] mb-[13px] w-2.5 h-2.5 "
            />
            <label
              for="default-radio-2"
              class="mb-[13px] ml-[10px] text-black text-xs"
              >დისტანციურად</label
            >
          </div>
        </div>
        <div class="w-[300px] h-[35px] px-[64.50px] py-[6.50px] bg-rose-300 rounded-[5px] justify-center items-center gap-2.5 inline-flex"></div>
      </div>
    </form>
  </div>
</template>
