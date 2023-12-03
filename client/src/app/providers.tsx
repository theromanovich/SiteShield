import { queryClient } from '@/shared/api/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@mui/material'
import { theme } from '@/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
