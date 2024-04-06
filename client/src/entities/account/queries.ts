import { accountControllerGetAccount, accountControllerPatchAccount } from '@/shared/api/generated';
import { queryClient } from '@/shared/api/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';

const accountKey = ['account'];

export function useAccountQuery() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
  });
}

export function useAccountMutation() {
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess: (data) => {
        queryClient.setQueryData(accountKey, data);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: accountKey });
    },
  });
}
