import { RootLayout } from "@/app/layout"
import { createRoute } from "@tanstack/react-router"

export function HomePage() {
    return ( 
        <div></div>
    )
}


export const HomePageRoute = createRoute({
    getParentRoute: () => RootLayout,
    path: '/',
    component: HomePage
  })