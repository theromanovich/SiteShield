import { useBlockListQuery } from '@/entities/block-list/queries';
import { useDebaunceValue } from '@/shared/lib/react-std';
import React from 'react';

export function useBlockItems() {
  const [q, setQ] = React.useState('');

  const blockListQuery = useBlockListQuery({ q: useDebaunceValue(q, 500) });

  const items = blockListQuery.data?.items ?? [];

  return { items, q, functions: { setQ }, state: { isLoading: blockListQuery.isLoading } };
}
