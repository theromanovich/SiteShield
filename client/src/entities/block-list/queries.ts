import {
  blockListControllerGetList,
  blockListControllerAddBlockItem,
  blockListControllerRemoveBlockItem,
} from '@/shared/api/generated';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const blockListKey = ['block-list'] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
    placeholderData: (previousData) => previousData
  });
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}
