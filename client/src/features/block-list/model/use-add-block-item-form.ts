import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAddBlockItemMutation } from '@/entities/block-list';
import { AddBlockItemDtoType } from '@/shared/api/generated';

const addBlockItemFromSchema = z.object({
  type: z.nativeEnum(AddBlockItemDtoType),
  data: z.string().trim().min(1, { message: 'Required' }),
});

export function useAddBlockItemForm() {
  const form = useForm<z.infer<typeof addBlockItemFromSchema>>({
    resolver: zodResolver(addBlockItemFromSchema),
    defaultValues: {
      type: 'Website',
      data: '',
    },
  });

  const addBlockItemMutation = useAddBlockItemMutation();

  const type = form.watch('type');

  return {
    form,
    type,
    state: { isLoading: addBlockItemMutation.isPending },
    functions: {
      handleSubmit: form.handleSubmit((data) =>
        addBlockItemMutation.mutate(data, {
          onSuccess: () => form.reset(),
        }),
      ),
    },
  };
}
