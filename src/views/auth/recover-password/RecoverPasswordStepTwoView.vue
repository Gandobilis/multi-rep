<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const router = useRouter();
const inputRefs = ref([]);
const digits = ref(['', '', '', '']);

const goBack = () => {
  router.go(-1);
}

function handleInput(index, value) {
  digits.value[index] = value;
  if (value && index < 3) {
    const nextInput = inputRefs.value[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }
}

function handleKeyDown(event, index) {
  switch (event.key) {
    case 'Backspace':
      if (index > 0 && !digits.value[index]) {
        digits.value[index - 1] = '';
        const prevInput = inputRefs.value[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      }
      break;
    case 'ArrowLeft':
      if (index > 0) {
        const prevInput = inputRefs.value[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      }
      break;
    case 'ArrowRight':
      if (index < 3) {
        const nextInput = inputRefs.value[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
      break;
    default:
      break;
  }
}

function handlePaste(event, index) {
  event.preventDefault();
  const pastedText = event.clipboardData.getData('text');
  const charsToPaste = pastedText.substring(0, 4).split('');
  charsToPaste.forEach((char, i) => {
    digits.value[index + i] = char;
  });
  const nextInput = inputRefs.value[charsToPaste.length - 1];
  if (nextInput) {
    nextInput.focus();
  }
}

onMounted(() => console.log(inputRefs.value))
</script>
<template>
  <div class="relative">
    <img @click="goBack" class="cursor-pointer absolute top-10 left-3" src="../../../assets/icons/auth/back-arrow.svg"
         alt="back arrow"/>
    <form method="post" @submit.prevent class="w-[243px] flex flex-col items-center gap-y-[50px]">
      <h1 class="text-[32px] font-semibold text-center whitespace-nowrap">შეიყვანეთ მეილზე<br>გამოგზავნილი პინკოდი</h1>
      <div class="flex flex-col items-center justify-center gap-y-[50px]">
        <div class="w-full flex justify-between">
          <input
              v-for="(digit, index) in digits"
              :key="index"
              :value="digit"
              ref="inputRefs"
              @input="handleInput(index, $event.target.value.slice(-1))"
              @keydown="handleKeyDown($event, index)"
              @paste="handlePaste($event, index)"
              maxlength="1"
              class="border-[1px] border-black w-[58.6px] h-[60px] rounded-md text-center focus:outline-primary"
          />
        </div>
        <p class="text-sm flex justify-center whitespace-nowrap">პინკოდის ხელახლა გაგზავნა შესაძლებელია {{ 59 }}</p>
        <div class="flex flex-col gap-y-[15px] items-center mt-1.5 text-xl">
          <router-link to="/auth/recover-password-step-three"
                       class="mt-2.5 text-center py-[6.5px] rounded-[5px] hover:shadow-2xl text-white bg-primary w-full">
            შემდეგი
          </router-link>
          <span>ან</span>
          <button class="cursor-pointer text-[#FF96A2] ">ხელახლა გაგზავნა</button>
        </div>
      </div>
    </form>
  </div>
</template>
