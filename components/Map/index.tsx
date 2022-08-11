import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapUserInfo from './MapUserInfo';

interface Props {}

export default function Map(props: Props) {
    return (
        <section className="relative container-np">
            <MapContainer
                center={[10.870330250338068, 106.8030272760722]}
                zoom={20}
                scrollWheelZoom={true}
                className="w-full h-screen"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Foxy</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <MapUserInfo />
        </section>
    );
}
