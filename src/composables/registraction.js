import { ref } from 'vue';

export function useRegistration() {
  const inputs = ref([
    {
      placeholder: 'სახელი',
    },
    {
      placeholder: 'გვარი',
    },
    {
      placeholder: 'ტელ. ნომერი',
    },
    {
      placeholder: 'ელ. ფოსტა',
    },
  ]);

  return {
    inputs,
  };
}
