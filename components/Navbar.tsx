import dynamic from 'next/dynamic';
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

export default function Navbar(props: Props) {
    return (
        <Portal
            id="navbar"
            className="fixed bottom-0 z-[9999] -translate-x-1/2 left-1/2 max-w-[377px] w-full "
            section="section"
        >
            <div className="py-2 px-[26px] bg-white rounded-t-3xl grid grid-cols-4 gap-4">
                <NavBarItem Icon={<SurfIcon />} IconActive={<SurfFillIcon />} label="Lướt" active />
                <NavBarItem Icon={<MapIcon />} IconActive={<MapFillIcon />} label="Map" />
                <NavBarItem Icon={<ChatIcon />} IconActive={<ChatFillIcon />} label="Trò chuyện" />
                <NavBarItem Icon={<PeopleIcon />} IconActive={<PeopleFillIcon />} label="Cá nhân" active />
                {/* <button className="px-5 py-2 flex-col-center gap-y-1">
                    <SurfIcon />
                    <p className="text-xs leading-4 text-neutral-40">Cá nhân</p>
                </button> */}
            </div>
        </Portal>
    );
}
