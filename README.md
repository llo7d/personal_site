# NEED UPDATE THIS README
# Configure Tailwind CSS

After a NextJS project created, install TailwindCSS in the project directory by running:

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then update the `tailwind.config.js` file with these:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

And the last thing to do for configuring TailwindCSS is you can open `tailwind.css` file from `src/tailwind.css` in your HTML template and put all of it into `styles/global.css` file in your NextJS project.

## Run the Project

You can run the project by running:

```bash
yarn dev
```
