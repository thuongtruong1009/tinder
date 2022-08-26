import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import APP_PATH from '../constant/appPath';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectUser } from '../redux/reducers/userSlice';
import { io } from 'socket.io-client';
import toast from 'react-hot-toast';
import UpdateInfo from './UpdateInfo';
import { addMessage, selectConversation } from '../redux/reducers/conversationSlice';
import ToastMessage from './ToastMessage';
import { useSocket } from '../context/SocketContext';
import { addNotification } from '../redux/reducers/notificationSlice';
import { conversationGetAll } from '../redux/actions/conversationActions';
import { toastError } from '../utils/toast';
import { userGetFriends } from '../redux/actions/userActions';
import { addMatch, selectMatch } from '../redux/reducers/matchSlice';
import Matching from './Match/Matching';

interface Props {
    children: React.ReactNode;
}

// let socket: any;
// const ISSERVER = typeof window === 'undefined';
// if (!ISSERVER) {
//     socket = io((process.env.API_HOST as string) + '/notifications', {
//         extraHeaders: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//     });
// }
export default function ProtectRoute({ children }: Props) {
    const socket = useSocket();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [routerAsPath, setRouterAsPath] = useState(router.asPath);
    const sMatch = useAppSelector(selectMatch);
    const sConversation = useAppSelector(selectConversation);
    useEffect(() => {
        setRouterAsPath(router.asPath);
    }, [router]);
    async function getAllConversations() {
        try {
            await dispatch(conversationGetAll()).unwrap();
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    }
    useEffect(() => {
        !sConversation.isCalled && getAllConversations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, sConversation.isCalled]);
    const sUser = useAppSelector(selectUser);
    async function handleResponseSocket(data: any) {
        switch (data.type) {
            case 'notification':
                if (data.data.type === 'match') {
                    await getAllConversations();
                    await dispatch(userGetFriends());
                    dispatch(addMatch(data.data));
                }
                dispatch(addNotification(data.data));
                toast(data.data.message, {
                    icon: '❤️',
                });
                break;
            case 'message':
                dispatch(addMessage(data.data));
                if (!(routerAsPath === APP_PATH.CHAT + '/' + data.data.conversationId)) {
                    toast.custom((t) => <ToastMessage t={t} data={data.data} />);
                }
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        const user = sUser.data?._id || '';
        if (sUser.isLogin && user) {
            socket.emit('addUser');
            socket.on(user, function (data: any) {
                handleResponseSocket(data);
            });
        }
        return () => {
            socket.off(user);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sUser.isLogin, routerAsPath]);

    function render() {
        if (!sUser.isLogin) {
            router.push(APP_PATH.ROOT);
            return null;
        }
        if (sUser.data?.status.isFirstUpdate) {
            return <UpdateInfo />;
        }
        return (
            <>
                {sMatch.isShow && <Matching />}
                {children}
            </>
        );
    }
    return render();
}
