import { useAccountMutation, useAccountQuery } from '@/entities/account';

export function useToggleAllowFromBlockList() {
  const accountQuery = useAccountQuery();

  const updateAccountMutation = useAccountMutation();

  console.log(accountQuery.data);

  function toggleAllowFromBlockList() {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        allowFromBlockListOnly: !accountQuery.data?.allowFromBlockListOnly ?? false,
      });
    }
  }

  return {
    state: {
      isloading: updateAccountMutation.isPending,
      isBlockingEnabled: accountQuery.data?.allowFromBlockListOnly ?? false,
      isReady: accountQuery.isSuccess,
    },
    functions: { toggleAllowFromBlockList },
    allowFromBlockListOnly: accountQuery.data?.allowFromBlockListOnly ?? false,
  };
}
