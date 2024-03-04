<script setup>
import useUser from "../../composables/useUser.js";
import useListings from "../../composables/useListings.js";
import {onMounted, ref} from "vue";
import forWarnings from "../../composables/forWarnings.js";
import Warning from "../../components/modals/warning.vue";
const selectedListingId = ref(null)
const {
  isAuthenticated,
  checkIfAuthenticated
} = useUser();
const {toggle} = forWarnings()

const {
  getMyListings,
    myListings,
  deleteListing,
} = useListings();


const handleCloseIconClick = () => {
  if (selectedListingId !== null) {
    deleteListing(selectedListingId.value)
    toggle(false)

  }
};
onMounted(async () => {
  await checkIfAuthenticated()
  await getMyListings()
})
</script>

<template>
  <div v-if="isAuthenticated">
    <p class="border-b px-5 py-3 lg:py-6 lg:text-2xl font-semibold border-b-border-gray" v-text="'ჩემი განცხადებები'"/>


    <div class="flex  flex-col gap-y-7 lg:gap-y-11 px-5 py-5 lg:py-10">
      <warning :method=handleCloseIconClick text="ნამდვილად გსურთ ამ განცხადების წაშლა?"/>

      <div class="flex items-center relative border-b-primary border-b-2 pb-5 lg:w-[500px] gap-x-5" v-for="(listing, index) in myListings" :key="index">

        <div class="absolute right-0 flex items-center gap-2 top-0">
          <p class="text-xs text-gray-400">ID: {{listing.id}}</p>
          <img @click="() => { selectedListingId = listing.id; toggle(true); }" class="w-2 cursor-pointer h-2" src="../../assets/icons/modals/close.svg" alt="">
        </div>

        <img class="w-16 h-16 object-cover rounded-full" :src="listing._photo" alt="listing image">

        <div class="flex w-full flex-col gap-y-3">
          <p class="lg:text-2xl font-medium" v-text="listing.title"/>

          <div class="flex max-lg:flex-wrap items-center justify-between">
            <div class="flex items-center gap-x-2">
              <img class="max-lg:w-5" src="/src/assets/icons/user/rating.svg" alt="rating icon">

              <p class="max-lg:text-sm"><span v-text="listing._score"/>/5.00</p>
            </div>

            <p class="max-lg:text-sm font-semibold text-price">{{listing.price}} {{listing.currency}}</p>

            <p class="max-lg:text-xs text-meta" v-text="listing.time_unit"/>

            <p class="max-lg:text-xs text-meta" v-text="listing.publish_date"/>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>