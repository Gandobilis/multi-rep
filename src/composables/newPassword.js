import { ref } from 'vue';

export function useInput(initialInputs) {
  const inputs = ref(
    initialInputs.map((item) => ({
      value: '',
      label: item.label,
    }))
  );


  const inputStyles = 'border w-52 border-black rounded-md w-60 h-12 bg-transparent focus:outline-none focus:ring-0 focus:border-red-900 pl-4';
  const labelStyles = 'absolute w-52 text-sm text-gray-900 transform -translate-y-4 scale-75 top-0.5 z-10 bg-white text-xl px-2 peer-focus:text-black start-1';

  return {
    inputs,
    inputStyles,
    labelStyles,
  };
}
