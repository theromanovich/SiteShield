import { useSignUpForm } from '@/features/auth/model/use-sign-up-form';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Link } from '@tanstack/react-router';

export function SignUpForm() {
  const { form, functions, state } = useSignUpForm();

  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-3 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={functions.handleSubmit}>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
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
                  render={({ field }) => (
                    <FormItem className="grid gap-1">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input id="password" placeholder="password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-1" type="submit">
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Alredy have an account?
              </span>
            </div>
          </div>
          <Link
            to={ROUTES.SignIn}
            className="text-primary text-center block text-sm text-amber-950 underline-offset-4 underline"
          >
            Sign In
          </Link>
        </div>
        <div className="text-rose-500 text-center">{state.isError ? state.isError : null}</div>
      </div>
    </div>
  );
}
