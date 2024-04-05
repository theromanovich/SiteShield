import { SignUpBodyDto, authControllerSignUp } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function useSignUpForm() {
  const signUpformSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  });

  const navigate = useNavigate();

  const form = useForm<SignUpBodyDto>({
    resolver: zodResolver(signUpformSchema),
  });

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      navigate({ to: ROUTES.Home });
    },
  });

  const errorMessage = signUpMutation.error ? 'Sign Up failed' : undefined;

  return {
    form,
    state: { isLoading: signUpMutation.isPending, isError: errorMessage },
    functions: { handleSubmit: form.handleSubmit((data) => signUpMutation.mutate(data)) },
  };
}
