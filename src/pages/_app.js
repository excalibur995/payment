import Layout from "@/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import ErrorBoundaries from "@/layout/ErrorBoundaries";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundaries>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundaries>
    </QueryClientProvider>
  );
}
