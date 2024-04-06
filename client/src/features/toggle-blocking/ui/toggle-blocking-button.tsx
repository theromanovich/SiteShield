import { Button } from '@/shared/ui/button';

import { useToggleBlocking } from '../model/use-toggle-blocking';

export function ToggleBlockingButton() {
  const { state, functions } = useToggleBlocking();

  if (!state.isReady) {
    return null;
  }

  return (
    <Button
      disabled={state.isloading}
      variant={state.isBlockingEnabled ? 'destructive' : 'outline'}
      onClick={functions.toggleBlocking}
    >
      {state.isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
    </Button>
  );
}
