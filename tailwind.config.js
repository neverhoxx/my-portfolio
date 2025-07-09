/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/**/.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/*.{js,ts,jsx,tsx,mdx}',
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
