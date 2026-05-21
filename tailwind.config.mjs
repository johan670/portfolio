/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      typography: {
        zinc: {
          css: {
            '--tw-prose-body': 'rgb(82 82 91)',
            '--tw-prose-headings': 'rgb(9 9 11)',
            '--tw-prose-links': 'rgb(9 9 11)',
            '--tw-prose-bold': 'rgb(9 9 11)',
            '--tw-prose-hr': 'rgb(228 228 231)',
            '--tw-prose-quotes': 'rgb(9 9 11)',
            '--tw-prose-quote-borders': 'rgb(228 228 231)',
            '--tw-prose-code': 'rgb(9 9 11)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
