# React & TailwindCSS Portfolio - With Dark Mode

A simple portfolio starter theme built with React and Tailwind CSS.

![React-TailwindCSS-Portfolio](/assets/homepage.png)

## Demo URL

[https://coderunner2077.com](https://coderunner2077.com)

## Features

-   [React v18](https://reactjs.org) with [React Router v6](https://reactrouter.com)
-   [Tailwind CSS v3](https://tailwindcss.com)
-   Context API For State Management
-   Custom Hooks
-   Framer Motion transitions & animations
-   Language translation English/French
-   Smooth modals and flash alerts with Redux
-   Reusable components
-   Dark mode
-   Projects filter by category
-   Projects filter by search
-   Smooth scroll
-   Counter
-   Dynamic forms
-   Back to top button
-   Download file button
-   Simple and responsive design

## Installation

1. ##### Make sure you have Node JS installed. If you don't have it:

-   [Download it from nodejs.org](https://nodejs.org)
-   [Install it using NVM ](https://github.com/nvm-sh/nvm)
-   If you're on Mac, Homebrew is a good option too:

```
brew install node
```

2. ##### Clone the repo:

```
git clone https://github.com/Coderunner2077/ReactPortfolio.git
```

3. ##### Related Projects:

...
For full functionality, make sure to install the Node.js/Express backend so that emails can be sent (not compulsory + requires having a working Unix mail server that be sender-only eventually):
[React Portfolio Backend](https://github.com/Coderunner2077/PortfolioBackend)

This project is an upgrade of an existing repo:  [Realstoman React Portfolio](https://github.com/realstoman/react-tailwindcss-portfolio)

...
Major upgrade details:
-   Added translations
-   Redux for modals (+ flash alerts)
-   And added backend for sending emails
-   Migrrated the project from CRA to Vite
...

4. ##### Enviroment Variables:

...
If you are going to install the backend api, you will need the following envorment variables:

VITE_API_ENDPOINT -> Working URL of the backend api
VITE_MODE -> Production enviroment variables (development/production)
...

5. ##### Open the project folder:

```
cd react-tailwindcss-portfolio
```

6. ##### Install packages and dependencies:

```
yarn
```

7. NOTE: If you don't have yarn installed, you can install it globally using npm:

```
npm install --global yarn
```

8. ##### Start a local dev server at `http://localhost:3000`:

```
yarn start
```

9. ##### Start a local producion server at `http://localhost:8081`:

...
yarn build
yarn serve
....

The production port is 8081. In order to change it, update 'preview.port' in vite.config.js

## Notes

-   Always run `yarn install` after pulling new changes
-   I'll be constantly updating this repo as I'll be adding more sections to it, so please always check the projects section of this repo to see what tasks are under todo and in progress
-   Illustrations from [unDraw](https://undraw.co) and [Freepik](https://freepik.com)
-   Images from [Unsplash](https://unsplash.com)
-   Feel free to use it as your own portfolio
-   Contributions are welcome
