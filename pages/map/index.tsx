import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import mapApi from '../../apis/mapApi';
import Navbar from '../../components/Navbar';
import { NextPageWithLayout } from '../../types/global';
const Map = dynamic(() => import('../../components/Map'), { ssr: false });
interface Props {}

const MapContainer: NextPageWithLayout = (props: Props) => {
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

    // const userLocation = {
    //     name: {
    //         firstName: 'Vo',
    //         lastName: 'Xuan Tu',
    //     },
    //     avatar: 'https://res.cloudinary.com/cake-shop/image/upload/v1659235088/avatar1_h6a1gw.jpg',
    //     lastLocation: {
    //         _id: '123',
    //         latitude: 10.880168135975609,
    //         longitude: 106.8082633,
    //     },
    // };

    // const friends = [
    //     {
    //         name: {
    //             firstName: 'Nguyen',
    //             lastName: 'Van An',
    //         },
    //         avatar: 'https://res.cloudinary.com/cake-shop/image/upload/v1659235088/avatar1_h6a1gw.jpg',
    //         lastLocation: {
    //             _id: '123',
    //             latitude: 10.877923964761523,
    //             longitude: 106.80620336346686,
    //         },
    //     },
    //     {
    //         name: {
    //             firstName: 'Nguyen',
    //             lastName: 'Xuan Tu',
    //         },
    //         avatar: 'https://res.cloudinary.com/cake-shop/image/upload/v1659235088/avatar1_h6a1gw.jpg',
    //         lastLocation: {
    //             _id: '123',
    //             latitude: 10.876475253689541,
    //             longitude: 106.8084456902082,
    //         },
    //     },
    //     {
    //         name: {
    //             firstName: 'Ho',
    //             lastName: 'Hai',
    //         },
    //         avatar: 'https://res.cloudinary.com/cake-shop/image/upload/v1659235088/avatar1_h6a1gw.jpg',
    //         lastLocation: {
    //             _id: '123',
    //             latitude: 10.881025073968217,
    //             longitude: 106.80711631374582,
    //         },
    //     },
    // ];

    return (
        <>
            <Map me={userLocation || undefined} isFocus={isFocus} handleFocus={handleFocus} friends={friends} />
            <Navbar />
        </>
    );
};
export default MapContainer;
