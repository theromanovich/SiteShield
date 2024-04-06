import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const DEFAULT_ERROR = 'Something went wrong';

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (cause) => {
      toast.error(cause.message ?? DEFAULT_ERROR);
    },
  }),
  mutationCache: new MutationCache({
    onError: (cause) => {
      toast.error(cause.message ?? DEFAULT_ERROR);
    },
  }),
});
