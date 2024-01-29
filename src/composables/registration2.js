import { ref } from 'vue';

export function useRegistration2() {
  const inputs = ref([
    {
      placeholder: 'ქალაქი',
    },
    {
      placeholder: 'უბანი',
    },
    {
      placeholder: 'პროფესია',
    },
    {
      placeholder: 'c.v',
    },
    {
      placeholder: 'პროფ. ფოტო',
    },
  ]);

  return {
    inputs,
  };
}
