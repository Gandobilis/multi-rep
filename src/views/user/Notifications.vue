<script setup>
import useUser from "../../composables/useUser.js";
import {computed, ref} from "vue";

const notifications = ref([
  {
    type: 'general'
  },
  {
    type: 'history'
  }
]);

const notificationFilters = ref([
  '', 'ყველა', 'ზოგადი', 'გადახდების ისტორია', ''
]);

let notificationFilterType = ref('ყველა');

const filteredNotifications = computed(() => {
  if (notificationFilterType.value === 'ზოგადი') {
    return notifications.value.filter(item => item.type === 'general');
  } else if (notificationFilterType.value === 'გადახდების ისტორია') {
    return notifications.value.filter(item => item.type === 'history');
  } else {
    return notifications.value;
  }
});

const filterListings = (type) => {
  notificationFilterType.value = type;
}
</script>

<template>
  <p class="border-b px-5 py-6 text-2xl font-semibold border-b-border-gray" v-text="'ჩემი განცხადებები'"/>

  <div class="flex flex-col gap-y-11 px-5 py-10">
    <div class="flex w-full justify-between">
      <p :class="{'text-primary': notificationFilterType === filter}"
         class="font-medium cursor-pointer"
         @click="filterListings(filter)"
         v-for="(filter, index) in notificationFilters" :key="index" v-text="filter"/>
    </div>
  </div>

  <div/>
</template>