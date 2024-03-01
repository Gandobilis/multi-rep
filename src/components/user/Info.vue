<script setup>
import useUser from "../../composables/useUser.js";
import {onMounted} from "vue";

const {getUserProfileInfo, myUserData} = useUser();
onMounted(async () => {
  await getUserProfileInfo()
})
</script>

<template>
  <div v-if="myUserData" class="flex items-start gap-x-5 justify-start border border-[#CACACA] rounded-md p-5">
    <img class="w-20 h-20 object-cover rounded-full" :src="myUserData.profile_pic" alt="">

    <div class="text-xs flex flex-col gap-y-5">
      <p v-text="myUserData.first_name"/>
      <p class="font-semibold text-[#A4A4A4]" v-text="`ID: ${myUserData.id}`"/>
      <p v-text="`ელ. ფოსტა: ${myUserData.email}`"/>
      <p v-text="`ტელეფონის ნომერი: ${myUserData.phone}`"/>
      <div class="flex ">
        <p>ვერიფიკაციის სტატუსი: <span v-if="myUserData.is_email_confirmed===true">ვერიფიცირებული</span>  <span class="text-primary cursor-pointer hover:opacity-70" v-else-if="myUserData.is_email_confirmed===false">გაიარეთ ვერიფიკაცია!</span></p>

      </div>
    </div>
  </div>
</template>