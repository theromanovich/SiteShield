import { ToggleAllowSwitch } from '@/features/toggle-allow-from-block-list';
import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { LogoIcon } from '@/shared/ui/logo';
import { Profile } from '@/widgets/profile';

export function Header() {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex gap-4 items-center">
        <LogoIcon />
        <ToggleBlockingButton />
        <ToggleAllowSwitch />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}
