import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { BiLoaderAlt } from 'react-icons/bi';
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
import AncoholIcon from '../Icons/profile/AncoholIcon';
import ReligionIcon from '../Icons/profile/ReligionIcon';
import QuoteLeftIcon from '../Icons/QuoteLeftIcon';
import SexIcon from '../Icons/SexIcon';

interface Props {
    user: IStranger;
    isLoading: boolean;
    onClose: () => void;
    onLike: (_id: string) => void;
    onBlock: (_id: string) => void;
}

export default function SurtItem({ isLoading, user, onClose, onLike, onBlock }: Props) {
    const handleGetDefault = () => {
        if (user.profile.albums.length > 0) {
            const image = user.profile.albums.find((item) => item.isDefault === true);
            if (image) {
                return image.url;
            }
            return user.profile.albums[0].url;
        }
        return user.avatar;
    };

    return (
        <div className="animate-up fixed container top-0 px-4 inset-x-0 h-screen z-[1001] overflow-auto bg-white">
            <div className="fixed z-10 gap-10 -translate-x-1/2 left-1/2 bottom-4 flex-center-y">
                <CircleButton
                    IconLoading={<BiLoaderAlt className="animate-spin" />}
                    Icon={<CloseIcon />}
                    onClick={() => {
                        onBlock(user._id);
                        onClose();
                    }}
                    disabled={isLoading}
                />
                <CircleButton
                    IconLoading={<BiLoaderAlt className="animate-spin" />}
                    Icon={<HeartIcon />}
                    onClick={() => {
                        onLike(user._id);
                        onClose();
                    }}
                    disabled={isLoading}
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
                            src={handleGetDefault()}
                        />
                    </div>
                </div>

                <div className="px-4 mb-16">
                    {/* user name and location */}
                    <div className="space-y-[7px] m-1 pb-[13px]">
                        <h3>
                            {user?.name.firstName + ' ' + user?.name.lastName}, {user.age && user.age + 't'}
                        </h3>
                        <div className="gap-2 flex-center-y ">
                            <LocationIcon />
                            <span className="text-caption-1 leading-caption-1">Cách {user?.distance}m</span>
                        </div>
                    </div>

                    {/* Introduction self, information and hobbies of user */}
                    <div className="space-y-6">
                        <div className="p-2 bg-neutral-5 rounded-2xl">
                            <QuoteLeftIcon />
                            <p>{user.profile.bio || 'Không có giới thiệu'}</p>
                        </div>

                        {/* Infor of user */}
                        <div className="space-y-4">
                            <h5 className="font-medium text-caption-1 leading-caption-1 text-neutral-65">
                                Thông tin của {user?.name.lastName}
                            </h5>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {user.gender && <InfoComponent title={user.gender.name} Icon={<SexIcon />} />}
                                {user.info.education && (
                                    <InfoComponent title={user.info.education.name} Icon={<EducationIcon />} />
                                )}
                                {user.info.beer && <InfoComponent title={user.info.beer.name} Icon={<AncoholIcon />} />}
                                {user.info.height && (
                                    <InfoComponent title={user.info.height.toString() + 'm'} Icon={<HeightIcon />} />
                                )}
                                <InfoComponent
                                    title={user.info.religion ? 'Có' : 'Không có tôn giáo'}
                                    Icon={<ReligionIcon />}
                                />
                            </div>
                        </div>

                        {/* Hobbies of user */}
                        <div className="space-y-4">
                            <h5 className="font-medium text-caption-1 leading-caption-1 text-neutral-65">
                                Tôi thích...
                            </h5>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {user.hobbies.length > 0 ? (
                                    user.hobbies.map((hobby) => <Hobby key={hobby._id} title={hobby.name} />)
                                ) : (
                                    <p className="text-caption-1 leading-caption-1">Không có thông tin</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* favorite images of user */}
                <div className="image-container">
                    {user.profile.albums.map((image) => {
                        if (image.isFavorite) {
                            return (
                                <Image
                                    key={image.url}
                                    src={image.url}
                                    alt="favoriteImage"
                                    className="object-cover image"
                                    layout="fill"
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
