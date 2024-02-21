<script setup>
import useUser from "../../composables/useUser.js";
import {useRouter} from "vue-router";
import Logout from "../../assets/icons/user/Logout.vue";
import {onMounted, ref} from "vue";
import useLogout from "../../composables/auth/useLogout.js";

const is_teacher = ref(true) // შეცვალეთ რენდერინგის სანახავად

const {links} = useUser();
const router = useRouter();

onMounted(() => {
  if (!is_teacher.value) {
    links.value = links.value.filter((_, index) => index !== 2 && index !== 3);
  }
})

const {logOut} = useLogout()
</script>

<template>
  <div class="max-lg:text-sm w-full flex flex-col justify-start gap-y-4 lg:gap-y-10 px-3 lg:px-5 py-4 lg:py-10 border border-[#CACACA] rounded-md">
    <RouterLink class="flex justify-start items-center gap-x-3 lg:gap-x-5" :to="link.path"
                v-for="(link, index) in links"
                :key="index">
      <component class="w-5" :is="link.icon" :fill="router.currentRoute.value.path === link.path ? '#950E1D' : 'black'"/>
      <p :class="{
            'text-primary': router.currentRoute.value.path === link.path
          }" v-text="link.title"/>
    </RouterLink>
    <RouterLink to="/user" class="flex justify-start items-center gap-x-2 lg:gap-x-5">
      <Logout class="w-5"/>
      <button @click="logOut" v-text="'გასვლა'" class="text-[#FF001C]"/>
    </RouterLink>
  </div>
</template>