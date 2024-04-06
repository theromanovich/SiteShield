import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { z } from 'zod';

import { SignInBodyDto, authControllerSignIn } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';

export function useSignInForm() {
  const signInformSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  });

  const navigate = useNavigate();

  const form = useForm<SignInBodyDto>({
    resolver: zodResolver(signInformSchema),
  });

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      navigate({ to: ROUTES.Home });
    },
  });

  const errorMessage = signInMutation.error ? 'Sign In failed' : undefined;

  return {
    form,
    state: { isLoading: signInMutation.isPending, isError: errorMessage },
    functions: { handleSubmit: form.handleSubmit((data) => signInMutation.mutate(data)) },
  };
}
