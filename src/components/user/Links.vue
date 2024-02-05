<script setup>
import useUser from "../../composables/useUser.js";
import {ref} from "vue";
import {useRouter} from "vue-router";
import Logout from "../../assets/icons/user/Logout.vue";

const {links} = useUser();
const router = useRouter();
const currIndex = ref(0);
</script>

<template>
  <div class="flex flex-col justify-start gap-y-10 px-5 py-10 border border-[#CACACA] rounded-md">
    <RouterLink @click="currIndex = index" class="flex justify-start items-center gap-x-5" :to="link.path"
                v-for="(link, index) in links"
                :key="index">
      <component :is="link.icon" :fill="router.currentRoute.value.path === link.path ? '#950E1D' : 'black'"/>
      <p :class="{
            'text-primary': currIndex === index
          }" v-text="link.title"/>
    </RouterLink>
    <RouterLink to="/user" class="flex justify-start items-center gap-x-5">
      <Logout/>
      <p v-text="'გასვლა'" class="text-[#FF001C]"/>
    </RouterLink>
  </div>
</template>