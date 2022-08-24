import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducers/userSlice';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
timeago.register('vi', vi);
import vi from 'timeago.js/lib/lang/vi';

interface Props {
    name: string;
    avatar: string;
    onClick?: () => void;
    lastMessage?: IMessage;
}

export default function ChatListItem({ name, avatar, onClick, lastMessage }: Props) {
    const userId = useSelector(selectUser).data?._id;
    return (
        <li className="flex items-center gap-4 cursor-pointer" onClick={onClick}>
            <div className="image-container max-w-[200px] rounded-xl overflow-hidden w-12 h-12 flex-shrink-0">
                <Image className="image" src={avatar} alt="avatar_img" layout="fill" />
            </div>
            <div className="flex-1">
                <p className="font-bold text-neutral-100 body-1 line-clamp-1">{name}</p>
                {lastMessage && (
                    <span className="body-2 text-neutral-40 line-clamp-1">
                        {lastMessage.senderId._id === userId ? 'Bạn: ' : ''}
                        {lastMessage.messages[0].type === 'text' ? lastMessage.messages[0].value : '📷'}
                    </span>
                )}
            </div>
            {lastMessage && (
                <div className="flex-shink-0 text-neutral-40 body-2">
                    <TimeAgo datetime={new Date(lastMessage?.updatedAt)} locale="vi" />
                </div>
            )}
        </li>
    );
}
