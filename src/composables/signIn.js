import { ref } from 'vue';

export function useSignIn() {
  const inputs = ref([
    {
      placeholder: 'ელ. ფოსტა',
    },
    {
      placeholder: 'პაროლი',
    },
  ]);

  return {
    inputs,
  };
}
