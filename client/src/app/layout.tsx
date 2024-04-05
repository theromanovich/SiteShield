import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

function Layout() {
  return (
    <div>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/sign-up" className="[&.active]:font-bold">
          SignUp
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export const RootLayout = createRootRoute({
  component: Layout,
});
