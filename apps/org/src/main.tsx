import 'braid-design-system/reset'; // must go at top of file

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';


import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider } from 'braid-design-system';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <BraidProvider theme={apacTheme}>
        <RouterProvider router={router} />
      </BraidProvider>
    </StrictMode>
  );
}
