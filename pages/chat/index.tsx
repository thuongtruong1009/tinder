import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../components/Home/Title';
import 'swiper/css';
import 'swiper/css/scrollbar';
import NavbarLayout from '../../components/NavbarLayout';
import LikeItem from '../../components/Chat/LikeItem';
import ChatListItem from '../../components/Chat/ChatListItem';
import { NextPageWithLayout } from '../../types/global';
// import Matching from '../match';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducers/userSlice';
import { generateFullName } from '../../utils/name';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { conversationGetAll } from '../../redux/actions/conversationActions';
import { toastError, toastSuccess } from '../../utils/toast';
import { selectConversation } from '../../redux/reducers/conversationSlice';
import APP_PATH from '../../constant/appPath';
import Button from '../../components/Button';

const Chat: NextPageWithLayout = () => {
    const router = useRouter();
    const sUser = useSelector(selectUser);
    const sConversation = useAppSelector(selectConversation);
    const handleClick = (_id: string) => () => {
        router.push(`${APP_PATH.CHAT}/${_id}`);
    };
    const handleClickLikeItem = (_id: string) => {
        const conversationId = sConversation.data.find((item) => item.conversation.users[0]._id === _id)?.conversation
            ._id;
        conversationId && router.push(`${APP_PATH.CHAT}/${conversationId}`);
    };

    return (
        <section className="container bg-white with-navbar">
            <Title
                className="py-2.75"
                content={
                    <div className="justify-between flex-center-y">
                        <h2 className="text-neutral-100">Trò chuyện</h2>
                    </div>
                }
            />
            {sUser.data && sUser.data.friends.length > 0 ? (
                <>
                    <p className="my-2 font-bold body-1 text-neutral-100">Danh sách bạn bè</p>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={3.5}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper + 'dùng để scroll infinite')}
                    >
                        {sUser.data?.friends.map((item: IUserFriend, index) => (
                            <SwiperSlide className="p-1" key={index}>
                                <LikeItem
                                    avatar={item.avatar}
                                    name={generateFullName(item.name)}
                                    onClick={() => handleClickLikeItem(item._id)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <h5 className="my-4 font-bold body-1 text-neutral-100">Trò chuyện</h5>
                    <ul className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-357px)] min-h-[200px]">
                        {sConversation.data.map((item) => {
                            if (item.conversation.messages.length > 0) {
                                return (
                                    <ChatListItem
                                        name={generateFullName(item.conversation.users[0].name)}
                                        avatar={item.conversation.users[0].avatar}
                                        key={item.conversation._id}
                                        onClick={handleClick(item.conversation._id)}
                                        lastMessage={item.conversation.messages[0] || undefined}
                                    />
                                );
                            }
                        })}
                    </ul>
                </>
            ) : (
                <div className="flex flex-col justify-center gap-4 mt-32">
                    <div className="text-center">
                        <Image src="/assets/images/no-friends.svg" width={200} height={200} alt="no-friend" />
                        <p className="font-bold text-neutral-100 body-1">Chưa có bạn bè nào</p>
                    </div>
                    <Button title="Tìm bạn ngay" onClick={() => router.push(APP_PATH.SURF)} />
                </div>
            )}
        </section>
    );
};

Chat.protected = true;
Chat.getLayout = (page: React.ReactNode) => <NavbarLayout>{page}</NavbarLayout>;
export default Chat;
