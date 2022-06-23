/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Configure your color palette here
                // THM Farben
                'quiz': {
                    primary: '#74139d',
                    secondary: '#350948',
                    hover: '#b31df2',
                    link: '#b31df2',
                },
            }

        },
    },
    plugins: [require('@tailwindcss/forms')],
};
