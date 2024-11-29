import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
