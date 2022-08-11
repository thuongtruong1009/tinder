import dynamic from 'next/dynamic';
import Navbar from '../../components/Navbar';
const Map = dynamic(() => import('../../components/Map'), { ssr: false });
interface Props {}

export default function MapContainer(props: Props) {
    return (
        <>
            <Map />
            <Navbar />
        </>
    );
}
