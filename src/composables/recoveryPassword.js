import { ref } from 'vue';

export function useInputs(initialInputs) {
  const inputs = ref(
    initialInputs.map((item) => ({
      value: '',
      ...item,
    }))
  );

  return {
    inputs,
  };
}
