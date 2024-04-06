import { blockListControllerGetList, blockListControllerAddBlockList as blockListControllerAddBlockListItem} from "@/shared/api/generated";
import { useMutation, useQuery } from "@tanstack/react-query";

const blockListKey = ['block-list'] as unknown[];

export function useBlockListQuery({ q }: {q?: string} ) {
  return useQuery({
    queryKey: blockListKey.concat([{q}]),
    queryFn: () => blockListControllerGetList({

    })
  })
}

export function useAddBlockItemMutation() {
    return useMutation({
        mutationFn: blockListControllerAddBlockListItem
    })
}