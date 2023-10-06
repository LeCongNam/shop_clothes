/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                F2F0F1: '#F2F0F1',
                F0F0F0: '#F0F0F0',
            },
            fontSize: {
                26: '26px',
            },
            colors: {
                FFC633: '#FFC633',
                '01AB31': '#01AB31',
            },
        },
    },
    plugins: [],
};
