import { Label } from '@/shared/ui/label';
import { Switch } from '@/shared/ui/switch';

import { useToggleAllowFromBlockList } from '../model';

export function ToggleAllowSwitch() {
  const { state, functions, allowFromBlockListOnly } = useToggleAllowFromBlockList();

  if (!state.isReady) {
    return null;
  }

  return (
    <div className="flex items-center flex-row-reverse gap-2">
      <Switch
        disabled={state.isloading}
        checked={allowFromBlockListOnly}
        onCheckedChange={functions.toggleAllowFromBlockList}
      />
      <Label>Allow from block list only</Label>
    </div>
  );
}
