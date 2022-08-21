import { useState, useRef } from 'react';
import { Popover } from '@headlessui/react';
import { NextPageWithLayout } from '../../types/global';
import { useRouter } from 'next/router';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import ThreeDotIcon from '../../components/Icons/ThreeDotIcon';
import Image from 'next/image';
import RightArrowIcon from '../../components/Icons/RightArrowIcon';
import APP_PATH from '../../constant/appPath';
import LovedStatusIcon from '../../components/Icons/chat/LovedStatusIcon';
import PlusIcon from '../../components/Icons/PlusIcon';
import SendIcon from '../../components/Icons/SendIcon';
import IconSetIcon from '../../components/Icons/chat/IconSetIcon';
import InfiniteScroll from 'react-infinite-scroll-component';
import MessageItem from '../../components/Chat/MessageItem';
import { BsImage } from 'react-icons/bs';
export enum EMessageType {
    TEXT = 'text',
    IMAGE = 'image',
}
export interface IMessageItem {
    value: string;
    type: EMessageType;
}

const messages = [
    {
        _id: 1,
        senderId: 1,
        receiverId: 2,
        message: [
            {
                value: 'Chào iem, c đứng đây từ chiều🥰', //Hello
                type: EMessageType.TEXT,
            },
        ],
    },
    {
        _id: 2,
        senderId: 2,
        receiverId: 1,
        message: [
            {
                value: 'Hello chị Thảo 💖',
                type: EMessageType.TEXT,
            },
        ],
    },
    {
        _id: 3,
        senderId: 2,
        receiverId: 1,
        message: [
            {
                value: '/assets/images/temp.png', //favoriteImage1.png
                type: EMessageType.IMAGE,
            },
        ],
    },
    {
        _id: 4,
        senderId: 1,
        receiverId: 2,
        message: [
            {
                value: 'Hello',
                type: EMessageType.TEXT,
            },
        ],
    },
    {
        _id: 4,
        senderId: 1,
        receiverId: 2,
        message: [
            {
                value: '/assets/images/favoriteImage1.png',
                type: EMessageType.IMAGE,
            },
        ],
    },
    {
        _id: 4,
        senderId: 1,
        receiverId: 2,
        message: [
            {
                value: 'Hello',
                type: EMessageType.TEXT,
            },
        ],
    },
    {
        _id: 4,
        senderId: 1,
        receiverId: 2,
        message: [
            {
                value: 'Hello',
                type: EMessageType.TEXT,
            },
        ],
    },
    {
        _id: 4,
        senderId: 1,
        receiverId: 2,
        message: [
            {
                value: 'Hello',
                type: EMessageType.TEXT,
            },
        ],
    },
    {
        _id: 4,
        senderId: 1,
        receiverId: 2,
        message: [
            {
                value: 'Hello',
                type: EMessageType.TEXT,
            },
        ],
    },
];

const Room: NextPageWithLayout = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const router = useRouter();
    const { userId } = router.query;

    const onBack = () => {
        router.push(APP_PATH.CHAT);
    };

    const visitProfile = () => {
        router.push(APP_PATH.PROFILE);
    };

    const handleUpload = () => {
        const input = inputRef.current;
        if (input) {
            input.click();
        }
    };
    const handleChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const images = e.target.files;
        if (images) {
            setFiles([...files, ...images]);
        }
    };
    return (
        <section className="container relative flex flex-col bg-white">
            <input
                multiple
                className="hidden"
                type="file"
                name="file"
                id="file"
                onChange={handleChangeUpload}
                ref={inputRef}
                accept="image/*"
            />
            <Title
                className="py-0.5 flex-shrink-0"
                content={
                    <div className="justify-between flex-center-y">
                        <div className="p-2 cursor-pointer" onClick={onBack}>
                            <ArrowLeft />
                        </div>
                        <div className="p-2 cursor-pointer bg-neutral-5 rounded-xl">
                            <ThreeDotIcon />
                        </div>
                    </div>
                }
            />
            <div className="flex items-center justify-between flex-shrink-0 py-4">
                <div className="relative flex justify-between">
                    <LovedStatusIcon className="absolute bottom-0 z-20 left-9" />
                    <div className="w-12 h-12 mr-5 image-container rounded-2xl">
                        <Image className="image" src="/assets/images/chat_avatar.png" alt="jdiwed" layout="fill" />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold body-1 text-neutral-100">Chị Thảo, HR</p>
                        <span className="text-xs opacity-50">Cô bé ngây thơ</span>
                    </div>
                </div>
                <RightArrowIcon onClick={visitProfile} />
            </div>
            <div className=" h-[calc(100vh-208px)] flex gap-4 flex-col-reverse overflow-auto px-4 py-2">
                {messages.map((message, index) => (
                    <MessageItem key={index} isMe={message.receiverId === 1} messages={message.message} />
                ))}
            </div>
            {/* <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={this.refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
                releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
            >
                {items}
            </InfiniteScroll> */}
            <div className="flex gap-4 overflow-auto">
                {files.map((file, index) => (
                    <div className="flex-shrink-0 h-10 image-container" key={index}>
                        <Image className="image" src={URL.createObjectURL(file)} alt="demo_img" layout="fill" />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between flex-shrink-0 w-full gap-2 py-6 mt-auto">
                <Popover className="relative">
                    <Popover.Button>
                        <PlusIcon />
                    </Popover.Button>

                    <Popover.Panel className="absolute left-0 z-10 bottom-[calc(100%+1rem)]">
                        <div className="gap-2 p-2 bg-white rounded-md shadow-md flex-center-y">
                            <Popover.Button className="p-2 border rounded-full border-slate-200" onClick={handleUpload}>
                                <BsImage />
                            </Popover.Button>
                        </div>
                    </Popover.Panel>
                </Popover>
                <div className="w-[267px] h-9 bg-neutral-5 rounded-3xl py-2 px-2 body-2 flex justify-between items-center">
                    <input type="text" className="bg-neutral-5 body-2 px-2 w-[94%] h-full" autoFocus placeholder="Aa" />
                    <IconSetIcon />
                </div>
                <div className="text-white rounded-full cursor-pointer bg-main-purple flex-center w-9 h-9">
                    <SendIcon />
                </div>
            </div>
        </section>
    );
};

// Index.protected = true;
export default Room;
