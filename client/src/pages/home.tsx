import { RootLayout } from '@/app/layout';
import { protectedPage } from '@/features/auth';
import { AddBlockItemForm } from '@/features/block-list/ui/add-block-item-form';
import { BlockList } from '@/features/block-list/ui/block-list';
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
