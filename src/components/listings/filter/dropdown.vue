<script setup>
import {ref, watch, watchEffect} from "vue";
import useAddPost from "../../../composables/useAddPost.js";
const {selectedSubject} = useAddPost()

const props = defineProps({
  name: String,
  defaultName: String,
  options: Array,
});
const test = () =>{
  console.log(selectedSubject)
}
const value = defineModel();
</script>

<template>
  <div class="flex text-sm lg:text-xl  flex-col gap-3">
    <select
        @change="test"
        v-model="selectedSubject"
        class="w-full py-2 rounded-md border-r-8 border-transparent px-2 text-primary outline outline-primary outline-1 ">
      <option  value="default" >{{props.defaultName}}</option>
      <option v-for="(option, index) in options" :key="index" :value="option.id" v-text="option.name"/>
    </select>
  </div>
</template>