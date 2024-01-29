import { ref } from 'vue';

export function useVerification() {
  const input1 = ref('');
  const input2 = ref('');
  const input3 = ref('');
  const input4 = ref('');
  const input2Ref = ref(null);
  const input3Ref = ref(null);
  const input4Ref = ref(null);

  const focusInput2 = () => {
    input2Ref.value.focus();
  };

  const focusInput3 = () => {
    input3Ref.value.focus();
  };

  const focusInput4 = () => {
    input4Ref.value.focus();
  }


  return {
    input1,
    input2,
    input3,
    input4,
    input2Ref,
    input3Ref,
    input4Ref,
    focusInput2,
    focusInput3,
    focusInput4,
  };
}