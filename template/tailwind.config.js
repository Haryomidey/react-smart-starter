/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#ffffff",
                    dark: "#0a0a0a",
                },
                foreground: {
                    DEFAULT: "#0a0a0a",
                    dark: "#ffffff",
                },
                primary: {
                    DEFAULT: "#0a0a0a",
                    foreground: "#ffffff"
                },
                secondary: {
                    DEFAULT: "#f5f5f5",
                    foreground: "#0a0a0a"
                },
                muted: {
                    DEFAULT: "#e5e5e5",
                    foreground: "#737373"
                },
                border: "#e5e5e5",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}