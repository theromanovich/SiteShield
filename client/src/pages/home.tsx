import { RootLayout } from '@/app/layout';
import { protectedPage } from '@/features/auth';
import { AddBlockItemForm } from '@/features/block-list/ui/add-block-item-form';
import { BlockList } from '@/features/block-list/ui/block-list';
import ToggleBlockingButton from '@/features/toggle-blocking/ui/toggle-blocking-button';
import { Profile } from '@/widgets/profile';
import { createRoute } from '@tanstack/react-router';

export function HomePage() {
  return (
    <div>
      <Profile />
      <ToggleBlockingButton />

      <div className="mt-10">
        <h2>Block List</h2>
        <AddBlockItemForm />
        <BlockList />
      </div>
    </div>
  );
}

export const HomePageRoute = createRoute({
  getParentRoute: () => RootLayout,
  path: '/',
  component: protectedPage(HomePage),
});
