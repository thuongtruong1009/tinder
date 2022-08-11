import dynamic from 'next/dynamic';
import Navbar from '../../components/Navbar';
import { NextPageWithLayout } from '../../types/global';
const Map = dynamic(() => import('../../components/Map'), { ssr: false });
interface Props {}

const MapContainer: NextPageWithLayout = (props: Props) => {
    return (
        <>
            <Map />
            <Navbar />
        </>
    );
};
export default MapContainer;
