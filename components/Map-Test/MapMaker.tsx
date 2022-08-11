import { Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './Map.module.css';
import { memo, useEffect } from 'react';
interface Props {
    info: IResponseUpdateLocation;
    current?: boolean;
    isFocus?: boolean;
}

function getIconMarkerMe(imageUrl: string) {
    return L.icon({
        iconUrl: imageUrl,
        iconSize: [50, 50],
        className: 'rounded-full border-2 border-red-500',
    });
}
function getIconMarkerFriends(imageUrl: string) {
    return L.icon({
        iconUrl: imageUrl,
        iconSize: [50, 50],
        className: 'rounded-full border-2 border-blue-500',
    });
}
function MapMaker({ isFocus, info, current }: Props) {
    const map = useMapEvents({});
    useEffect(() => {
        if (info && current) {
            map.flyTo([info.lastLocation.latitude, info.lastLocation.longitude], 18);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocus]);
    return (
        <>
            <Marker
                position={[info.lastLocation.latitude, info.lastLocation.longitude]}
                icon={current ? getIconMarkerMe(info.avatar) : getIconMarkerFriends(info.avatar)}
            >
                <Popup>{info.name.firstName + ' ' + info.name.lastName}</Popup>
            </Marker>
        </>
    );
}
// export default (MapMaker);
export default memo(MapMaker);
