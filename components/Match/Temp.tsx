import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdOutlineTravelExplore } from 'react-icons/md';
import React, { useState } from 'react';
import APP_PATH from '../../constant/appPath';
import CloseIcon from '../Icons/CloseIcon';
import HeartContainer from './HeartWrapper';
import MatchTitleIcon from '../Icons/match/MathTitleIcon';
import SendIcon from '../Icons/SendIcon';

interface Props {
    onClose: () => void;
}

export default function Matching({ onClose }: Props) {
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
        <section
            id="navbar"
            className="fixed bottom-0 left-0 max-w-[385px] w-full animate-up container-np top-0 inset-x-0 h-screen z-[1001] overflow-auto bg-white"
        >
            {matchedFriends.length > 0 && (
                <div className="container-np flex flex-col justify-between text-white matchingFrame p-6.5 h-screen min-h-screen w-screen overflow-hidden overflow-y-auto bg-main-purple">
                    <a className="flex flex-row justify-end p-4 text-white cursor-pointer">
                        <button onClick={onClose}>
                            <CloseIcon />
                        </button>
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
                        <div className="w-full flex flex-col mb-4 px-4 gap-[2.2rem]">
                            <form
                                onSubmit={handleSend}
                                className="relative flex flex-row justify-between w-full p-2.5 bg-white rounded-3xl text-main-purple"
                            >
                                <input
                                    className="w-full px-2.5 text-base font-bold rounded-4xl placeholder:text-main-purple"
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
                </div>
            )}
            {matchedFriends.length < 1 && (
                <div className="container-np flex flex-col justify-between text-white p-6.5 h-screen min-h-screen w-screen overflow-hidden overflow-y-auto">
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
                </div>
            )}
        </section>
    );
}
