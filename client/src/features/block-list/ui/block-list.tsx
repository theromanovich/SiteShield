import clsx from 'clsx';

import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import { useBlockItems } from '../model/use-block-items';
import { BlockItem } from './block-item';

export function BlockList({ className }: { className?: string }) {
  const { state, items, q, functions } = useBlockItems();

  return (
    <div
      className={clsx(
        'border rounded px-4 py-4 flex flex-col gap-4 mt-7 w-xl max-w-screen-sm w-full mx-auto',
        !items.length && 'hidden',
        className,
      )}
    >
      {items.length > 0 ? (
        <div>
          <Label>Search...</Label>
          <Input value={q} onChange={(e) => functions.setQ(e.target.value)} />
        </div>
      ) : null}

      <div className="flex flex-col gap-4">
        {state.isLoading
          ? 'Loading...'
          : items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
