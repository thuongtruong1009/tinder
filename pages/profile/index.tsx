import { useRouter } from 'next/router';
import Title from '../../components/Home/Title';
import SettingIcon from '../../components/Icons/SettingIcon';
import Image from 'next/image';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { BsCoin } from 'react-icons/bs';
import DoubleGroup from '../../components/Home/DoubleGroup';
import SingleGroup from '../../components/Home/SingleGroup';
import AncoholIcon from '../../components/Icons/profile/AncoholIcon';
import GenderIcon from '../../components/Icons/profile/GenderIcon';
import ReligionIcon from '../../components/Icons/profile/ReligionIcon';
import EducationIcon from '../../components/Icons/profile/EducationIcon';
import { NextPageWithLayout } from '../../types/global';
import NavbarLayout from '../../components/NavbarLayout';
import { Fragment, useEffect, useState } from 'react';
import WhyDialog from '../../components/Profile/WhyDialog';
import BioDialog from '../../components/Profile/BioDialog';
import HobbyDialog from '../../components/Profile/HobbyDialog';
import { Popover } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUser, userLogOut } from '../../redux/reducers/userSlice';
import ReligionDialog from '../../components/Profile/ReligionDialog';
import EducationDialog from '../../components/Profile/EducationDialog';
import GenderDialog from '../../components/Profile/GenderDialog';
import BeerDialog from '../../components/Profile/BeerDialog';
import Hobby from '../../components/Home/Hobby';
import { toastError } from '../../utils/toast';
import UploadImageIcon from '../../components/Icons/UploadImageIcon';
import APP_PATH from '../../constant/appPath';
import { infoGetAllBeers, infoGetAllEducations, infoGetAllGenders } from '../../redux/actions/infoAction';
import { selectInfo } from '../../redux/reducers/infoSlice';
import AlbumsItem from '../../components/Profile/AlbumsItem';
import { HiPencil } from 'react-icons/hi';
import HeightIcon from '../../components/Icons/HeightIcon';
import HeightDialog from '../../components/Profile/HeightDialog';

const Profile: NextPageWithLayout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const sInfo = useAppSelector(selectInfo);

    const [isOpenWhyDialog, setIsOpenWhyDialog] = useState(false);
    const [isOpenBioDialog, setIsOpenBioDialog] = useState(false);
    const [isOpenHobbyDialog, setIsOpenHobbyDialog] = useState(false);
    const [isOpenReligionDialog, setIsOpenReligionDialog] = useState(false);
    const [isOpenEducationDialog, setIsOpenEducationDialog] = useState(false);
    const [isOpenGenderDialog, setIsOpenGenderDialog] = useState(false);
    const [isOpenBeerDialog, setIsOpenBeerDialog] = useState(false);
    const [isOpenHeightDialog, setIsOpenHeightDialog] = useState(false);

    const lengthAlbums = sUser.data?.profile.albums.length;

    const handleLogOut = () => {
        dispatch(userLogOut());
    };

    const onEnterGift = () => {
        router.push(APP_PATH.GIFT);
    };

    const handleOpenHobbyialog = () => {
        setIsOpenHobbyDialog(true);
    };
    const handleCloseHobbyDialog = () => {
        setIsOpenHobbyDialog(false);
    };
    const handleOpenWhyDialog = () => {
        setIsOpenWhyDialog(true);
    };
    const handleCloseWhyDialog = () => {
        setIsOpenWhyDialog(false);
    };
    const handleOpenBioDialog = () => {
        setIsOpenBioDialog(true);
    };
    const handleCloseBioDialog = () => {
        setIsOpenBioDialog(false);
    };

    const handleOpenReligionDialog = () => {
        setIsOpenReligionDialog(true);
    };

    const handleCloseReligionDialog = () => {
        setIsOpenReligionDialog(false);
    };

    const handleOpenEducationDialog = () => {
        setIsOpenEducationDialog(true);
    };

    const handleCloseEducationDialog = () => {
        setIsOpenEducationDialog(false);
    };

    const handleOpenGenderDialog = () => {
        setIsOpenGenderDialog(true);
    };

    const handleCloseGenderDialog = () => {
        setIsOpenGenderDialog(false);
    };

    const handleOpenBeerDialog = () => {
        setIsOpenBeerDialog(true);
    };

    const handleCloseBeerDialog = () => {
        setIsOpenBeerDialog(false);
    };

    const handleOpenHeightDialog = () => {
        setIsOpenHeightDialog(true);
    };

    const handleCloseHeightDialog = () => {
        setIsOpenHeightDialog(false);
    };

    const handleUploadFile = () => {
        router.push(APP_PATH.UPLOAD_ALBUMS);
    };

    const handleViewAlbums = () => {
        router.push(APP_PATH.ALBUMS);
    };

    const handleUpdateCommonInfo = () => {
        router.push(APP_PATH.UPDATE_COMMON_INFO);
    };

    const handleAge = (birthday: string | undefined) => {
        if (!birthday) return 0;
        const newBirthday = new Date(birthday);
        const now = new Date();
        return now.getFullYear() - newBirthday.getFullYear();
    };

    useEffect(() => {
        async function handleGetGenders() {
            try {
                await dispatch(infoGetAllGenders()).unwrap();
            } catch (error) {
                toastError((error as IResponseError).error);
            }
        }

        async function handleGetEducations() {
            try {
                await dispatch(infoGetAllEducations()).unwrap();
            } catch (error) {
                toastError((error as IResponseError).error);
            }
        }

        async function handleGetBeers() {
            try {
                await dispatch(infoGetAllBeers()).unwrap();
            } catch (error) {
                toastError((error as IResponseError).error);
            }
        }

        if (sInfo.genders.length === 0) {
            handleGetGenders();
        }

        if (sInfo.educations.length === 0) {
            handleGetEducations();
        }

        if (sInfo.beers.length === 0) {
            handleGetBeers();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <HobbyDialog isOpen={isOpenHobbyDialog} onClose={handleCloseHobbyDialog} />
            <WhyDialog isOpen={isOpenWhyDialog} onClose={handleCloseWhyDialog} reason={sUser.data?.info.reason} />
            <BioDialog isOpen={isOpenBioDialog} onClose={handleCloseBioDialog} />
            <HeightDialog isOpen={isOpenHeightDialog} onClose={handleCloseHeightDialog} />
            <ReligionDialog
                isOpen={isOpenReligionDialog}
                onClose={handleCloseReligionDialog}
                religion={sUser.data?.info?.religion}
            />
            {sInfo.educations.length > 0 && (
                <EducationDialog
                    isOpen={isOpenEducationDialog}
                    onClose={handleCloseEducationDialog}
                    educationId={sUser.data?.info?.education?._id}
                />
            )}
            {sInfo.genders.length > 0 && (
                <GenderDialog
                    isOpen={isOpenGenderDialog}
                    onClose={handleCloseGenderDialog}
                    genderId={sUser.data?.gender?._id}
                />
            )}

            {sInfo.beers.length > 0 && (
                <BeerDialog
                    isOpen={isOpenBeerDialog}
                    onClose={handleCloseBeerDialog}
                    beerId={sUser.data?.info?.beer?._id}
                />
            )}

            <section className="container bg-white with-navbar">
                <Title
                    className="mb-2"
                    content={
                        <div className="justify-between flex-center-y">
                            <h2 className="text-neutral-100">Tài khoản</h2>
                            <Popover className="relative">
                                <Popover.Button as={Fragment}>
                                    <button className="p-2">
                                        <SettingIcon />
                                    </button>
                                </Popover.Button>

                                <Popover.Panel className="absolute right-0 z-10 top-full">
                                    <ul className="flex flex-col gap-2 p-2 overflow-y-auto bg-white rounded-md shadow-md max-h-60 min-w-[200px]">
                                        <li>
                                            <button
                                                className="flex items-center justify-start w-full gap-3 py-1 pl-2 rounded-md text-primary-50 button-2 bg-slate-100"
                                                onClick={handleLogOut}
                                            >
                                                <RiLogoutCircleRLine />
                                                <p>Đăng xuất</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="flex items-center justify-start w-full gap-3 py-1 pl-2 rounded-md text-primary-50 button-2 bg-slate-100"
                                                onClick={onEnterGift}
                                            >
                                                <BsCoin />
                                                <p>Coins package</p>
                                            </button>
                                        </li>
                                    </ul>
                                </Popover.Panel>
                            </Popover>
                        </div>
                    }
                />
                <div className="justify-between flex-center-y">
                    <div className="flex gap-4 flex-center-y">
                        <Image
                            className="rounded-xl"
                            src={sUser.data ? sUser.data.avatar : '/assets/images/avatar.png'}
                            alt="avatar"
                            height={40}
                            width={40}
                        />
                        <div>
                            <h3 className="text-neutral-100">
                                {sUser.data?.name.firstName} {sUser.data?.name.lastName},{' '}
                                {handleAge(sUser.data?.birthday)}t
                            </h3>
                            <span className="opacity-50 body-2">
                                {sUser.data?.info.reason ? `”${sUser.data.info.reason}”` : ''}
                            </span>
                        </div>
                    </div>

                    <button className="p-2 rounded-xl bg-primary-20" onClick={handleUpdateCommonInfo}>
                        <HiPencil fill="#7a56fe" size={24} />
                    </button>
                </div>

                <div className="grid grid-cols-3 my-8 gap-2.5">
                    {sUser.data &&
                        sUser.data.profile.albums.length > 0 &&
                        sUser.data.profile.albums.map((image, index, albums) => {
                            if (index === 0) {
                                return (
                                    <AlbumsItem key={image.url} url={image.url} firstImage onClick={handleViewAlbums} />
                                );
                            } else if (index > 0 && index < 4) {
                                return (
                                    <AlbumsItem
                                        key={image.url}
                                        url={image.url}
                                        middleImage
                                        onClick={handleViewAlbums}
                                    />
                                );
                            } else if (index === 4) {
                                return (
                                    <AlbumsItem
                                        key={image.url}
                                        url={image.url}
                                        anotherImages={albums.length - 5}
                                        onClick={handleViewAlbums}
                                    />
                                );
                            }
                        })}

                    <div
                        onClick={handleUploadFile}
                        className="flex-col w-full overflow-hidden border-2 border-dashed cursor-pointer text-neutral-100 border-sky-400 rounded-xl aspect-square flex-center gap-y-1"
                    >
                        <UploadImageIcon />
                        <span>Tải ảnh lên</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <DoubleGroup
                        title="Tại sao bạn lại ở đây"
                        desc={sUser.data?.info.reason ? sUser.data.info.reason : 'Vui lòng chọn'}
                        onClick={handleOpenWhyDialog}
                    />
                    <DoubleGroup
                        title="Giới thiệu bản thân"
                        desc={sUser.data?.profile.bio ? sUser.data.profile.bio : 'Hãy thêm giới thiệu về bản thân bạn'}
                        onClick={handleOpenBioDialog}
                    />
                </div>

                <div className="flex flex-col gap-2 my-9">
                    <SingleGroup
                        icon={<AncoholIcon />}
                        title="Rượu bia"
                        desc={sUser.data?.info.beer ? sUser.data.info.beer.name : 'Vui lòng chọn'}
                        onClick={handleOpenBeerDialog}
                    />
                    <SingleGroup
                        icon={<GenderIcon />}
                        title="Giới tính"
                        desc={sUser.data?.gender ? sUser.data.gender.name : 'Vui lòng chọn'}
                        onClick={handleOpenGenderDialog}
                    />
                    <SingleGroup
                        icon={<ReligionIcon />}
                        title="Tôn giáo"
                        desc={sUser.data?.info.religion ? 'Có' : 'Không'}
                        onClick={handleOpenReligionDialog}
                    />
                    <SingleGroup
                        icon={<EducationIcon />}
                        title="Học vấn"
                        desc={sUser.data?.info.education ? sUser.data.info.education.name : 'Không'}
                        onClick={handleOpenEducationDialog}
                    />
                    <SingleGroup
                        icon={<HeightIcon />}
                        title="Chiều cao"
                        desc={sUser.data?.info.height ? sUser.data.info.height + 'm' : 'Cập nhật chiều cao'}
                        onClick={handleOpenHeightDialog}
                    />
                </div>

                <div>
                    <div className="flex justify-between mt-2 mb-4">
                        <h5 className="font-bold text-neutral-100">Sở thích</h5>
                        <button className="body-3 text-main-purple" onClick={handleOpenHobbyialog}>
                            Chỉnh sửa
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {sUser.data?.hobbies &&
                            sUser.data.hobbies.map((hobby) => <Hobby key={hobby._id} title={hobby.name} />)}
                    </div>
                </div>
            </section>
        </>
    );
};
Profile.protected = true;
Profile.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;
export default Profile;
