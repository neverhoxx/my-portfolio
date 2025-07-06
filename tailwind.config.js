/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                back: "#000319",
                h2: "#C1C2D3",

            },
            flex: {
                'auto-1': '1 1 auto',
            }
        },
    },
    plugins: [
        require('@designbycode/tailwindcss-text-stroke'),
    ],
}
