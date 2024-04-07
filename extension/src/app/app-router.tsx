import { useSessionQuery } from '@/entities/session/queries';
import { HomePage } from '@/pages/home';
import { UnAuthorized } from '@/pages/unauthorized';

export function AppRouter() {
  const { isLoading, isSuccess } = useSessionQuery();

  if (isLoading) {
    return 'Loading...';
  }

  if (isSuccess) {
    return <HomePage />;
  }

  return <UnAuthorized />;
}
