import { ADMIN_SIGN_IN_URL } from '@/shared/constants';
import { createTab } from '@/shared/lib/browser';
import { Button } from '@/shared/ui/button';
import { LogoIcon } from '@/shared/ui/logo';

export function UnAuthorized() {
  return (
    <div className="p-4 flex flex-col gap-3 w-48 items-center">
      <LogoIcon />
      <h2 className="text-xl">You are not authorized!</h2>
      <Button onClick={() => createTab(ADMIN_SIGN_IN_URL)}>Sign In</Button>
    </div>
  );
}
