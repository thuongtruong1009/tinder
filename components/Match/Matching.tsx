import { useRouter } from 'next/router';
import React, { useState } from 'react';
import APP_PATH from '../../constant/appPath';
import CloseIcon from '../Icons/CloseIcon';
import HeartContainer from './HeartWrapper';
import MatchTitleIcon from '../Icons/match/MathTitleIcon';
import SendIcon from '../Icons/SendIcon';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { closeMatch, selectMatch, skipMatch } from '../../redux/reducers/matchSlice';
import Image from 'next/image';
import { notificationUpdateSeenNotification } from '../../redux/actions/notificationAction';
import { toastError } from '../../utils/toast';
import { selectConversation } from '../../redux/reducers/conversationSlice';

export default function Matching() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const sMatch = useAppSelector(selectMatch);
    const sConversation = useAppSelector(selectConversation);
    const [greetMessage, setGreetMessage] = useState('');
    const handleInput = (e: any) => {
        setGreetMessage(e.target.value);
    };
    const handleSend = () => {
        const conversation = sConversation.data.find(
            (item) => item.conversation.users[0]._id === sMatch.data[0].user[1]._id,
        );
        conversation && router.push(`${APP_PATH.CHAT}/${conversation.conversation._id}`);
        dispatch(closeMatch());
    };
    const handleClose = async () => {
        try {
            sMatch.data.forEach(async (item: any) => {
                await dispatch(notificationUpdateSeenNotification(item._id)).unwrap();
            });
            dispatch(closeMatch());
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };
    const handleSkip = async () => {
        try {
            await dispatch(notificationUpdateSeenNotification(sMatch.data[0]._id)).unwrap();
            dispatch(skipMatch());
            if (sMatch.data.length === 0) {
                router.push(APP_PATH.CHAT);
                return;
            }
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    const onFindOther = () => {
        dispatch(closeMatch());
        router.push(APP_PATH.SURF);
    };
    return (
        <section id="navbar" className="fixed inset-y-0 w-full animate-up inset-x-0 z-[1001] overflow-auto bg-white">
            {sMatch.data.length > 0 && (
                <div className="container-np flex flex-col justify-between text-white matchingFrame p-6.5 h-screen min-h-screen w-screen overflow-hidden overflow-y-auto bg-main-purple">
                    <button className="flex flex-row justify-end p-4 text-white cursor-pointer" onClick={handleClose}>
                        <CloseIcon />
                    </button>

                    <div className="flex flex-col gap-20">
                        {sMatch.data[0] && (
                            <HeartContainer
                                key={sMatch.data[0]._id}
                                id={sMatch.data[0]._id}
                                user={sMatch.data[0].user[1]}
                            />
                        )}
                        <div className="flex-center flex-col gap-[1.6rem]">
                            <MatchTitleIcon className="text-3xl match-title text-neutral-100" />
                            <p className="text-base font-normal text-center">
                                Đừng để người ấy phải đợi, <br />
                                gửi lời chào ngay!
                            </p>
                        </div>
                        <div className="w-full flex flex-col mb-4 px-4 gap-[2.2rem]" onClick={handleSend}>
                            <form
                                // onSubmit={handleSend}
                                className="relative flex flex-row justify-between w-full p-2.5 bg-white rounded-3xl text-main-purple"
                            >
                                <input
                                    className="w-full px-2.5 text-base font-bold rounded-4xl placeholder:text-main-purple"
                                    type="text"
                                    onChange={handleInput}
                                    value={greetMessage}
                                    placeholder="Gửi lời chào"
                                    maxLength={50}
                                    required
                                    disabled
                                />
                                <button type="submit" className="bg-white" disabled>
                                    <SendIcon />
                                </button>
                            </form>
                            <button className="font-normal bg-main-purple" onClick={handleSkip}>
                                Skip
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {sMatch.data.length < 1 && (
                <div className="container-np flex flex-col justify-between text-white p-6.5 h-screen min-h-screen w-screen overflow-hidden overflow-y-auto">
                    <button
                        className="flex flex-row justify-end p-4 cursor-pointer text-neutral-80"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </button>
                    <div className="image-container">
                        <Image className="image" src="/assets/images/empty_match.jpg" alt="empty_img" layout="fill" />
                    </div>
                    <div className="mb-4 flex-center">
                        <button className="bg-[#E56A4C] rounded-xl px-5 py-2 flex-center gap-2" onClick={onFindOther}>
                            <MdOutlineTravelExplore />
                            Tìm thêm bạn bè
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
