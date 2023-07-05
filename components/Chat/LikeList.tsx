import Image from 'next/image';
import CrossIcon from '../Icons/chat/CrossIcon';
import DivideIcon from '../Icons/chat/DivideIcon';
import HeartedIcon from '../Icons/chat/HeartedIcon';
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import { spliceText } from '../../utils/text';

interface Props {
    avatar: string;
    name: string;
    loved: boolean;
}

export default function LikeList({ avatar, name, loved }: Props) {
    return (
        <div className="flex justify-between gap-2 cursor-pointer w-[89px] rounded-lg shadow-md m-2">
            <div>
                <div className="image-container w-[89px] h-[89px] rounded-t-xl overflow-hidden">
                    <Image className="image" src={avatar} alt="avatar_img" layout="fill" />
                </div>
                <div className="flex justify-between items-center px-2.5 py-1.5">
                    <CrossIcon />
                    <DivideIcon />
                    {loved ? <HeartedIcon /> : <AiOutlineHeart />}
                </div>
                <div className="text-xs text-center text-neutral-80">
                    <span className="truncate">{spliceText(name, 10)}</span>
                </div>
            </div>
        </div>
    );
}
