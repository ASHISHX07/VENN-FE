/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'selector',    // (Note: 'class' is old syntax, 'selector' is the new standard)
    theme: {
        extend: {},
    },
    plugins: [],
}