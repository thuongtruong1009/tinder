import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../components/Home/Title';
import 'swiper/css';
import 'swiper/css/scrollbar';
import NavbarLayout from '../../components/NavbarLayout';
import DivideIcon from '../../components/Icons/chat/DivideIcon';
import HeartedIcon from '../../components/Icons/chat/HeartedIcon';
import CrossIcon from '../../components/Icons/chat/CrossIcon';
import LikeList from '../../components/Home/LikeList';

const Index = () => {
    return (
        <section className="container">
            <Title
                className="py-2.75"
                content={
                    <div className="justify-between flex-center-y">
                        <h2 className="text-neutral-100">Trò chuyện</h2>
                    </div>
                }
            />
            <p className="body-1 font-bold text-neutral-100 my-2">Danh sách lượt thích</p>
            <Swiper
                spaceBetween={16}
                slidesPerView={3.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper + 'dùng để scroll infinite')}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <SwiperSlide key={index}>
                        {/* <div className="flex justify-between gap-2 cursor-pointer w-[89px] h-[117px] rounded-lg shadow-md m-2">
                            <div>
                                <div className="rounded-t-xl bg-[url(/assets/images/chat_preview.png)] bg-cover w-[89px] h-[89px]" />
                                <div className="flex justify-between items-center px-2.5 py-1.5">
                                    <CrossIcon />
                                    <DivideIcon />
                                    <HeartedIcon />
                                </div>
                            </div>
                        </div> */}
                        <LikeList avatar="/assets/images/chat_preview.png" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <h5 className="body-1 text-neutral-100 font-bold my-4">Trò chuyện</h5>
            <ul className="flex flex-col gap-4 max-h-72 overflow-y-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <li className="flex items-center gap-4 cursor-pointer" key={index}>
                        <p className="bg-[url(/assets/images/chat_avatar.png)] bg-cover w-12 h-12"></p>
                        <p className="text-neutral-100 body-1 font-bold">Cameron Greer</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

// Index.protected = true;
Index.getLayout = (page: React.ReactNode) => <NavbarLayout>{page}</NavbarLayout>;
export default Index;
