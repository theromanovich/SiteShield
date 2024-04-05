import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { PropsWithChildren, ReactElement } from 'react';

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const navigate = useNavigate();
    const { isLoading, isError } = useQuery({
      queryKey: ['session'],
      queryFn: () => authControllerGetSessionInfo(),
      retry: 1,
    });

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      navigate({ to: '/sign-up' });
    }

    return <Component {...props} />;
  };
}
