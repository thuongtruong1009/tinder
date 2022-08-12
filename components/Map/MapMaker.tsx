import { Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { memo, useEffect, useState } from 'react';
import MapUserInfo from './MapUserInfo';

interface Props {
    info: IResponseUpdateLocation;
    current?: boolean;
    isFocus?: boolean;
    handleClick?: (user: IResponseUpdateLocation) => void;
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
    });
}

function MapMaker({ isFocus, info, current, handleClick }: Props) {
    const [isClick, setIsClick] = useState(false);

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
                    click: (e: any) => {
                        {
                            handleClick && handleClick(info);
                        }
                    },
                }}
                position={[info.lastLocation.latitude, info.lastLocation.longitude]}
                icon={current ? getIconMarkerMe(info.avatar) : getIconMarkerFriends(info.avatar)}
            >
                {isClick ? <MapUserInfo avatar={info.avatar} name={info.name.lastName} /> : ''}
            </Marker>
        </>
    );
}
// export default (MapMaker);
export default memo(MapMaker);
