import Image from 'next/image';
import CrossIcon from '../Icons/chat/CrossIcon';
import DivideIcon from '../Icons/chat/DivideIcon';
import HeartedIcon from '../Icons/chat/HeartedIcon';

interface Props {
    avatar: string;
}

export default function LikeList({ avatar }: Props) {
    return (
        <div className="flex justify-between gap-2 cursor-pointer w-[89px] h-[117px] rounded-lg shadow-md m-2">
            <div>
                <div className="image-container w-[89px] h-[89px] rounded-t-xl overflow-hidden">
                    <Image className="image" src={avatar} alt="avatar_img" layout="fill" />
                </div>
                <div className="flex justify-between items-center px-2.5 py-1.5">
                    <CrossIcon />
                    <DivideIcon />
                    <HeartedIcon />
                </div>
            </div>
        </div>
    );
}
