import { authControllerSignOut } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

export function useSignOut() {
  const navigate = useNavigate();

  const signOutMutation = useMutation({
    mutationFn: () => authControllerSignOut(),
    onSuccess: () => {
      navigate({ to: ROUTES.SignUp });
    },
  });

  return {
    state: { isLoading: signOutMutation.isPending },
    functions: { signOut: signOutMutation.mutate },
  };
}
