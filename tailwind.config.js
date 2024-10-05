/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      colors: {
        'default': '#2ED573',
        'primary': '#25AA5C',
        'gray_8': '#454B58',
        'gray_9': '#2F3542',
      },
      backgroundImage: {
        bannerBg: "url('/bgs/bannerBg.png')",
        skillBg: "url('/bgs/skillBg.png')",
        contactBg: "url('/bgs/bannerBg.png')",
      },
    },
  },
  plugins: [],
};
