import { useAccountMutation, useAccountQuery } from '@/entities/account';

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();

  const updateAccountMutation = useAccountMutation();

  function toggleBlocking() {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled ?? false,
      });
    }
  }

  return {
    state: {
      isloading: updateAccountMutation.isPending,
      isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
      isReady: accountQuery.isSuccess,
    },
    functions: { toggleBlocking },
  };
}
