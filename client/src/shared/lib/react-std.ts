import React from 'react';

export function useDebaunceValue<T>(value: T, timeout = 0) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debouncedValue;
}
