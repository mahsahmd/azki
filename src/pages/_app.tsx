import { Layout } from "@/components";
import { FetcherProvider } from "@/queries";
import "@/styles/index.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FetcherProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FetcherProvider>
  );
}
