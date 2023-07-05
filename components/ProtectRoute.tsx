import { useRouter } from 'next/router';
import { useEffect } from 'react';
import APP_PATH from '../constant/appPath';
import { useAppSelector } from '../hooks/redux';
import { selectUser } from '../redux/reducers/userSlice';
import { io } from 'socket.io-client';
import toast from 'react-hot-toast';
import UpdateInfo from './UpdateInfo';

interface Props {
    children: React.ReactNode;
}

export default function ProtectRoute({ children }: Props) {
    const socket = io((process.env.API_HOST as string) + '/notifications', {
        extraHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    const router = useRouter();
    const sUser = useAppSelector(selectUser);
    useEffect(() => {
        const user = sUser.data?._id || '';
        if (sUser.isLogin) {
            socket.connect();
            socket.emit('addUser');
            socket.on(user, function (data) {
                console.log('data: ', data);
                toast(data.message, {
                    icon: '❤️',
                });
            });
            // socket.emit('identity', 0, (response: any) => console.log('Identity:', response));
        }
        // socket.on('exception', function (data) {
        //     console.log('event', data);
        // });s
        return () => {
            socket.emit('removeUser');
            socket.off(user);
            socket.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sUser.isLogin]);
    function render() {
        if (!sUser.isLogin) {
            router.push(APP_PATH.ROOT);
            return null;
        }
        if (sUser.data?.status.isFirstUpdate) {
            return <UpdateInfo />;
        }
        return <>{children}</>;
    }
    return render();
}
