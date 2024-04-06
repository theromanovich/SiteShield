import { useRemoveBlockItemMutation } from '@/entities/block-list';
import { AddBlockItemDtoType } from '@/shared/api/generated';
import { DeleteIcon } from '@/shared/ui/delete-icon';

export function BlockItem({
  data,
  type,
  id,
}: {
  type: AddBlockItemDtoType;
  id: number;
  data: string;
}) {
  const removeBlockItemMutation = useRemoveBlockItemMutation();

  function handleRemove() {
    removeBlockItemMutation.mutate(id);
  }
  return (
    <div className="flex gap-2 items-center mx-auto w-4/6 justify-between border px-4 py-2 rounded-sm">
      <div className="flex gap-2 items-center">
        <span className="text-sm text-muted-foreground">{type}</span>
        <span className="">{data}</span>
      </div>
      <button
        className="hover:text-rose-600 block ml-auto p-2"
        disabled={removeBlockItemMutation.isPending}
        onClick={handleRemove}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
