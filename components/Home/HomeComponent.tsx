import Bell from '../Icons/BellIcon';
import Title from './Title';
import Image from 'next/image';
import InformationIcon from '../Icons/InformationIcon';
import LocationIcon from '../Icons/LocationIcon';
import HeartIcon from '../Icons/HeartIcon';
import CircleButton from './CircleButton';
import CloseIcon from '../Icons/CloseIcon';
import { useCallback, useRef, useState } from 'react';
import ArrowDownSolidIcon from '../Icons/ArrowDownSolidIcon';
import QuoteLeftIcon from '../Icons/QuoteLeftIcon';
import InfoComponent from './InfoComponent';
import MatiralStatusIcon from '../Icons/MatiralStatusIcon';
import SexIcon from '../Icons/SexIcon';
import PetIcon from '../Icons/PetIcon';
import HeightIcon from '../Icons/HeightIcon';
import EducationIcon from '../Icons/EducationIcon';
import SportIcon from '../Icons/SportIcon';
import LanguageIcon from '../Icons/LanguageIcon';
import Hobby from './Hobby';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper';
import UserCard from './UserCard';

type Props = {
    strangeFriends: IResponseUser[];
};

export const HomeComponent = ({ strangeFriends }: Props) => {
    // strangeFriends = [];

    const [stranger, setStranger] = useState<IResponseUser>();
    const userInfoRef = useRef<HTMLDivElement>(null);

    const handleSeenInfo = useCallback((stranger: IResponseUser) => {
        console.log('click');
        if (userInfoRef.current) {
            setStranger(stranger);
            userInfoRef.current.classList.remove('hidden');
            setTimeout(() => {
                userInfoRef.current?.classList.remove('translate-y-full');
            }, 100);
        }
    }, []);

    const handleCloseInfo = useCallback(() => {
        if (userInfoRef.current) {
            userInfoRef.current?.classList.add('translate-y-full');
            setTimeout(() => {
                userInfoRef.current?.classList.add('hidden');
            }, 1100);
        }
    }, []);

    return (
        <>
            <section className="px-4 pb-32 bg-white">
                <div>
                    <Title
                        className="py-[7px] mb-6"
                        content={
                            <div className="justify-between flex-center-y">
                                <h1 className="font-extrabold leading-10 text-h2 text-primary-50 font-secondary">
                                    Foxy
                                </h1>
                                <button className="p-2">
                                    <Bell />
                                </button>
                            </div>
                        }
                    />

                    {/* Swiper */}
                    {strangeFriends?.length > 0 ? (
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
                            {strangeFriends.map((strangerInfo, index) => (
                                <SwiperSlide key={index} className="rounded-[40px]">
                                    <UserCard handleSeenInfo={handleSeenInfo} user={strangerInfo} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="image-container rounded-[40px] h-[70vh] overflow-hidden">
                            <Image
                                className="object-cover image"
                                alt="avatar"
                                objectPosition="top"
                                layout="fill"
                                src="https://res.cloudinary.com/cake-shop/image/upload/v1660488404/default_zpdpgj.jpg"
                            />
                            <div className="absolute w-full px-4 top-5">
                                <div className="justify-between mb-2 text-center">
                                    <h3 className="text-white">Không có bạn mới quanh đây</h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* User info */}
            <div
                className="fixed top-0 left-0 z-10 hidden w-screen h-screen px-4 overflow-y-auto transition duration-1000 ease-in-out translate-y-full bg-white component"
                ref={userInfoRef}
            >
                <div className="flex-center-x">
                    <div className="relative pt-6">
                        <button
                            onClick={handleCloseInfo}
                            className="bg-primary-50 p-[7px] w-10 h-10 rounded-full absolute z-10 translate-y-[-50%] right-2"
                        >
                            <div className="justify-center rounded-full bg-primary-30 flex-center-y py-[8px]">
                                <ArrowDownSolidIcon />
                            </div>
                        </button>

                        <div className="image-container">
                            <div className="rounded-t-[40px] overflow-hidden">
                                <Image
                                    id="avatar"
                                    className="image w-full h-[555px] object-cover rounded-t-[40px]"
                                    alt="avatar"
                                    layout="fill"
                                    src={
                                        stranger
                                            ? stranger.avatar
                                            : 'https://res.cloudinary.com/cake-shop/image/upload/v1660488404/default_zpdpgj.jpg'
                                    }
                                />
                            </div>
                        </div>

                        {/* infor */}
                        <div className="px-4 mb-16">
                            {/* user name and location */}
                            <div className="space-y-[7px] m-1 pb-[13px]">
                                <h3>{stranger?.name.firstName + ' ' + stranger?.name.lastName}, 22t</h3>
                                <div className="gap-2 flex-center-y ">
                                    <LocationIcon />
                                    <span className="text-caption-1 leading-caption-1">Cách {stranger?.distance}m</span>
                                </div>
                            </div>

                            {/* Introduction self, information and hobbies of user */}
                            <div className="space-y-6">
                                <div className="p-2 bg-neutral-5 rounded-2xl">
                                    <QuoteLeftIcon />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque, repellat
                                        omnis rerum architecto esse soluta similique obcaecati fuga exercitationem,
                                        accusamus distinctio et vel itaque molestias quas nisi consequatur sit.
                                    </p>
                                </div>

                                {/* Infor of user */}
                                <div className="space-y-4">
                                    <h5 className="font-medium text-caption-1 leading-caption-1 text-neutral-65">
                                        Thông tin của {stranger?.name.lastName}
                                    </h5>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        <InfoComponent title="Độc thân" Icon={<MatiralStatusIcon />} />
                                        <InfoComponent title="Nữ thẳng" Icon={<SexIcon />} />
                                        <InfoComponent title="Mèo" Icon={<PetIcon />} />
                                        <InfoComponent title="164 cm" Icon={<HeightIcon />} />
                                        <InfoComponent title="Bằng đại học" Icon={<EducationIcon />} />
                                        <InfoComponent title="Bơi lội" Icon={<SportIcon />} />
                                        <InfoComponent title="English, Tiếng Đức, Tiếng Việt" Icon={<LanguageIcon />} />
                                    </div>
                                </div>

                                {/* Hobbies of user */}
                                <div className="space-y-4">
                                    <h5 className="font-medium text-caption-1 leading-caption-1 text-neutral-65">
                                        Tôi thích...
                                    </h5>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        <Hobby title="mua sắm" />
                                        <Hobby title="du lịch" />
                                        <Hobby title="cà phê" />
                                        <Hobby title="đọc sách" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* favorite images of user */}
                        <div className="image-container">
                            <Image
                                src="/assets/images/favoriteImage1.png"
                                alt="favoriteImage"
                                className="object-cover image"
                                layout="fill"
                            />
                            <Image
                                src="/assets/images/favoriteImage2.png"
                                alt="favoriteImage"
                                className="object-cover image"
                                layout="fill"
                            />
                            <Image
                                src="/assets/images/favoriteImage3.png"
                                alt="favoriteImage"
                                className="object-cover image"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="fixed justify-center gap-10 mb-6 bottom-5 flex-center-y">
                        <CircleButton Icon={<CloseIcon />} />
                        <CircleButton Icon={<HeartIcon />} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;
