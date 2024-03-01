<script setup>
import useAddPost from "/src/composables/useAddPost.js";
import useListings from "/src/composables/useListings.js";
import { onMounted} from "vue";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";
import DropdownForCities from "../listings/filter/dropdownForCities.vue";
import Dropdown from "../listings/filter/dropdown.vue";
import useUser from "../../composables/useUser.js";
import UploadIcon from "../../assets/icons/auth/uploadIcon.vue";

const emit = defineEmits(["closeModal"]);

const { data, add_post ,errorMessage, successMessage} = useAddPost();
const { filterCities, filterSubjects, fetchCities, fetchSubjects,timeUnits,getTimeUnits, getCurrencies, currencies } = useListings();
const {getUserProfileInfo, myUserData} = useUser();

onMounted(async () => {
  await fetchCities();
  await fetchSubjects();
  await getUserProfileInfo()
  await getCurrencies()
  await getTimeUnits()


});
const handlePhotoUpload = (event) => {
  data.value.photo = event.target.files[0];
};
</script>

<template>
  <div v-if="filterCities && filterSubjects" class="rounded-xl shadow-2xl border-2 bg-white absolute top-28 right-0 left-0 z-10 m-auto flex lg:w-[600px]  flex-col items-center gap-y-6 lg:gap-y-12 px-5 pt-5 pb-10">
    <img
        class="cursor-pointer"
        src="/src/assets/icons/modals/close.svg"
        alt="close icon"
        @click="emit('closeModal')"
    />
    <div class="w-8/12" v-if="myUserData?.is_teacher===true">


      <div class="flex w-full flex-col gap-y-4  lg:gap-y-8">
        <animated-input v-model="data.title" placeholder="სათაური" />

        <animated-input v-model="data.description" placeholder="აღწერა" />

        <dropdown-for-cities default-name="ქალაქი" :options="filterCities" />

        <dropdown default-name="საგანი" :options="filterSubjects" />

        <div class="flex items-center relative">
          <animated-input v-model="data.price" placeholder="ფასი" />
          <div class="flex lg:text-sm text-xs  absolute  right-0 lg:right-5 lg:gap-2">

            <select v-model="data.currency" class=" text-center right-5 outline-none bg-transparent" v-if="currencies">
              <option v-for="currency in currencies" :value="currency">{{currency}}</option>
            </select>

            <select  v-model="data.time_unit" class=" text-center right-5 outline-none bg-transparent" >
              <option  v-for="timeUnit in timeUnits" :value="timeUnit">{{timeUnit}}</option>
            </select>
          </div>
        </div>

        <div class="flex flex-col lg:text-lg gap-y-4 items-center">
          <div class="relative">
            <input
                type="file"
                id="photo"
                accept="image/*"
                @change="handlePhotoUpload"
                class="hidden"
            />
            <label
                for="photo"
                class="max-lg:text-xs flex gap-2 cursor-pointer  hover:opacity-80 items-center justify-center w-full rounded-[5px] px-4 lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl"
            >
              აირჩიე ფოტო
              <upload-icon class="w-4  h-4"/>
            </label>
          </div>
        </div>

        <button
            type="submit"
            class="max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl"
            v-text="'შემდეგი'"
            @click="add_post"
        />
      </div>

      <div v-if="errorMessage?.length > 0" class="text-red-500 mt-4">
        <ul class="flex flex-col gap-2 text-center">
          <li v-for="error in errorMessage" :key="error">{{ error }} <span class=" cursor-pointer text-xl text-black hover:opacity-80  flex flex-col items-center " v-if="error==='გაიარეთ იმეილის ვერიფიკაცია'">აქ </span></li>
        </ul>

      </div>
      <div class="text-green-600 mt-4" v-if="successMessage">
        <p>{{successMessage}}</p>

      </div>
    </div>

    <div v-else class="flex lg:text-lg text-sm text-center flex-col gap-5">
      <p class="text-primary">იმისთვის რომ დადოთ განცხადება უნდა იყოთ მასწავლებელი</p>
    </div>

  </div>


</template>
