<script setup>
import useNotifications from "../../composables/useNotifications.js"

const {notificationFilters, general, history, notificationFilterType, filterListings} = useNotifications()
</script>

<template>
  <p class="border-b px-5 py-3 lg:py-6 lg:text-2xl font-semibold border-b-border-gray" v-text="'შეტყობინებები'"/>

  <div class="max-lg:pb-4">
    <div class="flex flex-col gap-y-11 px-5 py-4 lg:py-10">
      <div class="max-lg:text-sm flex w-full justify-between">
        <p :class="{'text-primary': notificationFilterType === filter}"
           class="cursor-pointer font-medium"
           @click="filterListings(filter)"
           v-for="(filter, index) in notificationFilters" :key="index" v-text="filter"/>
      </div>
    </div>

    <div v-if="notificationFilterType === 'ზოგადი' || notificationFilterType === 'ყველა'"
         class="mx-4 lg:mx-10 flex flex-col items-center gap-y-6 lg:gap-y-12 rounded-md border pt-2.5 lg:pt-5 pb-6 lg:pb-12 border-border-gray">
      <p class="lg:text-2xl font-semibold" v-text="'რეაქცია პოსტზე'"/>

      <div class="flex flex-col gap-y-4 lg:gap-y-5">
        <p class="max-lg:text-sm" v-for="(note, index) in general" :key="index">
          {{ note.username + (note.reaction_type === 'like' ? ' მოიწონა' : ' შეაფასა') }} თქვენი
          <router-link to="/user/notifications" class="text-primary">პოსტი</router-link>
        </p>
      </div>
    </div>

    <div v-if="notificationFilterType === 'გადახდების ისტორია' || notificationFilterType === 'ყველა'"
         class="mx-4 lg:mx-10 flex flex-col items-center gap-y-6 lg:gap-y-12 rounded-md border pt-2.5 lg:pt-5 pb-6 lg:pb-12 border-border-gray"
         :class="{'mt-12': notificationFilterType === 'ყველა'}">
      <p class="lg:text-2xl text-center font-semibold" v-text="'შეტყობინება ვადის გასვლის თაობაზე'"/>

      <div class="flex flex-col gap-y-4 lg:gap-y-5 items-start">
        <p v-for="(note, index) in history" :key="index" class="text-center max-lg:text-sm"
        >თქვენ პოსტს "{{ note.title }}" ვადა გასდის {{ note.expiration_date }}ში
          <router-link to="/user/notifications" class="text-primary"> გახანგრძლივება</router-link>
        </p>
      </div>
    </div>
  </div>
  <div/>
</template>