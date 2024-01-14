# Sveltekit-Standard

I do a lot with socket.io and tailwind.css, so I decided to create a template with these packages all configured.


# Installation

```sh
git clone git@github.com:herohead049/sveltekit-standard.git my-app
cd my-app
pnpm i

```
## Backend API env value

Update your backend API value in `.env`:

```
PUBLIC_WS_ADDRESS=ws://localhost:3000

```


# Svektekit create options
 - typescript
  

## Packages Included beyond standard sveltekit create

- socket.io
- socket.io-client
- flowbite-svelte https://flowbite-svelte.com/
  ```sh
    pnpx svelte-add@latest tailwindcss
    pnpm i 

    pnpm i -D flowbite-svelte flowbite

  ```
> tailwind.config.cjs
  ```sh
  const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    }
  }
};

module.exports = config;
  ```