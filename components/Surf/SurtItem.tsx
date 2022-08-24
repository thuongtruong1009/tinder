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
import AncoholIcon from '../Icons/profile/AncoholIcon';
import ReligionIcon from '../Icons/profile/ReligionIcon';
import QuoteLeftIcon from '../Icons/QuoteLeftIcon';
import SexIcon from '../Icons/SexIcon';
import SportIcon from '../Icons/SportIcon';

interface Props {
    stranger: IStranger;
    onClose: () => void;
    onLike: (_id: string) => void;
    onBlock: (_id: string) => void;
}

export default function SurtItem({ stranger, onClose, onLike, onBlock }: Props) {
    const handleGetDefault = () => {
        if (stranger.profile.albums.length > 0) {
            const image = stranger.profile.albums.find((item) => item.isDefault === true);
            if (image) {
                return image.url;
            }
            return stranger.profile.albums[0].url;
        }
        return stranger.avatar;
    };

    return (
        <div className="animate-up fixed container top-0 px-4 inset-x-0 h-screen z-[1001] overflow-auto bg-white">
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
                            src={handleGetDefault()}
                        />
                    </div>
                </div>

                <div className="px-4 mb-16">
                    {/* user name and location */}
                    <div className="space-y-[7px] m-1 pb-[13px]">
                        <h3>
                            {stranger?.name.firstName + ' ' + stranger?.name.lastName},{' '}
                            {stranger.age && stranger.age + 't'}
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
                            <p>{stranger.profile.bio}</p>
                        </div>

                        {/* Infor of user */}
                        <div className="space-y-4">
                            <h5 className="font-medium text-caption-1 leading-caption-1 text-neutral-65">
                                Thông tin của {stranger?.name.lastName}
                            </h5>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {stranger.gender && <InfoComponent title={stranger.gender.name} Icon={<SexIcon />} />}
                                {stranger.info.education && (
                                    <InfoComponent title={stranger.info.education.name} Icon={<EducationIcon />} />
                                )}
                                {stranger.info.beer && (
                                    <InfoComponent title={stranger.info.beer.name} Icon={<AncoholIcon />} />
                                )}
                                {stranger.info.height && (
                                    <InfoComponent
                                        title={stranger.info.height.toString() + 'm'}
                                        Icon={<HeightIcon />}
                                    />
                                )}
                                <InfoComponent
                                    title={stranger.info.religion ? 'Có' : 'Không'}
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
                                {stranger.hobbies.map((hobby) => (
                                    <Hobby key={hobby._id} title={hobby.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* favorite images of user */}
                <div className="image-container">
                    {stranger.profile.albums.map((image) => {
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
