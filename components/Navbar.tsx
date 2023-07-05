import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { memo } from 'react';
import APP_PATH from '../constant/appPath';
import ChatFillIcon from './Icons/ChatFillIcon';
import ChatIcon from './Icons/ChatIcon';
import MapFillIcon from './Icons/MapFillIcon';
import MapIcon from './Icons/MapIcon';
import PeopleFillIcon from './Icons/PeopleFillIcon';
import PeopleIcon from './Icons/PeopleIcon';
import SurfFillIcon from './Icons/SurfFillIcon';
import SurfIcon from './Icons/SurfIcon';
import NavBarItem from './NavBarItem';

const Portal = dynamic(() => import('../HOC/Portal'), { ssr: false });
interface Props {}

function Navbar(props: Props) {
    const router = useRouter();
    return (
        <Portal
            id="navbar"
            className="fixed bottom-0 z-[1000] -translate-x-1/2 left-1/2 max-w-[768px] w-full "
            section="section"
        >
            <div className="py-2 px-[26px] bg-white rounded-t-3xl grid grid-cols-4 gap-4 border border-slate-200 shadow-nav">
                <NavBarItem
                    Icon={<SurfIcon />}
                    IconActive={<SurfFillIcon />}
                    label="Lướt"
                    active={router.route === APP_PATH.SURF}
                    href={APP_PATH.SURF}
                />
                <NavBarItem
                    Icon={<MapIcon />}
                    IconActive={<MapFillIcon />}
                    label="Map"
                    active={router.route === APP_PATH.MAP}
                    href={APP_PATH.MAP}
                />
                <NavBarItem
                    Icon={<ChatIcon />}
                    IconActive={<ChatFillIcon />}
                    label="Trò chuyện"
                    active={router.route === APP_PATH.CHAT}
                    href={APP_PATH.CHAT}
                />
                <NavBarItem
                    Icon={<PeopleIcon />}
                    IconActive={<PeopleFillIcon />}
                    label="Cá nhân"
                    active={router.route === APP_PATH.PROFILE}
                    href={APP_PATH.PROFILE}
                />
            </div>
        </Portal>
    );
}
export default memo(Navbar);
