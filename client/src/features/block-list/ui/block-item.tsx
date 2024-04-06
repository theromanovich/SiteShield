import { useRemoveBlockItemMutation } from '@/entities/block-list/queries';
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
    <div className="flex gap-2 items-center w-72">
      <div>{data}</div>
      <div>{type}</div>
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
