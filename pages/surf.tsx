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
import { Popover } from '@headlessui/react';
import notificationApi from '../apis/notificationApi';
import NotificationItem from '../components/Surf/NotificationItem';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/redux';
import { notificationGetNotifications } from '../redux/actions/notificationAction';
import { toastError, toastSuccess } from '../utils/toast';
import { selectNotification } from '../redux/reducers/notificationSlice';
import { userBlockUser, userLikeUser } from '../redux/actions/userActions';
import { selectUser } from '../redux/reducers/userSlice';
import Temp from '../components/Match/Temp';

const Surf: NextPageWithLayout = () => {
    const dispatch = useAppDispatch();
    const sUser = useSelector(selectUser);
    const sNotification = useSelector(selectNotification).data;
    const [isOpenFavourite, setIsOpenFavourite] = useState(false);
    const [stranger, setStranger] = useState<IStranger>();
    const [strangers, setStrangers] = useState<IStranger[]>([]);

    const handleSeenInfo = (stranger: IStranger) => () => {
        setStranger(stranger);
    };

    const handleClose = () => {
        setIsOpenFavourite(false);
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
            getNotifications();
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
            <section className="container relative px-4 pb-32 bg-white">
                <Title
                    className="py-[7px] mb-6"
                    content={
                        <div className="justify-between flex-center-y">
                            <h1 className="font-extrabold leading-10 text-h2 text-primary-50 font-secondary">Foxy</h1>
                            <Popover className="relative">
                                <Popover.Button as={Fragment}>
                                    <button className="p-2">
                                        <BellIcon />
                                    </button>
                                </Popover.Button>

                                <Popover.Panel className="absolute right-0 z-10 top-full">
                                    <div className="flex flex-col gap-1 p-2 overflow-y-auto bg-white rounded-md shadow-md max-h-60 min-w-[320px]">
                                        {sNotification.length > 0 ? (
                                            sNotification.map((notification) => (
                                                <NotificationItem key={notification._id} data={notification} />
                                            ))
                                        ) : (
                                            <p className="py-2 font-medium text-center text-gray-500"> ❤️ Trống</p>
                                        )}
                                    </div>
                                </Popover.Panel>
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

                {isOpenFavourite && <Temp onClose={handleClose} />}
            </section>

            {/* User info */}
        </>
    );
};
Surf.protected = true;
Surf.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;
export default Surf;
