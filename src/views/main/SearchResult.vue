<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";

const route = useRoute();
const keyword = ref();

const listings = ref(Array(5).fill({
  image: '/src/assets/images/listing.svg',
  title: 'ჯავას ახალი კურსი',
  rating: 4.9,
  price: 300,
  time_unit: 'თვიურად',
  publish_date: '7 იან. 16:31',
  author: 'გიორგი გიორგაძე',
  phone: '(+995) 599-111-222',
}));

const typeIndex = ref(0);
const types = ref([
  {
    title: 'განცხადებები ',
    icon: '/src/assets/images/listings.svg',
    notification: 8
  },
  {
    title: 'მასწავლებლები',
    icon: '/src/assets/images/users.svg',
    notification: 0
  },
]);
const changeSelect = (index) => {
  typeIndex.value = index;
};

const checkInputs = ref([
  'ფასით', 'პოპულარობით', 'მისამართით', 'დისტანციურად',
]);

const cities = ref([
  "აბაშა",
  "ადიგენი",
  "ახალგორი",
  "ახალქალაქი",
  "ახალციხე",
  "ახმეტა",
  "ამბროლაური",
  "ასპინძა",
  "ბაღდათი",
  "ბოლნისი",
  "ბორჯომი",
  "ჩხოროწყუ",
  "ჩოხატაური",
  "დედოფლისწყარო",
  "დმანისი",
  "დუშეთი",
  "გაგრა",
  "გალი",
  "გარდაბანი",
  "გორი",
  "გურჯაანი",
  "ჯვარი",
  "ქარელი",
  "კასპი",
  "ყაზბეგი",
  "ქედა",
  "ხელვაჩაური",
  "ხობი",
  "ხონი",
  "ქობულეთი",
  "ყვარელი",
  "ლაგოდეხი",
  "ლანჩხუთი",
  "ლენტეხი",
  "მარნეული",
  "მარტვილი",
  "მესტია",
  "მცხეთა",
  "ნინოწმინდა",
  "ოზურგეთი",
  "ონი",
  "ოჩამჩირე",
  "პანკისი",
  "ფოთი",
  "ყაზბეგი",
  "რუსთავი",
  "საჩხერე",
  "საგარეჯო",
  "სამტრედია",
  "სენაკი",
  "შუახევი",
  "სიღნაღი",
  "სოხუმი",
  "თბილისი",
  "თეთრიწყარო",
  "ტყიბული",
  "წალენჯიხა",
  "წალკა",
  "წყალტუბო",
  "წყალტუბო",
  "თუშეთი",
  "ურეკი",
  "ვანი",
  "ზესტაფონი",
  "ზუგდიდი",
]);

const cityInput = ref('');
const chosenCity = ref('');
const cityNotFound = ref(false);
const chooseCity = (city) => {
  chosenCity.value = city;
  cityInput.value = city;
  cityNotFound.value = true;
};

onMounted(() => {
  keyword.value = route.params.keyword;
});
</script>

<template>
  <div class="flex flex-col gap-y-16">
    <p class="text-5xl font-semibold">ძებნის შედეგები</p>

    <div class="grid grid-cols-3 gap-x-10">
      <div class="flex flex-col gap-y-10">
        <div class="flex relative flex-col border border-[#CACACA] rounded-xl pr-2 py-3 gap-y-2">
          <div :style="{ 'background-color': typeIndex === index ? '#E7E7E7' : 'white' }"
               @click="changeSelect(index)" v-for="(item, index) in types" :key="index"
               class="cursor-pointer my-1 ml-2 flex gap-x-6 rounded-xl py-3 pr-60 pl-3">
                        <span :style="{ 'display': typeIndex === index ? 'block' : 'none' }"
                              class=" absolute -left-1 font-medium text-[#950E1D] text-3xl -mt-3">|</span>

            <img :src="item.icon" alt="filter icon">

            <span v-text="item.title"/>

            <div class="absolute -left-12 flex w-full justify-end">
              <span class="bg-[#B3B3B3] w-6 h-6 pl-2 rounded-full" v-text="item.notification"/>
            </div>
          </div>
        </div>
        <div v-if="listings.length > 0" class="flex flex-col border border-[#CACACA] rounded-xl py-3 gap-y-2">
          <h2 class=" pl-5 pb-2 pt-2 text-3xl border-b border-[#CACACA] ">დალაგება</h2>

          <div v-for="(item, index) in checkInputs" :key="index" class="mt-4 flex items-center gap-x-4 gap-y-2 pl-5">
            <input id="default-checkbox" type="checkbox" value=""
                   class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600">

            <label for="default-checkbox" class="text-sm font-medium text-gray-900" v-text="item"/>
          </div>
          <div class="relative my-4 pl-5">
            <animated-input placeholder="ქალაქი" class="!w-1/2" v-model="cityInput"/>

            <img v-if="chosenCity && cityInput && chosenCity === cityInput" @click="cityInput = ''"
                 class="cursor-pointer top-5 right-[calc(50%+5px)] absolute" src="/src/assets/icons/modals/close.svg"
                 alt="close icon"/>

            <ul v-if="cityInput !== chosenCity && cityInput && cities.some((c) => c.includes(cityInput))"
                class="z-10 top-[58px] w-[calc(50%-10px)] absolute p-2.5 space-y-2.5 rounded-md border border-border-gray bg-white cursor-pointer">
              <li v-for="(city, index) in cities.filter((c) => c.includes(cityInput))" :key="index"
                  class="hover:text-primary font-medium" v-text="city" @click="chooseCity(city)"/>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-span-2 flex flex-col gap-y-10">
        <router-link :to="`/search/${keyword}`"
                     class="flex items-center gap-x-5 rounded-xl border py-9 pl-5 pr-2.5 border-border-gray"
                     v-for="(listing, index) in listings" :key="index">
          <img :src="listing.image" alt="listing image">

          <div class="flex w-full flex-col gap-y-4">
            <p class="text-2xl font-medium" v-text="listing.title"/>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-x-2">
                <img src="/src/assets/icons/user/rating.svg" alt="rating icon">

                <p><span v-text="listing.rating"/>/5.0</p>
              </div>

              <p class="font-semibold text-price" v-text="`${listing.price} ₾`"/>

              <p class="text-meta" v-text="listing.time_unit"/>

              <p class="text-meta" v-text="listing.publish_date"/>

              <div class="flex items-center gap-x-2">
                <p v-text="listing.author"/>

                <p class="text-xs" v-text="listing.phone"/>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>