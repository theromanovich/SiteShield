import { createRoute } from '@tanstack/react-router';

import { RootLayout } from '@/app/layout';
import { SignUpForm } from '@/features/auth';

export function SignUpPage() {
  return (
    <div>
      <SignUpForm />
    </div>
  );
}

export const SignUpPageRoute = createRoute({
  getParentRoute: () => RootLayout,
  path: '/sign-up',
  component: SignUpPage,
});
