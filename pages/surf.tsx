import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper';
import { useCallback, useEffect, useRef, useState } from 'react';
import Title from '../components/Home/Title';
import BellIcon from '../components/Icons/BellIcon';
import UserCard from '../components/Home/UserCard';
import { NextPageWithLayout } from '../types/global';
import userApi from '../apis/userApi';
import NavbarLayout from '../components/NavbarLayout';
import SurtItem from '../components/Surf/SurtItem';

const Surf: NextPageWithLayout = () => {
    const [stranger, setStranger] = useState<IDataFindFriendsAroundResponse>();
    const [strangers, setStrangers] = useState<IDataFindFriendsAroundResponse[]>([]);

    const handleSeenInfo = (stranger: IDataFindFriendsAroundResponse) => () => {
        setStranger(stranger);
    };

    const handleClose = () => {
        setStranger(undefined);
    };

    const handleRemove = (_id: string) => {
        setStrangers(strangers.filter((stranger) => stranger._id !== _id));
    };

    useEffect(() => {
        async function findStrangeFriendsAround() {
            const response = await userApi.findStrangeFriendsAround();
            setStrangers(response.data.data);
        }
        findStrangeFriendsAround();
        return () => {
            setStrangers([]);
        };
    }, []);

    return (
        <>
            <section className="container relative px-4 pb-32 bg-white">
                <Title
                    className="py-[7px] mb-6"
                    content={
                        <div className="justify-between flex-center-y">
                            <h1 className="font-extrabold leading-10 text-h2 text-primary-50 font-secondary">Foxy</h1>
                            <button className="p-2">
                                <BellIcon />
                            </button>
                        </div>
                    }
                />
                {strangers.length > 0 ? (
                    <Swiper
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ['-120%', 0, -500],
                            },
                            next: {
                                shadow: true,
                                translate: ['120%', 0, -500],
                            },
                        }}
                        modules={[EffectCreative]}
                    >
                        {strangers.map((strange, index) => (
                            <SwiperSlide key={index} className="rounded-[40px]">
                                <UserCard onSeen={handleSeenInfo} user={strange} onRemove={handleRemove} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="relative rounded-[40px] h-[70vh] overflow-hidden">
                        <div className="image-container">
                            <Image
                                className="object-cover image"
                                alt="avatar"
                                objectPosition="top"
                                layout="fill"
                                src="https://res.cloudinary.com/cake-shop/image/upload/v1660488404/default_zpdpgj.jpg"
                            />
                        </div>
                        <div className="absolute w-full px-4 top-5">
                            <div className="justify-between mb-2 text-center">
                                <h3 className="text-white">Không có bạn mới quanh đây</h3>
                            </div>
                        </div>
                    </div>
                )}
                {stranger && <SurtItem stranger={stranger} onClose={handleClose} />}
            </section>

            {/* User info */}
        </>
    );
};
Surf.protected = true;
Surf.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;
export default Surf;
