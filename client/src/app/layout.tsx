import { Outlet, createRootRoute } from '@tanstack/react-router';
import clsx from 'clsx';

import { useSessionQuery } from '@/entities/session';
import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { LogoIcon } from '@/shared/ui/logo';
import { Profile } from '@/widgets/profile';

function Layout() {
  const { data: session } = useSessionQuery();

  return (
    <div className="px-4 py-2 max-w-screen-lg mx-auto">
      <div className={clsx('flex gap-2', session ? 'justify-between' : 'justify-center')}>
        <div className="flex gap-6 items-center">
          <LogoIcon />
          {session ? <ToggleBlockingButton /> : null}
        </div>
        {session ? <Profile /> : null}
      </div>
      <Outlet />
    </div>
  );
}

export const RootLayout = createRootRoute({
  component: Layout,
});
