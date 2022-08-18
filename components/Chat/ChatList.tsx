import React from 'react';

interface Props {
    name: string;
    avatar: string;
    onClick?: () => Function;
}

export default function ChatList({ name, avatar, onClick }: Props) {
    return (
        <li className="flex items-center gap-4 cursor-pointer" onClick={onClick}>
            <p className={'bg-cover w-12 h-12 bg-[url(' + avatar + ')]'}></p>
            <p className="text-neutral-100 body-1 font-bold">{name}</p>
        </li>
    );
}
