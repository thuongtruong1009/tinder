import Head from 'next/head';
import { AppPropsWithLayout } from '../types/global';
import { Provider } from 'react-redux';
import '../styles/global.css';
import { store } from '../app/store';
import { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { userCurrentUser } from '../redux/actions/userActions';
import 'swiper/css/bundle';
import ProtectRoute from '../components/ProtectRoute';
import { SocketProvider } from '../context/SocketContext';
import UserProvider from '../context/UserContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import APP_PATH from '../constant/appPath';
import NotSupport from '../components/NotSupport';
import ScreenRoute from '../components/ScreenRoute';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const getLayout = Component.getLayout ?? ((page) => page);
    useEffect(() => {
        async function getCurrentUser() {
            if (localStorage.getItem('token') && !store.getState().user.isLogin) {
                await store.dispatch(userCurrentUser());
            }
            window.setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        getCurrentUser();
        return () => {
            setLoading(true);
        };
    }, []);

    return (
        <UserProvider>
            <Head>
                <title>Foxy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A social network to connect with your friends" />
                <meta name="keywords" content="foxy, social network, friends, connect, social, network" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <Provider store={store}>
                {!loading ? (
                    <ScreenRoute>
                        {Component.protected ? (
                            <ProtectRoute>
                                <SocketProvider>{getLayout(<Component {...pageProps} />)}</SocketProvider>
                            </ProtectRoute>
                        ) : (
                            getLayout(<Component {...pageProps} />)
                        )}
                    </ScreenRoute>
                ) : (
                    <Loading />
                )}
                <Toaster
                    toastOptions={{
                        className: 'z-[500]',
                    }}
                />
            </Provider>
        </UserProvider>
    );
}

export default MyApp;
