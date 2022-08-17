import { Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { memo, useEffect } from 'react';
import L from 'leaflet';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducers/userSlice';

interface Props {
    info: IUserLocation;
    isFocus?: boolean;
}

function getIconMarker(imageUrl: string) {
    return L.icon({
        iconUrl: imageUrl,
        iconSize: [50, 50],
        className: 'rounded-full border-2 border-red-500 object-cover',
    });
}

function MapMaker({ isFocus, info }: Props) {
    const userAvatar = useSelector(selectUser).data?.avatar;
    const map = useMapEvents({});
    useEffect(() => {
        if (info) {
            map.flyTo([info.latitude, info.longitude], 18);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocus]);

    return (
        <>
            <Marker position={[info.latitude, info.longitude]} icon={getIconMarker(userAvatar || '')}></Marker>
        </>
    );
}
export default memo(MapMaker);
