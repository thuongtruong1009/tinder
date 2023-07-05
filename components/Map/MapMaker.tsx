import { Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { memo, useEffect } from 'react';
import L from 'leaflet';

interface Props {
    info: IResponseUpdateLocation;
    current?: boolean;
    isFocus?: boolean;
    onClick?: (user: IFindFriendsAroundResponse) => void;
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
        iconUrl: '/Pin.svg',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        // className: ' translate-y-full',
    });
}

function MapMaker({ isFocus, info, current, onClick }: Props) {
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
                eventHandlers={{
                    click: () => {
                        {
                            onClick && onClick(info);
                        }
                    },
                }}
                position={[info.lastLocation.latitude, info.lastLocation.longitude]}
                icon={current ? getIconMarkerMe(info.avatar) : getIconMarkerFriends(info.avatar)}
            ></Marker>
        </>
    );
}
// export default (MapMaker);
export default memo(MapMaker);
