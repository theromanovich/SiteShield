import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { authControllerSignOut } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';

export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signOutMutation = useMutation({
    mutationFn: () => authControllerSignOut(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate({ to: ROUTES.SignUp });
    },
  });

  return {
    state: { isLoading: signOutMutation.isPending },
    functions: { signOut: signOutMutation.mutate },
  };
}
