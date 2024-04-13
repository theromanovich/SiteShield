import { ToggleBlockingButton } from '@/features/toggle-blocking/ui/toggle-blocking-button';
import { ADMIN_SIGN_IN_URL } from '@/shared/constants';
import { createTab } from '@/shared/lib/browser';
import { Button } from '@/shared/ui/button';
import { LogoIcon } from '@/shared/ui/logo';

export function HomePage() {
  return (
    <div className="p-4 w-92 flex flex-col gap-3 items-center w-48">
      <LogoIcon />
      <ToggleBlockingButton />
      <Button onClick={() => createTab(ADMIN_SIGN_IN_URL)}>Manage extension</Button>
    </div>
  );
}
