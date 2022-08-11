/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            fontSize: {
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.25rem',
                h4: '1rem',
                'button-1': '18px',
                'button-2': '16px',
                'caption-1': '14px',
                'small-b': '12px',
                'small-r': '12px',
                'body-1': '24px',
                'body-2': '16px',
                'body-3': '14px',
                display: '64px',
            },
            lineHeight: {
                h1: '52px',
                h2: '42px',
                h3: '26px',
                h4: '20px',
                'button-1': '24px',
                'button-2': '24px',
                'caption-1': '18px',
                'small-b': '16px',
                'small-r': '16px',
                'body-1': '32px',
                'body-2': '24px',
                'body-3': '18px',
                display: '82px',
            },
            colors: {
                neutral: {
                    100: '#2a2846',
                    80: '#55536B',
                    65: '#7F7E90',
                    60: '#7A838C',
                    40: '#AAA9B5',
                    20: '#D4D4DA',
                    10: '#EAE9ED',
                    5: '#F4F4F6',
                    0: '#fff',
                },
                primary: {
                    100: '#7A66C7',
                    80: '#C5C2F3',
                    65: '#F9F9FF',
                    50: '#7a56fe',
                },
                danger: '#FE5D5D',
                main:{
                    'purple': '#7A56FE',
                }
            },
            fontFamily: {
                primary: 'SVN-Circular',
                secondary: 'SVN-Gilroy',
            },
        },
    },
    plugins: [],
};
