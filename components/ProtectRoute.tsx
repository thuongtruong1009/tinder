import { useRouter } from 'next/router';
import APP_PATH from '../constant/appPath';
import { useAppSelector } from '../hooks/redux';
import { selectUser } from '../redux/reducers/userSlice';

interface Props {
    children: React.ReactNode;
}

export default function ProtectRoute({ children }: Props) {
    const router = useRouter();
    const sUser = useAppSelector(selectUser);
    if (!sUser.isLogin) {
        router.push(APP_PATH.ROOT);
        return null;
    }
    return <>{children}</>;
}
