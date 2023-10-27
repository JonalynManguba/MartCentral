/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#DA1212",
            secondary: "#EA1616",
            textw: "#FFFFFF",
            green: "#009E36",
            yellow: "#FFE933",
            brown: "#874F00",
            red: "D41818",
            tertiary: "#980808",
            amber: "#F08C00",

        },
        extend: {
            fontFamily: {
                TopNav: ['Lekton'],
                Lexend: ['Lexend'],
            }
        },
    },
    plugins: [],
}