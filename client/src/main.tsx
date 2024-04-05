import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
} from '@tanstack/react-router'
import { Providers } from '@/app/providers'

import '@/styles/globals.css'
import { RootLayout } from '@/app/layout'
import { HomePageRoute } from '@/pages/home'
import { SignUpPageRoute } from '@/pages/sign-up'

const routeTree = RootLayout.addChildren([HomePageRoute, SignUpPageRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Providers>
      <RouterProvider router={router} />
    </Providers>,
  )
}