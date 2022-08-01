import Head from 'next/head';
import { AppPropsWithLayout } from '../types/global,';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            <Head>
                <title>Foxy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A social network to connect with your friends" />
                <meta name="keywords" content="foxy, social network, friends, connect, social, network" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <>{getLayout(<Component {...pageProps} />)}</>
        </>
    );
}

export default MyApp;
