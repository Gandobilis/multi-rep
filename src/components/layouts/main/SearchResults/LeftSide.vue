<script setup>
import useSearchResults from "@/composables/useSearchResults";

const { SearchResultsInfo } = useSearchResults();
</script>
<template>
  <div class="lg:w-[29%]">
    <div class="  border-2 rounded-lg py-2">
      <button class="b1 w-full mb-6">
        <div class="flex">
          <div
            class="inline-block h-[23px] min-h-[1em] w-[2px] self-stretch bg-[#950E1D] opacity-100 dark:opacity-50 mt-2 mr-[2px]"
          ></div>
          <div
            class="flex justify-between bg-[#E7E7E7] p-2 rounded-lg w-full mr-1"
          >
            <div class="flex gap-10">
              <component
                :is="SearchResultsInfo[0].SearchResults.statementsvg"
              />
              <h3>{{ SearchResultsInfo[0].SearchResults.statement }}</h3>
            </div>
            <div
              class="bg-[#B3B3B3] w-[25px] h-[25px] text-center rounded-full"
            >
              {{ SearchResultsInfo[0].SearchResults.numb }}
            </div>
          </div>
        </div>
      </button>

      <button class="b2 w-full mb-4">
        <div class="flex">
          <div
            class="inline-block h-[22px] min-h-[1em] w-[2px] self-stretch bg-white opacity-100 dark:opacity-50 mt-2 mr-[2px]"
          ></div>
          <div class="flex justify-between bg-white p-2 rounded-lg w-full mr-1">
            <div class="flex gap-10">
              <component :is="SearchResultsInfo[0].SearchResults.personsvg" />
              <h3 class="ml-1">
                {{ SearchResultsInfo[0].SearchResults.person }}
              </h3>
            </div>
            <div
              class="bg-[#B3B3B3] w-[25px] h-[25px] text-center rounded-full"
            >
              {{ SearchResultsInfo[0].SearchResults.numb1 }}
            </div>
          </div>
        </div>
      </button>
    </div>

    <div class=" border-2 rounded-lg py-2 mt-10">
      <div class="border-b-2">
        <h3 class="text-2xl ml-3 mb-2 mt-3">
          {{ SearchResultsInfo[0].SearchResults.title2 }}
        </h3>
      </div>
      <div>
        <ul
          class="w-48 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <li class="w-full rounded-t-lg">
            <div class="flex items-center ps-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{{ SearchResultsInfo[0].SearchResults.filtertitle1 }}</label
              >
            </div>
          </li>
          <li class="w-full">
            <div class="flex items-center ps-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="react-checkbox"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{{ SearchResultsInfo[0].SearchResults.filtertitle2 }}</label
              >
            </div>
          </li>
          <li class="w-full">
            <div class="flex items-center ps-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{{ SearchResultsInfo[0].SearchResults.filtertitle3 }}</label
              >
            </div>
          </li>
          <li class="w-full">
            <div class="flex items-center ps-3">
              <input
                id="laravel-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="laravel-checkbox"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{{ SearchResultsInfo[0].SearchResults.filtertitle4 }}</label
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="pl-2 pr-14 mt-4">
        <select
          id="small"
          class="block w-full p-2 font-medium	 mb-6 text-sm text-gray-900 border-2 border-[#000000] rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>{{ SearchResultsInfo[0].SearchResults.choose }}</option>
          <option value="US">{{ SearchResultsInfo[0].SearchResults.city }}</option>
          <option value="CA">{{ SearchResultsInfo[0].SearchResults.city1 }}</option>
          <option value="FR">{{ SearchResultsInfo[0].SearchResults.city2 }}</option>
          <option value="DE">{{ SearchResultsInfo[0].SearchResults.city3 }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
