import { LatLngExpression } from 'leaflet';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import mapApi from '../../apis/mapApi';
const MyMap = dynamic(() => import('../../components/Map/Map'), { ssr: false });

function Map() {
    const [currentLocation, setCurrentLocation] = useState<{
        latitude: number | null;
        longitude: number | null;
    }>({
        latitude: null,
        longitude: null,
    });
    const [userLocation, setUserLocation] = useState<IResponseUpdateLocation[] | any>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [friends, setFriends] = useState<IResponseUpdateLocation[] | any>([]);
    const handlePermission = async () => {
        navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
            if (result.state === 'granted') {
                navigator.geolocation.getCurrentPosition(async function (position) {
                    setCurrentLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    const response1 = await mapApi.updateLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setUserLocation(response1);
                    const response2 = await mapApi.findFriendsAround();
                    setFriends(response2);
                });
            } else {
                toast.error('You need to allow location permission to use this feature');
            }
        });
    };
    useEffect(() => {
        handlePermission();
    }, []);

    const handleFocus = () => {
        setIsFocus((pre) => !pre);
    };

    return (
        <>
            <MyMap me={userLocation || undefined} isFocus={isFocus} handleFocus={handleFocus} friends={friends} />
        </>
    );
}
export default Map;
