import { RootLayout } from '@/app/layout';
import { SignOutButton, protectedPage } from '@/features/auth';
import ToggleBlockingButton from '@/features/toggle-blocking/ui/toggle-blocking-button';
import { Profile } from '@/widgets/profile';
import { createRoute } from '@tanstack/react-router';

export function HomePage() {
  return (
    <div>
      <Profile />
      <ToggleBlockingButton />
    </div>
  );
}

export const HomePageRoute = createRoute({
  getParentRoute: () => RootLayout,
  path: '/',
  component: protectedPage(HomePage),
});
