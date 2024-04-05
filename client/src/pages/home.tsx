import { RootLayout } from '@/app/layout';
import { SignOutButton, protectedPage } from '@/features/auth';
import { createRoute } from '@tanstack/react-router';

export function HomePage() {
  return (
    <div>
      <SignOutButton />
    </div>
  );
}

export const HomePageRoute = createRoute({
  getParentRoute: () => RootLayout,
  path: '/',
  component: protectedPage(HomePage),
});
