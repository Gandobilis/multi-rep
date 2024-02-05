<script setup>
import useSearchResults from "@/composables/useSearchResults";
import LeftSide from "./LeftSide.vue";
import RightSide from "./RightSide.vue"

const { SearchResultsInfo } = useSearchResults();
</script>
<template>
    <div class="mb-20">
        <h2 class="font-semibold text-5xl">{{SearchResultsInfo[0].SearchResults.title}}</h2>
    </div>
    <div>
        <div class="lg:flex gap-5 ">
            <LeftSide />
            <RightSide />
        </div>
    </div>
</template>