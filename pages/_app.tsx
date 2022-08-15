import Head from 'next/head';
import { AppPropsWithLayout } from '../types/global';
import { Provider } from 'react-redux';
import '../styles/global.css';
import { store } from '../app/store';
import { Toaster } from 'react-hot-toast';
import { CookiesProvider } from 'react-cookie';
import UserProvider from '../context/userContext';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { userCurrentUser } from '../redux/actions/userActions';
import 'swiper/css/bundle';


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const getLayout = Component.getLayout ?? ((page) => page);
    useEffect(() => {
        async function getCurrentUser() {
            await store.dispatch(userCurrentUser());
        }
        if (localStorage.getItem('token')) {
            getCurrentUser();
            window.setTimeout(() => {
                setLoading(false);
            }, 1);
        } else
            window.setTimeout(() => {
                setLoading(false);
            }, 1);
    }, []);
    return (
        <CookiesProvider>
            <UserProvider>
                <Head>
                    <title>Foxy</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="A social network to connect with your friends" />
                    <meta name="keywords" content="foxy, social network, friends, connect, social, network" />
                    <link rel="icon" href="/logo.svg" />
                </Head>
                <Provider store={store}>
                    {!loading ? <>{getLayout(<Component {...pageProps} />)}</> : <Loading />}

                    <Toaster />
                </Provider>
            </UserProvider>
        </CookiesProvider>
    );
}

export default MyApp;
