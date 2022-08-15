import Image from 'next/image';
import CloseIcon from '../Icons/CloseIcon';
import HeartIcon from '../Icons/HeartIcon';
import InformationIcon from '../Icons/InformationIcon';
import LocationIcon from '../Icons/LocationIcon';
import CircleButton from './CircleButton';

type Props = {
    user: IResponseUser;
    onSeen: (user: IResponseUser) => () => void;
};

const UserCard = ({ user, onSeen }: Props) => {
    return (
        <div className="image-container rounded-[40px] h-[70vh] overflow-hidden">
            <Image className="object-cover image" alt="avatar" objectPosition="top" layout="fill" src={user.avatar} />
            <div className="absolute bottom-0 w-full px-4">
                <div className="justify-between mb-2 flex-center-y">
                    <h3 className="text-white">
                        {user.name.firstName + ' ' + user.name.lastName}, {user.age || '?'}t
                    </h3>

                    <button onClick={onSeen(user)}>
                        <InformationIcon />
                    </button>
                </div>

                <div className="px-2 py-1 bg-white flex-center-y rounded-[25px] w-fit gap-2 mb-7">
                    <LocationIcon />
                    <span className="text-caption-1 leading-caption-1">Cách {user.distance}m</span>
                </div>

                <div className="justify-center gap-10 mb-6 flex-center-y">
                    <CircleButton Icon={<CloseIcon />} />
                    <CircleButton Icon={<HeartIcon />} />
                </div>
            </div>
        </div>
    );
};

export default UserCard;
