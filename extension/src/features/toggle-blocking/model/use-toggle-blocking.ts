import { useAccountQuery, useUpdateAccountMutation } from '@/entities/account';

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();

  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      });
    }
  };

  return {
    functions: { toggleBlocking },
    state: {
      isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
      isLoading: updateAccountMutation.isPending,
      isReady: accountQuery.isSuccess,
    },
  };
}
