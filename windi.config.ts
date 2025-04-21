/// <reference types="windicss/types" />
import { defineConfig } from 'windicss/helpers';
// import colors from "windicss/colors";

export default defineConfig({
  alias: {
    'hstack': 'flex items-center',
    'vstack': 'flex flex-col',
    'icon': 'w-6 h-6 fill-current',
    'app': 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300',
    'header-1': 'text-6xl',
    'header-2': 'text-5xl',
  },
  theme: {
    unsplashImages: {
      lyon: 'YMi66afAE3I',
      stars: '4dpAqfTbvKA',
      yosemite: 'zOXUvQ3Xo3s',
      gradient: 'LeG68PrXA6Y',
    },
    unsplashResolutions: {
      'default': null, // --- Allows maximum available resolution by default.
      'xs': 480,
      'sm': 720,
      'md': 1280,
      'lg': 1920,
      'xl': 3840,
      '2xl': 7680,
    },
    // colors: { blue: "#f00" },
    extend: {
      colors: {
        green: '#12EBCA',
        blue: '#2F5EBF',
      },
    },
  },
  plugins: [require('tailwindcss-unsplash')],
});
