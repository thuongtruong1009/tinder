import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import CircleButton from '../Home/CircleButton';
import Hobby from '../Home/Hobby';
import InfoComponent from '../Home/InfoComponent';
import ArrowDownSolidIcon from '../Icons/ArrowDownSolidIcon';
import CloseIcon from '../Icons/CloseIcon';
import EducationIcon from '../Icons/EducationIcon';
import HeartIcon from '../Icons/HeartIcon';
import HeightIcon from '../Icons/HeightIcon';
import LanguageIcon from '../Icons/LanguageIcon';
import LocationIcon from '../Icons/LocationIcon';
import MatiralStatusIcon from '../Icons/MatiralStatusIcon';
import PetIcon from '../Icons/PetIcon';
import QuoteLeftIcon from '../Icons/QuoteLeftIcon';
import SexIcon from '../Icons/SexIcon';
import SportIcon from '../Icons/SportIcon';

interface Props {
    stranger: IDataFindFriendsAroundResponse;
    onClose: () => void;
    onLike: (_id: string) => void;
    onBlock: (_id: string) => void;
}

export default function SurtItem({ stranger, onClose, onLike, onBlock }: Props) {
    return (
        <div className="animate-up fixed container top-0 px-4 inset-x-0 h-screen z-[601] overflow-auto bg-white">
            <div className="fixed z-10 gap-10 -translate-x-1/2 left-1/2 bottom-4 flex-center-y">
                <CircleButton
                    Icon={<CloseIcon />}
                    onClick={() => {
                        onBlock(stranger._id);
                        onClose();
                    }}
                />
                <CircleButton
                    Icon={<HeartIcon />}
                    onClick={() => {
                        onLike(stranger._id);
                        onClose();
                    }}
                />
            </div>
            <button
                onClick={onClose}
                className="bg-primary-50 p-[7px] w-10 h-10 rounded-full sticky z-10 translate-y-[-50%] left-[calc(100%-2rem)] top-8"
            >
                <div className="justify-center rounded-full bg-primary-30 flex-center-y py-[8px]">
                    <ArrowDownSolidIcon />
                </div>
            </button>
            <div className="relative pt-6 -mt-8">
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

                <div className="px-4 mb-16">
                    {/* user name and location */}
                    <div className="space-y-[7px] m-1 pb-[13px]">
                        <h3>
                            {stranger?.name.firstName + ' ' + stranger?.name.lastName}, {stranger?.age}t
                        </h3>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque, repellat omnis rerum
                                architecto esse soluta similique obcaecati fuga exercitationem, accusamus distinctio et
                                vel itaque molestias quas nisi consequatur sit.
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
        </div>
    );
}
