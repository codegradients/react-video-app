import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import ColorModeSwitcher from './ColorModeSwitcher';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);

// Project Link
// https://react-video-app-xi.vercel.app/
