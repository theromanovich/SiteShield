import { useAddBlockItemMutation } from '@/entities/block-list/queries';
import { AddBlockItemDtoType } from '@/shared/api/generated';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const addBlockItemFromSchema = z.object({
  type: z.nativeEnum(AddBlockItemDtoType),
  data: z.string().min(1),
});

export function useAddBlockItemForm() {
  const form = useForm<z.infer<typeof addBlockItemFromSchema>>({
    resolver: zodResolver(addBlockItemFromSchema),
  });

  const addBlockItemMutation = useAddBlockItemMutation();

  const type = form.watch('type');

  return {
    form,
    type,
    state: { isLoading: addBlockItemMutation.isPending },
    functions: { handleSubmit: form.handleSubmit((data) => addBlockItemMutation.mutate(data, {
      onSuccess: () => form.reset(),
    })) },
  };
}
