import Bell from '../Icons/BellIcon';
import Title from './Title';
import Image from 'next/image';
import InformationIcon from '../Icons/InformationIcon';
import LocationIcon from '../Icons/LocationIcon';
import HeartIcon from '../Icons/HeartIcon';
import CircleButton from './CircleButton';
import CloseIcon from '../Icons/CloseIcon';
import { useState } from 'react';
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

export const HomeComponent = () => {
    const [isNotSeenInfo, setIsNotSeenInfo] = useState(true);

    const handleSeenInfo = () => {
        setIsNotSeenInfo(false);
    };

    const handleCloseInfo = () => {
        setIsNotSeenInfo(true);
    };

    return (
        <>
            {isNotSeenInfo ? (
                <section className="container">
                    <div>
                        <Title
                            className="py-[7px] mb-6    "
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

                        <div className="image-container rounded-[40px] overflow-hidden">
                            <Image
                                className="image w-full h-[555px] object-cover"
                                alt="avatar"
                                layout="fill"
                                src="/assets/images/avatar1.png"
                            />
                            <div className="absolute bottom-0 w-full px-4">
                                <div className="justify-between mb-2 flex-center-y">
                                    <h3 className="text-white">Linda, 22t</h3>

                                    <button onClick={handleSeenInfo}>
                                        <InformationIcon />
                                    </button>
                                </div>

                                <div className="px-2 py-1 bg-white flex-center-y rounded-[25px] w-fit gap-2 mb-7">
                                    <LocationIcon />
                                    <span className="text-caption-1 leading-caption-1">Cách 200m</span>
                                </div>

                                <div className="justify-center gap-10 mb-6 flex-center-y">
                                    <CircleButton Icon={<CloseIcon />} />
                                    <CircleButton Icon={<HeartIcon />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="container flex-center-x">
                    <div className="relative pt-6">
                        <button
                            onClick={handleCloseInfo}
                            className="bg-primary-50 p-[7px] w-10 h-10 rounded-full absolute z-10 translate-y-[-50%] right-2"
                        >
                            <div className="justify-center rounded-full bg-primary-30 flex-center-y py-[8px]">
                                <ArrowDownSolidIcon />
                            </div>
                        </button>
                        {/* i
                        <div>
                        </div>mage */}
                        <div className="image-container">
                            <div className="rounded-t-[40px] overflow-hidden">
                                <Image
                                    className="image w-full h-[555px] object-cover rounded-t-[40px]"
                                    alt="avatar"
                                    layout="fill"
                                    src="/assets/images/avatar1.png"
                                />
                            </div>
                        </div>

                        {/* infor */}
                        <div className="px-4 mb-16">
                            {/* user name and location */}
                            <div className="space-y-[7px] m-1 pb-[13px]">
                                <h3>Linda, 22t</h3>
                                <div className="gap-2 flex-center-y ">
                                    <LocationIcon />
                                    <span className="text-caption-1 leading-caption-1">Cách 200m</span>
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
                                        Thông tin của Linda
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
                                className="image object-cover"
                                layout="fill"
                            />
                            <Image
                                src="/assets/images/favoriteImage2.png"
                                alt="favoriteImage"
                                className="image object-cover"
                                layout="fill"
                            />
                            <Image
                                src="/assets/images/favoriteImage3.png"
                                alt="favoriteImage"
                                className="image object-cover"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="fixed bottom-[39px] justify-center gap-10 mb-6 flex-center-y">
                        <CircleButton Icon={<CloseIcon />} />
                        <CircleButton Icon={<HeartIcon />} />
                    </div>
                </section>
            )}
        </>
    );
};

export default HomeComponent;
