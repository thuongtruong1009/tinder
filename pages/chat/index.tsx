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
import { useAppDispatch } from '../../hooks/redux';
import { conversationGetAll } from '../../redux/actions/conversationActions';
import { toastError, toastSuccess } from '../../utils/toast';
import { selectConversation } from '../../redux/reducers/conversationSlice';
import APP_PATH from '../../constant/appPath';

const Chat: NextPageWithLayout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const sUser = useSelector(selectUser);
    const sConversation = useSelector(selectConversation);
    const handleClick = (_id: string) => () => {
        router.push(`${APP_PATH.CHAT}/${_id}`);
    };
    useEffect(() => {
        async function getAllConversations() {
            try {
                await dispatch(conversationGetAll()).unwrap();
            } catch (error) {
                toastError((error as IResponseError).error);
            }
        }
        !sConversation.isCalled && getAllConversations();
    }, [dispatch, sConversation.isCalled]);

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
            <p className="my-2 font-bold body-1 text-neutral-100">Danh sách bạn bè</p>
            <Swiper
                spaceBetween={16}
                slidesPerView={3.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper + 'dùng để scroll infinite')}
            >
                {sUser.data?.friends.map((item: IUserFriend, index) => (
                    <SwiperSlide className="p-1" key={index}>
                        <LikeItem avatar={item.avatar} name={generateFullName(item.name)} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <h5 className="my-4 font-bold body-1 text-neutral-100">Trò chuyện</h5>
            <ul className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-357px)] min-h-[200px]">
                {sConversation.data.map((item) => (
                    <ChatListItem
                        name={generateFullName(item.conversation.users[0].name)}
                        avatar={item.conversation.users[0].avatar}
                        key={item.conversation._id}
                        onClick={handleClick(item.conversation._id)}
                        lastMessage={item.conversation.messages[0] || undefined}
                    />
                ))}
            </ul>
        </section>
    );
};

Chat.protected = true;
Chat.getLayout = (page: React.ReactNode) => <NavbarLayout>{page}</NavbarLayout>;
export default Chat;
