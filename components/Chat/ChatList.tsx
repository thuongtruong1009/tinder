import Image from 'next/image';
import React from 'react';

interface Props {
    name: string;
    avatar: string;
    onClick?: () => Function;
}

export default function ChatList({ name, avatar, onClick }: Props) {
    return (
        <li className="flex items-center gap-4 cursor-pointer" onClick={onClick}>
            <div className="image-container max-w-[200px] rounded-xl overflow-hidden w-12 h-12">
                <Image className="image" src={avatar} alt="avatar_img" layout="fill" />
            </div>
            <p className="font-bold text-neutral-100 body-1">{name}</p>
        </li>
    );
}
