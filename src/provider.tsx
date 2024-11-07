import {
  keepPreviousData,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FC, memo, PropsWithChildren } from "react";

const queryCache = new QueryCache();

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      retry: Number.POSITIVE_INFINITY,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    },
  },
});

const Component: FC<PropsWithChildren<object>> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const FetcherProvider = memo(Component);
