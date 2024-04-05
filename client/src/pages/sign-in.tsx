import { RootLayout } from '@/app/layout';
import { SignInForm } from '@/features/auth';
import { createRoute } from '@tanstack/react-router';

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
