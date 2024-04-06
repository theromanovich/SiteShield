import { createRoute } from '@tanstack/react-router';

import { RootLayout } from '@/app/layout';
import { SignInForm } from '@/features/auth';

export function SignInPage() {
  return (
    <div>
      <SignInForm />
    </div>
  );
}

export const SignInPageRoute = createRoute({
  getParentRoute: () => RootLayout,
  path: '/sign-in',
  component: SignInPage,
});
