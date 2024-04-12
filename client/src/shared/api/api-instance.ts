import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function createInstance<T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> {
  return apiInstance({
    ...config,
    ...options,
  }).then((r) => r.data);
}

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
