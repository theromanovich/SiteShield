import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { LogoIcon } from '@/shared/ui/logo';
import { Profile } from '@/widgets/profile';

export function Header() {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex gap-2 items-center">
        <LogoIcon />
        <ToggleBlockingButton />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}
