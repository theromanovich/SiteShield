import { useBlockListQuery } from '@/entities/block-list/queries';
import React from 'react';

export function useBlockItems() {
  const [q, setQ] = React.useState('');

  const blockListQuery = useBlockListQuery({ q });

  const items = blockListQuery.data?.items ?? [];

  return { items, q, functions: { setQ }, state: { isLoading: blockListQuery.isLoading } };
}
