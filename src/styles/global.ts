import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/img/github-background.svg';

export default createGlobalStyle`
  :root {
    --color-purple-300: #8257E5;
    --color-gray-200: #F0F0F0;
    --color-gray-300: #E1E1E6;
    --color-gray-400: #A8A8B3;
    --color-gray-500: #CbCBD6;
    --color-gray-600: #29292e;
    --color-gray-700: #202024;
    --color-gray-800: #121214;
    --color-white-300: #FFFFFF;
    --color-red-500: #C53030;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-gray-800) url(${githubBackground}) no-repeat 70% top;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select, textarea {
    font-family: Roboto, system-ui, sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 60rem;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }
`;
