<script setup>
defineProps({
  fill: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M14.4443 5.88884C14.4443 8.58887 12.2554 10.7777 9.55547 10.7777C6.85543 10.7777 4.66663 8.58887 4.66663 5.88884C4.66663 3.18881 6.85543 1 9.55547 1C12.2554 1 14.4443 3.18881 14.4443 5.88884Z"
        :stroke="fill" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path
        d="M9.55547 14.4443C4.83042 14.4443 1 18.2747 1 22.9998H18.1109C18.1109 18.2747 14.2805 14.4443 9.55547 14.4443Z"
        :stroke="fill" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>