import { Button } from '@/shared/ui/button';

import { useToggleBlocking } from '../model/use-toggle-blocking';

export default function ToggleBlockingButton() {
  const { state, functions } = useToggleBlocking();

  if (!state.isReady) {
    return null;
  }

  return (
    <Button disabled={state.isloading} onClick={functions.toggleBlocking}>
      {state.isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
    </Button>
  );
}