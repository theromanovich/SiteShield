import { RootLayout } from '@/app/layout';
import { protectedPage } from '@/features/auth';
import { AddBlockItemForm, BlockList } from '@/features/block-list';
import { createRoute } from '@tanstack/react-router';

export function HomePage() {
  return (
    <div>
      <div className="mt-10">
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
