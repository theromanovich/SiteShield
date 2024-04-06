import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import { useBlockItems } from '../model/use-block-items';
import { BlockItem } from './block-item';

export function BlockList() {
  const { state, items, q, functions } = useBlockItems();

  return (
    <div>
      <Label>Search...</Label>
      <Input value={q} onChange={(e) => functions.setQ(e.target.value)} />

      <div>
        {state.isLoading
          ? 'Loading...'
          : items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
