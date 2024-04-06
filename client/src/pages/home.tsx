import { createRoute } from '@tanstack/react-router';

import { RootLayout } from '@/app/layout';
import { protectedPage } from '@/features/auth';
import { AddBlockItemForm, BlockList } from '@/features/block-list';

export function HomePage() {
  return (
    <div>
      <div className="mt-24">
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
