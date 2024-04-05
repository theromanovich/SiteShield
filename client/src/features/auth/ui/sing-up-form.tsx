import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { SignUpBodyDto, authControllerSignUp } from '@/shared/api/generated';
import { useNavigate } from '@tanstack/react-router';
import { ROUTES } from '@/shared/constants/routes';

const signUpformSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  })

export function SignUpForm() {
  const navigate = useNavigate()


  const form = useForm<SignUpBodyDto>({
    resolver: zodResolver(signUpformSchema),
  });


 const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      navigate({ to: ROUTES.Home })
    }
  })

  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(data => signUpMutation.mutate(data))}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                    <FormItem className="grid gap-1">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                    <FormItem className="grid gap-1">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
        
                />
                <Button type='submit'>Sign In with Email</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
