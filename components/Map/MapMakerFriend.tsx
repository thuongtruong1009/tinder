import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { memo } from 'react';
import L from 'leaflet';

interface Props {
    info: IStranger;
    onClick?: (user: IStranger) => void;
}
function getIconMarker() {
    return L.icon({
        iconUrl: '/Pin.svg',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
    });
}

function MapMakerFriend({ info, onClick }: Props) {
    return (
        <>
            <Marker
                eventHandlers={{
                    click: () => {
                        {
                            onClick && onClick(info);
                        }
                    },
                }}
                position={[info.lastLocation.latitude, info.lastLocation.longitude]}
                icon={getIconMarker()}
            ></Marker>
        </>
    );
}
// export default (MapMaker);
export default memo(MapMakerFriend);
