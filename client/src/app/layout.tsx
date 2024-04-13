import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';

import { useSessionQuery } from '@/entities/session';
import { ROUTES } from '@/shared/constants/routes';
import { LogoIcon } from '@/shared/ui/logo';
import { Header } from '@/widgets/header';

function Layout() {
  const { data: session } = useSessionQuery();

  const router = useRouterState();

  const isAuth = session && router.location.pathname === ROUTES.Home;

  return (
    <div className="px-4 py-2 max-w-screen-lg mx-auto">
      <div className={clsx('flex gap-2', isAuth ? 'justify-between' : 'justify-center')}>
        {isAuth ? <Header /> : <LogoIcon />}
      </div>
      <Outlet />
    </div>
  );
}

export const RootLayout = createRootRoute({
  component: Layout,
});
