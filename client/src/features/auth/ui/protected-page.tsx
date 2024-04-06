import { PropsWithChildren, ReactElement } from 'react';

import { useNavigate } from '@tanstack/react-router';

import { useSessionQuery } from '@/entities/session';
import { ROUTES } from '@/shared/constants/routes';

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const navigate = useNavigate();

    const { isLoading, isError } = useSessionQuery();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      navigate({ to: ROUTES.SignUp });
    }

    return <Component {...props} />;
  };
}
