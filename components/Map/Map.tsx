import { Circle, MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import MapMaker from './MapMaker';

type Props = {
    isFocus: boolean;
    me?: IResponseUpdateLocation;
    friends: IResponseUpdateLocation[];
    handleFocus: () => void;
};

const Map: React.FC<Props> = ({ isFocus, me, friends, handleFocus }) => {
    return (
        <>
            <div className="relative">
                <button
                    className="absolute z-[20000] top-4 right-4 px-4 py-2 my-2 font-bold text-white bg-blue-400 rounded-md shadow-md shadow-blue-200"
                    onClick={handleFocus}
                >
                    Get current location
                </button>
                <MapContainer
                    center={
                        me
                            ? [me.lastLocation.latitude, me.lastLocation.longitude]
                            : [10.870330250338068, 106.8030272760722]
                    }
                    zoom={20}
                    scrollWheelZoom={true}
                    className="w-[800px] aspect-square"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Foxy</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {me && <MapMaker info={me} current isFocus={isFocus} />}
                    {me && (
                        <Circle
                            center={[me.lastLocation.latitude, me.lastLocation.longitude]}
                            radius={200}
                            color="#fac3ce"
                        />
                    )}
                    {friends?.map((friend, index) => (
                        <MapMaker key={index} info={friend} />
                    ))}
                </MapContainer>
            </div>
        </>
    );
};

export default Map;
