import { Circle, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapUserInfo from './MapUserInfo';
import MapMaker from './MapMaker';
import { Dispatch, useState } from 'react';
import LocationIcon from '../Icons/LocationIcon';
import MapMakerFriend from './MapMakerFriend';
import SurtItem from '../Surf/SurtItem';
import { useAppDispatch } from '../../hooks/redux';
import { userBlockUser, userLikeUser } from '../../redux/actions/userActions';
import { toastError, toastSuccess } from '../../utils/toast';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

type Props = {
    isFocus: boolean;
    me?: IUserLocation;
    friends: IStranger[];
    handleFocus: () => void;
    setFriends: Dispatch<any>;
};

export default function Map({ me, isFocus, handleFocus, friends, setFriends }: Props) {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [userInfo, setUserInfo] = useState<IStranger>();
    const saveUserInfo = (user: IStranger) => {
        setUserInfo(user);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleLike = async (_id: string) => {
        try {
            await dispatch(userLikeUser(_id)).unwrap();
            setFriends([...friends.filter((user) => user._id !== _id)]);
            setUserInfo(undefined);
            toastSuccess('Bạn đã thích thành công');
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    const handleBlock = async (_id: string) => {
        try {
            await dispatch(userBlockUser(_id)).unwrap();
            setFriends([...friends.filter((user) => user._id !== _id)]);
            setUserInfo(undefined);
            toastSuccess('Bạn đã chặn thành công');
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    const handleNext = (currentPerson: IStranger | undefined) => () => {
        if (!currentPerson) {
            setUserInfo(friends[0]);
        } else {
            const personIndex = friends.findIndex((person) => person._id === currentPerson._id);
            if (personIndex >= 0) {
                if (personIndex === friends.length - 1) {
                    setUserInfo(friends[0]);
                } else {
                    setUserInfo(friends[personIndex + 1]);
                }
            }
        }
    };

    const handlePrevious = (currentPerson: IStranger | undefined) => () => {
        if (!currentPerson) {
            setUserInfo(friends[friends.length - 1]);
        } else {
            const personIndex = friends.findIndex((person) => person._id === currentPerson._id);
            if (personIndex >= 0) {
                if (personIndex === 0) {
                    setUserInfo(friends[friends.length - 1]);
                } else {
                    setUserInfo(friends[personIndex - 1]);
                }
            }
        }
    };

    return (
        <section className="relative bg-white container-np">
            {me ? (
                <>
                    <button
                        className="absolute z-[500] top-4 right-4 p-2 first-letter:font-bold bg-white rounded-sm shadow-md border-2 border-slate-100"
                        onClick={handleFocus}
                    >
                        <LocationIcon />
                    </button>

                    <button
                        className="absolute z-[500] top-16 right-4 p-2 first-letter:font-bold bg-white rounded-sm shadow-md border-2 border-slate-100"
                        onClick={handleNext(userInfo)}
                    >
                        <BiSkipNext />
                    </button>

                    <button
                        className="absolute z-[500] top-24 right-4 p-2 first-letter:font-bold bg-white rounded-sm shadow-md border-2 border-slate-100"
                        onClick={handlePrevious(userInfo)}
                    >
                        <BiSkipPrevious />
                    </button>
                </>
            ) : (
                <div className="absolute-center z-[500] text-center p-2 bg-white rounded-md shadow-md text-red-600">
                    Vui lòng cấp quyền truy cập vị trí
                </div>
            )}

            <MapContainer
                center={me ? [me.latitude, me.longitude] : [10.870330250338068, 106.8030272760722]}
                zoom={20}
                scrollWheelZoom={true}
                className="w-full h-screen"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Foxy</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {me && (
                    <>
                        <MapMaker info={me} isFocus={isFocus} />
                        <Circle center={[me.latitude, me.longitude]} radius={200} color="#fac3ce" />
                    </>
                )}
                {friends?.map((friend, index) => (
                    <MapMakerFriend key={index} info={friend} onClick={saveUserInfo} />
                ))}
            </MapContainer>
            {userInfo && <MapUserInfo data={userInfo} onClick={() => setIsOpen(true)} />}
            {isOpen && userInfo && (
                <SurtItem stranger={userInfo} onClose={handleClose} onLike={handleLike} onBlock={handleBlock} />
            )}
        </section>
    );
}
