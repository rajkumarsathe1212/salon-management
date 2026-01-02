/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",           // ← This scans your files
    "./app/**/*.{js,ts,jsx,tsx,mdx}",            // ← For app directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",     // ← Your components
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",          // ← Just in case
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}