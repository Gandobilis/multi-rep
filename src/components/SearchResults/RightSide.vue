<script setup>
import useSearchResults from "../../composables/useSearchResults";

const { SearchResultsInfo } = useSearchResults();
</script>
<template>
    <div class="grid gap-6">
  <div  v-for="n in 4">
    <div class="border-2  border-[#CACACA] xl:px-12 px-2 xl:py-10 py-2 rounded-lg">
      <div class="flex gap-2">
        <component :is="SearchResultsInfo[0].SearchResults.persosvg" />
        <div>
          <h3 class="text-2xl -translate-y-2">
            {{ SearchResultsInfo[0].SearchResults.title3 }}
          </h3>
          <div class="flex gap-2">
            <component :is="SearchResultsInfo[0].SearchResults.starsvg" />
            <div class="flex gap-6">
              <div>
                <h3>
                  {{ SearchResultsInfo[0].SearchResults.rating
                  }}<span>/5.0</span>
                </h3>
              </div>
              <div>
                <h3 class="text-[#177B15] font-bold">
                  {{ SearchResultsInfo[0].SearchResults.money }}
                </h3>
              </div>
              <div>
                <h3 class="text-[#6F6F6F]">
                  {{ SearchResultsInfo[0].SearchResults.compensation }}
                </h3>
              </div>
              <div>
                <h3 class="text-[#6F6F6F]">
                  {{ SearchResultsInfo[0].SearchResults.date }}
                </h3>
              </div>
              <div class="flex gap-4">
                <div>
                  <h3>
                    {{ SearchResultsInfo[0].SearchResults.personal }}
                  </h3>
                </div>
                <div>
                  <h3 class="text-xs mt-1">
                    {{ SearchResultsInfo[0].SearchResults.number }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
