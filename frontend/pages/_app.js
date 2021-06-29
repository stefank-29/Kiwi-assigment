import Page from '../components/Page';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
