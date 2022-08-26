import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper';
import { Fragment, useEffect, useState } from 'react';
import Title from '../components/Home/Title';
import BellIcon from '../components/Icons/BellIcon';
import UserCard from '../components/Surf/UserCard';
import { NextPageWithLayout } from '../types/global';
import userApi from '../apis/userApi';
import NavbarLayout from '../components/NavbarLayout';
import SurtItem from '../components/Surf/SurtItem';
import { Popover, Transition } from '@headlessui/react';
import NotificationItem from '../components/Surf/NotificationItem';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/redux';
import { notificationGetNotifications } from '../redux/actions/notificationAction';
import { toastError, toastSuccess } from '../utils/toast';
import { selectNotification } from '../redux/reducers/notificationSlice';
import { userBlockUser, userLikeUser } from '../redux/actions/userActions';
import { selectUser } from '../redux/reducers/userSlice';
import { GrClose } from 'react-icons/gr';

const Surf: NextPageWithLayout = () => {
    const dispatch = useAppDispatch();
    const sUser = useSelector(selectUser);
    const sNotification = useSelector(selectNotification);
    const [stranger, setStranger] = useState<IStranger>();
    const [strangers, setStrangers] = useState<IStranger[]>([]);

    const handleSeenInfo = (stranger: IStranger) => () => {
        setStranger(stranger);
    };

    const handleClose = () => {
        setStranger(undefined);
    };

    const handleRemove = (_id: string) => {
        setStrangers(strangers.filter((stranger) => stranger._id !== _id));
    };

    const handleBlock = async (_id: string) => {
        try {
            await dispatch(userBlockUser(_id)).unwrap();
            handleRemove(_id);
            toastSuccess('Bạn đã chặn thành công');
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    const handleLike = async (_id: string) => {
        try {
            await dispatch(userLikeUser(_id)).unwrap();
            handleRemove(_id);
            toastSuccess('Bạn đã thích thành công');
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    useEffect(() => {
        async function getNotifications() {
            dispatch(notificationGetNotifications());
        }
        async function findStrangeFriendsAround() {
            const response = await userApi.findStrangeFriendsAround();
            setStrangers(response.data.data);
        }
        try {
            !sNotification.isCalled && getNotifications();
            if (sUser.data?.lastLocation) findStrangeFriendsAround();
            else toastError('Bạn chưa cập nhật vị trí');
        } catch (error) {
            toastError((error as IResponseError).error);
        }
        return () => {
            setStrangers([]);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <>
            <section className="container relative px-4 pb-32 bg-white with-navbar">
                <Title
                    className="py-[7px] mb-6"
                    content={
                        <div className="justify-between flex-center-y">
                            <h1 className="font-extrabold leading-10 text-h2 text-primary-50 font-secondary">Foxy</h1>
                            <Popover className="relative">
                                <Popover.Button as={Fragment}>
                                    <button
                                        className={`relative p-2 -mt-1 ${
                                            sNotification.data.some((notification) => !notification.hasSeen)
                                                ? 'after:absolute after:top-1 after:left-1/2 after:w-3 after:h-3 after:rounded-full after:bg-red-500 after:animate-ping'
                                                : ''
                                        }`}
                                    >
                                        <BellIcon />
                                    </button>
                                </Popover.Button>
                                <Transition
                                    enter="transition-all duration-300"
                                    enterFrom="translate-y-full"
                                    enterTo="translate-y-0"
                                    leave="transition-all duration-300"
                                    leaveFrom="translate-y-0"
                                    leaveTo="-translate-y-full"
                                    as={Fragment}
                                >
                                    <Popover.Panel className="fixed inset-0 z-10 w-full max-w-3xl px-4 py-2 overflow-y-auto -translate-x-1/2 bg-white left-1/2 with-navbar">
                                        <div className="flex justify-end">
                                            <Popover.Button as={Fragment}>
                                                <button className="p-2">
                                                    <GrClose size={24} />
                                                </button>
                                            </Popover.Button>
                                        </div>
                                        <div className="flex flex-col gap-1 overflow-y-auto bg-white rounded-md min-w-[320px]">
                                            {sNotification.data.length > 0 ? (
                                                sNotification.data.map((notification) => (
                                                    <NotificationItem key={notification._id} data={notification} />
                                                ))
                                            ) : (
                                                <p className="py-2 font-medium text-center text-gray-500"> ❤️ Trống</p>
                                            )}
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
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
                                translate: ['-130%', 0, -500],
                            },
                            next: {
                                shadow: true,
                                translate: ['130%', 0, -500],
                            },
                        }}
                        modules={[EffectCreative]}
                    >
                        {strangers.map((strange, index) => (
                            <SwiperSlide key={index} className="rounded-[40px]">
                                <UserCard
                                    onSeen={handleSeenInfo}
                                    user={strange}
                                    onBlock={handleBlock}
                                    onLike={handleLike}
                                />
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
                {stranger && (
                    <SurtItem stranger={stranger} onClose={handleClose} onLike={handleLike} onBlock={handleBlock} />
                )}
            </section>

            {/* User info */}
        </>
    );
};
Surf.protected = true;
Surf.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;
export default Surf;
