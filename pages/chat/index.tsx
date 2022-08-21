import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../components/Home/Title';
import 'swiper/css';
import 'swiper/css/scrollbar';
import NavbarLayout from '../../components/NavbarLayout';
import LikeList from '../../components/Chat/LikeList';
import ChatList from '../../components/Chat/ChatList';
import { NextPageWithLayout } from '../../types/global';

const Index: NextPageWithLayout = () => {
    const router = useRouter();

    const joinChat = (index: string) => {
        router.push(`/chat/${index}`);
    };
    return (
        <section className="container bg-white">
            <Title
                className="py-2.75"
                content={
                    <div className="justify-between flex-center-y">
                        <h2 className="text-neutral-100">Trò chuyện</h2>
                    </div>
                }
            />
            <p className="my-2 font-bold body-1 text-neutral-100">Danh sách lượt thích</p>
            <Swiper
                spaceBetween={16}
                slidesPerView={3.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper + 'dùng để scroll infinite')}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <SwiperSlide key={index}>
                        <LikeList avatar="/assets/images/chat_preview.png" name="Full name" loved={false} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <h5 className="my-4 font-bold body-1 text-neutral-100">Trò chuyện</h5>
            <ul className="flex flex-col gap-4 max-h-[calc(100vh-303px)] overflow-y-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <ChatList
                        name="Cameron Greer"
                        avatar="/assets/images/chat_avatar.png"
                        key={index}
                        onClick={() => joinChat(index.toString())}
                    />
                ))}
            </ul>
        </section>
    );
};

// Index.protected = true;
Index.getLayout = (page: React.ReactNode) => <NavbarLayout>{page}</NavbarLayout>;
export default Index;
