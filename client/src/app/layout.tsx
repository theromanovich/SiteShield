import { useSessionQuery } from '@/entities/session';
import { LogoIcon } from '@/shared/ui/logo';
import { Profile } from '@/widgets/profile';
import { Outlet, createRootRoute } from '@tanstack/react-router';

function Layout() {
  const { data: session } = useSessionQuery();
  return (
    <div>
      <div className="p-2 flex gap-2 justify-between">
        <LogoIcon className={session ? '' : 'mx-auto'} />
        {session ? <Profile /> : null}
      </div>
      <Outlet />
    </div>
  );
}

export const RootLayout = createRootRoute({
  component: Layout,
});
