import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SocketProvider } from '../../context/SocketContext';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectConversation } from '../../redux/reducers/conversationSlice';
import { selectMatch } from '../../redux/reducers/matchSlice';
import { conversationGetAll } from '../../redux/actions/conversationActions';
import { toastError } from '../../utils/toast';
import { selectUser } from '../../redux/reducers/userSlice';
import APP_PATH from '../../constant/appPath';
import Matching from '../Match/Matching';
import UpdateInfo from '../UpdateInfo';
import SocketRoute from './SocketRoute';

interface Props {
    children: React.ReactNode;
}
export default function ProtectRoute({ children }: Props) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const sMatch = useAppSelector(selectMatch);
    const sConversation = useAppSelector(selectConversation);
    const sUser = useAppSelector(selectUser);
    async function getAllConversations() {
        try {
            await dispatch(conversationGetAll()).unwrap();
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    }
    useEffect(() => {
        if (sUser.isLogin) {
            !sConversation.isCalled && getAllConversations();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
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
                <SocketProvider>
                    <SocketRoute>{children}</SocketRoute>
                </SocketProvider>
            </>
        );
    }
    return render();
}
