<script setup>
import useStatement from "@/composables/useStatement";

const { Statementinfo } = useStatement();

</script>

<template>
  <div class="grid grid-cols-2  px-20">
    <div class="">
      <img class="" :src="Statementinfo[0].Statement.img" alt="" />
    </div>
    <div class="">
      <div class="flex gap-16">
        <div>
          <h2 class="text-5xl font-normal text-[#000000]">ჯავას ახალი კურსი</h2>
        </div>
        <div>
          <div class="flex items-center mt-2">
            <svg
              class="w-7 h-6 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <p class="ms-2 text-2xl font-normal text-[#000000] dark:text-white">
              4.9/5.0
            </p>
          </div>
        </div>
      </div>
      <div class=" pt-14">
        <p class="text-xl text-[#000000]">
          მოგესალმებით, მინდა გაცნობოთ, რომ 2024 წლის 25 აპრილს იწყება ჯავა
          პროგრამირების ახალი კურსი, რომელიც არის 6 თვიანი და ღირს თვეში 300
          ლარი, რეგისტრაცია გაგრძელდება 2024 წლის 1 აპრილიდან 20 აპრილამდე.
          იჩქარეთ, ადგილების რაოდენობა შეზღუდულია
        </p>
      </div>
      <div class="pt-9">
        <h3 class="text-[#000000]">დისტანციურად</h3>
      </div>
      <div class="pt-9 flex gap-14">
        <div class="flex gap-3">
          <component :is="Statementinfo[0].Statement.datesvg" />
          <h3 class="text-[#6F6F6F]">დღეს 00:23</h3>
        </div>
        <div class="flex gap-3">
          <component :is="Statementinfo[0].Statement.viewsvg" />
          <h3 class="text-[#6F6F6F]">128</h3>
        </div>
        <div class="flex">
          <h3>
            <span class="text-[#177B15] font-bold">300 ₾</span>/<span
              class="text-[#6F6F6F]"
            >
              თვე</span
            >
          </h3>
        </div>
        <div class="flex gap-3">
          <component :is="Statementinfo[0].Statement.timesvg" />
          <h3 class="text-[#6F6F6F]">6 თვე</h3>
        </div>
      </div>
      <div class="pt-9 flex gap-12">
        <div class="flex gap-2">
          <div>
            <img class="" :src="Statementinfo[0].Statement.img2" alt="" />
          </div>
          <div class="">
            <h3 class="text-[#000000] pb-5">გიორგი გიორგაძე</h3>
            <h4 class="pb-4">ჯავა დეველოპერი</h4>
            <h5>ყველა განცხადება(3)</h5>
          </div>
        </div>
        <div class="mb-16">
            <div class="bg-[#950E1D] flex gap-2 px-20 py-1 rounded	mb-9">
                <component :is="Statementinfo[0].Statement.numbersvg" />
                <h4 class="text-[#FFFFFF] ">551-22-23-33</h4>
            </div>
            <div class="bg-[#950E1D] flex gap-2 px-5 py-1 rounded	mb-9">
                <component :is="Statementinfo[0].Statement.emailsvg" />
                <h4 class="text-[#FFFFFF] ">giorgigiorgadze@gmail.com</h4>
            </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  </div>
</template>
