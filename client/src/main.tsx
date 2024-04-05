import { RootLayout } from '@/app/layout';
import { Providers } from '@/app/providers';
import { HomePageRoute } from '@/pages/home';
import { SignInPageRoute } from '@/pages/sign-in';
import { SignUpPageRoute } from '@/pages/sign-up';
import '@/styles/globals.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

const routeTree = RootLayout.addChildren([HomePageRoute, SignUpPageRoute, SignInPageRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Providers>
      <RouterProvider router={router} />
    </Providers>,
  );
}
