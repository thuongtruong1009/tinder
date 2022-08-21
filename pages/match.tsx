import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CloseIcon from '../components/Icons/CloseIcon';
import MatchTitleIcon from '../components/Icons/match/MathTitleIcon';
import SendIcon from '../components/Icons/match/SendIcon';
import HeartContainer from '../components/Match/HeartWrapper';
import { NextPageWithLayout } from '../types/global';

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
            router.push('/chat');
            return;
        }

        arr.shift();
        setMatchedFriends(arr);
    };
    return (
        <section className="container flex flex-col justify-between text-white matchingFrame p-6.5 h-screen min-h-screen w-screen overflow-hidden overflow-y-auto bg-main-purple">
            <a className="flex flex-row justify-end p-4 text-white cursor-pointer">
                <CloseIcon />
            </a>
            <HeartContainer matchedFriend={matchedFriends && matchedFriends[0]} />
            <div className="flex-center flex-col gap-[1.6rem]">
                {/* <h2 className="text-3xl match-title text-neutral-100">IT'S A MATCH</h2> */}
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
        </section>
    );
};

// Matching.protected = true;
export default Matching;
