import { useSessionQuery } from '@/entities/session';
import ToggleBlockingButton from '@/features/toggle-blocking/ui/toggle-blocking-button';
import { LogoIcon } from '@/shared/ui/logo';
import { Profile } from '@/widgets/profile';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import clsx from 'clsx';

function Layout() {
  const { data: session } = useSessionQuery();
  return (
    <div className="px-4 py-2">
      <div className={clsx(' flex gap-2', session ? 'justify-between' : 'justify-center')}>
        <div className="flex gap-6 items-center mb-4">
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
