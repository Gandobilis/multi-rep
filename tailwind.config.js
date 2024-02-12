export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    plugins: [
        require('@vueform/slider/tailwind'),
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#950E1D',
                'secondary-bg': '#FBACB5',
                'secondary-text': '#FF96A2',
                'meta': '#6F6F6F',
                'star': '#FFE600',
                'price': '#177B15',
                'error': '#FF0000',
                'border-gray': '#CACACA'
            }
        }
    }
}

