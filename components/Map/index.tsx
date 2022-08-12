import { Circle, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapUserInfo from './MapUserInfo';
import MapMaker from './MapMaker';
import { useCallback, useState } from 'react';

type Props = {
    isFocus: boolean;
    me?: IResponseUpdateLocation;
    friends: IResponseUpdateLocation[];
    handleFocus: () => void;
};

export default function Map({ me, isFocus, handleFocus, friends }: Props) {
    const [userInfo, setUserInfo] = useState<IResponseUpdateLocation>();

    // const saveUserInfo = (user: IResponseUpdateLocation) => {
    //     setUserInfo(user);
    // };

    const saveUserInfo = useCallback(
        (user: IResponseUpdateLocation) => {
            setUserInfo(user);
        },
        [userInfo],
    );

    return (
        <section className="relative container-np">
            <button
                className="absolute z-[20000] top-4 right-4 px-4 py-2 my-2 font-bold text-white bg-blue-400 rounded-md shadow-md shadow-blue-200"
                onClick={handleFocus}
            >
                Get current location
            </button>
            <MapContainer
                center={
                    me ? [me.lastLocation.latitude, me.lastLocation.longitude] : [10.870330250338068, 106.8030272760722]
                }
                zoom={20}
                scrollWheelZoom={true}
                className="w-full h-screen"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Foxy</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* MapMaker for user location */}
                {me && <MapMaker info={me} current isFocus={isFocus} />}
                {me && (
                    <Circle
                        center={[me.lastLocation.latitude, me.lastLocation.longitude]}
                        radius={200}
                        color="#fac3ce"
                    />
                )}

                {/* MapMaker for user's friends location */}
                {friends?.map((friend, index) => (
                    <MapMaker key={index} info={friend} handleClick={saveUserInfo} />
                ))}
            </MapContainer>
            {userInfo ? <MapUserInfo avatar={userInfo.avatar} name={userInfo.name.lastName} /> : ''}
        </section>
    );
}
