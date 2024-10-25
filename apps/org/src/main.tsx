import 'braid-design-system/reset'; // <-- Must be first

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider } from 'braid-design-system';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BraidProvider theme={apacTheme}>
      <App />
    </BraidProvider>
  </StrictMode>
);
