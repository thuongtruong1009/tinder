import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import mapApi from '../apis/mapApi';
import Navbar from '../components/Navbar';
import NavbarLayout from '../components/NavbarLayout';
import { NextPageWithLayout } from '../types/global';
import { toastError } from '../utils/toast';
const Map = dynamic(() => import('../components/Map'), { ssr: false });

const MapContainer: NextPageWithLayout = () => {
    const [userLocation, setUserLocation] = useState<IResponseUpdateLocation[] | any>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [friends, setFriends] = useState<IResponseUpdateLocation[] | any>([]);
    const handlePermission = async () => {
        navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
            if (result.state === 'granted') {
                navigator.geolocation.getCurrentPosition(async function (position) {
                    const response1 = await mapApi.updateLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setUserLocation(response1.data);
                    const response2 = await mapApi.findFriendsAround();
                    setFriends(response2.data);
                });
            } else {
                toastError('You need to allow location permission to use this feature');
            }
        });
    };

    const handleFocus = () => {
        setIsFocus((pre) => !pre);
    };

    useEffect(() => {
        handlePermission();
        return () => {
            setUserLocation(null);
            setFriends([]);
        };
    }, []);
    return (
        <>
            <Map me={userLocation || undefined} isFocus={isFocus} handleFocus={handleFocus} friends={friends} />
        </>
    );
};
MapContainer.protected = true;
MapContainer.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;
export default MapContainer;
