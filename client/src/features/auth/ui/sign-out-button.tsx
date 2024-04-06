import { Button } from '@/shared/ui/button';

import { useSignOut } from '../model/use-sign-out';

export function SignOutButton() {
  const { state, functions } = useSignOut();

  return (
    <Button variant="outline" disabled={state.isLoading} onClick={() => functions.signOut()}>
      Sign Out
    </Button>
  );
}
