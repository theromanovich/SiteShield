import { useSessionQuery } from '@/entities/session';
import ToggleBlockingButton from '@/features/toggle-blocking/ui/toggle-blocking-button';
import { LogoIcon } from '@/shared/ui/logo';
import { Profile } from '@/widgets/profile';
import { Outlet, createRootRoute } from '@tanstack/react-router';

function Layout() {
  const { data: session } = useSessionQuery();
  return (
    <div className="px-4 py-2">
      <div className=" flex gap-2 justify-between">
        <div className="flex gap-6 items-center">
          <LogoIcon className={session ? '' : 'mx-auto'} />
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
