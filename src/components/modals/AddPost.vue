<script setup>
import useAddPost from "/src/composables/useAddPost.js";
import useListings from "/src/composables/useListings.js";
import { onMounted} from "vue";
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";
import DropdownForCities from "../listings/filter/dropdownForCities.vue";
import Dropdown from "../listings/filter/dropdown.vue";
import useUser from "../../composables/useUser.js";

const emit = defineEmits(["closeModal"]);

const { data, add_post ,errorMessage, successMessage} = useAddPost();
const { filterCities, filterSubjects, fetchCities, fetchSubjects } = useListings();
const {getUserProfileInfo, myUserData} = useUser();

onMounted(async () => {
  await fetchCities();
  await fetchSubjects();
  await getUserProfileInfo()

});
const handlePhotoUpload = (event) => {
  data.value.photo = event.target.files[0];
};
</script>

<template>
  <div v-if="filterCities && filterSubjects" class="rounded-xl shadow-2xl border-2 bg-white absolute top-28 right-0 left-0 z-10 m-auto flex lg:w-[600px] flex-col items-center gap-y-6 lg:gap-y-12 px-5 pt-5 pb-10">
    <img
        class="cursor-pointer"
        src="/src/assets/icons/modals/close.svg"
        alt="close icon"
        @click="emit('closeModal')"
    />
    <div v-if="myUserData?.is_teacher===true">
      <div class="flex w-full items-center justify-between">


      </div>

      <div class="flex w-full flex-col gap-y-4 lg:gap-y-8">
        <animated-input v-model="data.title" placeholder="სათაური" />

        <animated-input v-model="data.description" placeholder="აღწერა" />

        <dropdown-for-cities default-name="ქალაქი" :options="filterCities" />

        <dropdown default-name="საგანი" :options="filterSubjects" />

        <animated-input v-model="data.price" placeholder="ფასი" />

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
                class="max-lg:text-xs w-full rounded-[5px] px-4 lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl"
            >
              აირჩიე ფოტო
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
          <li v-for="error in errorMessage" :key="error">{{ error }}</li>
        </ul>
      </div>
      <div class="text-green-600 mt-4" v-if="successMessage">
        <p>{{successMessage}}</p>

      </div>
    </div>

    <div v-else class="flex lg:text-lg text-sm text-center flex-col gap-5">
      <p class="text-primary">იმისთვის რომ დადოთ განცხადება უნდა იყოთ მასწავლებელი</p>
      <button>გახდი მასწავლებელი (დასამატებელი)</button>
    </div>

  </div>


</template>
