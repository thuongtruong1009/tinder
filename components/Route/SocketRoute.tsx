import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import APP_PATH from '../../constant/appPath';
import { useSocket } from '../../context/SocketContext';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { conversationGetAll } from '../../redux/actions/conversationActions';
import { userGetFriends } from '../../redux/actions/userActions';
import { addMessage } from '../../redux/reducers/conversationSlice';
import { addMatch } from '../../redux/reducers/matchSlice';
import { addNotification } from '../../redux/reducers/notificationSlice';
import { selectUser } from '../../redux/reducers/userSlice';
import { toastError } from '../../utils/toast';
import ToastMessage from '../ToastMessage';

interface Props {
    children: React.ReactNode;
}

export default function SocketRoute({ children }: Props) {
    const dispatch = useAppDispatch();
    const socket = useSocket();
    const sUser = useAppSelector(selectUser);
    async function getAllConversations() {
        try {
            await dispatch(conversationGetAll()).unwrap();
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    }
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
                if (!(window.location.pathname === APP_PATH.CHAT + '/' + data.data.conversationId)) {
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
            socket?.connect();
            socket?.on(user, function (data: any) {
                handleResponseSocket(data);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>{children}</>;
}
