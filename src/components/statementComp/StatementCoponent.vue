<script setup>
import useStatement from "../../composables/useStatement";
import { onMounted } from "vue";
import rating from "./rating.vue";

const { Statementinfo } = useStatement();

import { Rating, initTE } from "tw-elements";

onMounted(() => {
  // Initialize TW Elements
  initTE({ Rating });
});
</script>

<template>
  <div class="2xl:grid 2xl:grid-cols-2 grid grid-cols-1 px-20 justify-between">
    <div class="">
      <img class="" :src="Statementinfo[0].Statement.img" alt="" />
    </div>
    <div class="">
      <div class="flex gap-16">
        <div>
          <h2 class="text-5xl font-normal">{{Statementinfo[0].Statement.title}}</h2>
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
            <p class="ms-2 text-2xl">{{Statementinfo[0].Statement.star}}/5.0</p>
          </div>
        </div>
      </div>
      <div class="pt-14 ">
        <p class="text-xl text-[#000000]">
          {{Statementinfo[0].Statement.description}}
        </p>
      </div>
      <div class="pt-9">
        <h3 class="">{{Statementinfo[0].Statement.title2}}</h3>
      </div>
      <div class="pt-9 flex gap-20">
        <div class="flex gap-3">
          <component :is="Statementinfo[0].Statement.datesvg" />
          <h3 class="text-[#6F6F6F]">{{Statementinfo[0].Statement.time}}</h3>
        </div>
        <div class="flex gap-3">
          <component :is="Statementinfo[0].Statement.viewsvg" />
          <h3 class="text-[#6F6F6F]">{{Statementinfo[0].Statement.views}}</h3>
        </div>
        <div class="flex">
          <h3>
            <span class="text-[#177B15] font-bold">{{Statementinfo[0].Statement.money}} ₾</span>/<span
              class="text-[#6F6F6F]"
            >
            {{Statementinfo[0].Statement.time2}}</span
            >
          </h3>
        </div>
        <div class="flex gap-3">
          <component :is="Statementinfo[0].Statement.timesvg" />
          <h3 class="text-[#6F6F6F]">{{Statementinfo[0].Statement.time3}}</h3>
        </div>
      </div>
      <div class="pt-9 flex gap-12 justify-between">
        <div class="flex gap-2">
          <div>
            <img class="" :src="Statementinfo[0].Statement.img2" alt="" />
          </div>
          <div class="">
            <h3 class="pb-5">{{Statementinfo[0].Statement.name}}</h3>
            <h4 class="pb-4">{{Statementinfo[0].Statement.status}}</h4>
            <router-link to="/">
            <h5 class="text-[#1F6C97]">{{Statementinfo[0].Statement.gancxadeba}}</h5>
          </router-link>
          </div>
        </div>
        <div class="mb-12">
          <div class="bg-[#950E1D] flex gap-2 px-20 py-1 rounded mb-9">
            <component :is="Statementinfo[0].Statement.numbersvg" />
            <h4 class="text-white">{{Statementinfo[0].Statement.number}}</h4>
          </div>
          <div class="bg-[#950E1D] flex gap-2 px-5 py-1 rounded mb-9">
            <component :is="Statementinfo[0].Statement.emailsvg" />
            <h4 class="text-white">{{Statementinfo[0].Statement.mail}}</h4>
          </div>
        </div>
      </div>
      <div class="flex gap-12 justify-between">
        <div>
          <rating />
        </div>
        <div class="mt-6">
          <component :is="Statementinfo[0].Statement.vectorsvg" />
        </div>
      </div>
    </div>
  </div>
</template>
