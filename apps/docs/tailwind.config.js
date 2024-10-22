const sharedConfig = require("@signozhq/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
