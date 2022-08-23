import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdOutlineTravelExplore } from 'react-icons/md';
import React, { Fragment, useState } from 'react';
import CloseIcon from '../components/Icons/CloseIcon';
import MatchTitleIcon from '../components/Icons/match/MathTitleIcon';
import SendIcon from '../components/Icons/match/SendIcon';
import HeartContainer from '../components/Match/HeartWrapper';
import { Popover } from '@headlessui/react';
import { NextPageWithLayout } from '../types/global';
import BellIcon from '../components/Icons/BellIcon';
import dynamic from 'next/dynamic';
import APP_PATH from '../constant/appPath';

const Portal = dynamic(() => import('../HOC/Portal'), { ssr: false });

const Matching: NextPageWithLayout = () => {
    const router = useRouter();
    const [greetMessage, setGreetMessage] = useState('');
    const [matchedFriends, setMatchedFriends] = useState([
        {
            id: '1',
            imgUrl: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/298063211_1973168512884226_6538560832333257903_n.jpg?stp=cp1_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=UnlEswaxwr4AX-W0E4b&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT_ip0e5MyMpvgJET6FpJA2-p3kAsrkoEt3NJMSIKANszw&oe=6304A332',
        },
        {
            id: '2',
            imgUrl: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.18169-9/13007112_940696449378224_6234918812435202765_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=xCqHm4J7vGUAX9iZlIP&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_qcCqe7B-iaQiWC8vLrKFJ56HwUl-bvUGXjPgmMOXnkQ&oe=6323BE9C',
        },
    ]);
    const handleInput = (e: any) => {
        setGreetMessage(e.target.value);
    };
    const handleSend = (e: FormDataEvent) => {
        e.preventDefault();
        setGreetMessage('');
    };
    const handleSkip = () => {
        const arr = [...matchedFriends];

        if (arr.length === 0) {
            router.push(APP_PATH.CHAT);
            return;
        }

        arr.shift();
        setMatchedFriends(arr);
    };

    const onFindOther = () => {
        router.push(APP_PATH.SURF);
    };
    return (
        <Portal
            id="navbar"
            className="fixed bottom-0 z-[1000] -translate-x-1/2 left-1/2 max-w-[377px] w-full "
            section="section"
        >
            {matchedFriends.length > 0 && (
                <section className="container flex flex-col justify-between text-white matchingFrame p-6.5 h-screen min-h-screen w-screen overflow-hidden overflow-y-auto bg-main-purple">
                    <a className="flex flex-row justify-end p-4 text-white cursor-pointer">
                        <CloseIcon />
                    </a>

                    <div className="flex flex-col gap-20">
                        <HeartContainer matchedFriend={matchedFriends && matchedFriends[0]} />
                        <div className="flex-center flex-col gap-[1.6rem]">
                            <MatchTitleIcon className="text-3xl match-title text-neutral-100" />
                            <p className="text-base font-normal text-center">
                                Đừng để người ấy phải đợi, <br />
                                gửi lời chào ngay!
                            </p>
                        </div>
                        <div className="w-full flex flex-col mb-4 gap-[2.2rem]">
                            <form
                                onSubmit={handleSend}
                                className="relative flex flex-row justify-between w-full p-2.5 bg-white rounded-3xl text-main-purple"
                            >
                                <input
                                    className="w-[90%] px-2.5 text-base font-bold rounded-4xl placeholder:text-main-purple"
                                    type="text"
                                    onChange={handleInput}
                                    value={greetMessage}
                                    placeholder="Gửi lời chào"
                                />
                                <button type="submit" onClick={handleSend} className="bg-white">
                                    <SendIcon />
                                </button>
                            </form>
                            <button onClick={handleSkip} className="font-normal bg-main-purple">
                                Skip
                            </button>
                        </div>
                    </div>
                </section>
            )}
            {matchedFriends < 1 && (
                <section className="container-np flex flex-col justify-between text-white p-6.5 h-screen min-h-screen w-screen overflow-hidden overflow-y-auto">
                    <a className="flex flex-row justify-end p-4 text-neutral-80 cursor-pointer">
                        <CloseIcon />
                    </a>
                    <div className="image-container">
                        <Image className="image" src="/assets/images/empty_match.jpg" alt="empty_img" layout="fill" />
                    </div>
                    <div className="flex-center mb-4">
                        <button className="bg-[#E56A4C] rounded-xl px-5 py-2 flex-center gap-2" onClick={onFindOther}>
                            <MdOutlineTravelExplore />
                            Discover new people
                        </button>
                    </div>
                </section>
            )}
        </Portal>
    );
};

// Matching.protected = true;
export default Matching;
