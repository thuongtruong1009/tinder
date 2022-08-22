import { useRouter } from 'next/router';
import Title from '../../components/Home/Title';
import SettingIcon from '../../components/Icons/SettingIcon';
import Image from 'next/image';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { BsCoin } from 'react-icons/bs';
import Tag from '../../components/Home/Tag';
import DoubleGroup from '../../components/Home/DoubleGroup';
import SingleGroup from '../../components/Home/SingleGroup';
import ChildrenIcon from '../../components/Icons/profile/ChildrenIcon';
import AncoholIcon from '../../components/Icons/profile/AncoholIcon';
import GenderIcon from '../../components/Icons/profile/GenderIcon';
import ReligionIcon from '../../components/Icons/profile/ReligionIcon';
import EducationIcon from '../../components/Icons/profile/EducationIcon';
import { NextPageWithLayout } from '../../types/global';
import NavbarLayout from '../../components/NavbarLayout';
import { Fragment, useState } from 'react';
import WhyDialog from '../../components/Profile/WhyDialog';
import BioDialog from '../../components/Profile/BioDialog';
import HobbyDialog from '../../components/Profile/HobbyDialog';
import { Popover } from '@headlessui/react';
import { useAppDispatch } from '../../hooks/redux';
import { userLogOut } from '../../redux/reducers/userSlice';
import { Router } from 'next/router';
import APP_PATH from '../../constant/appPath';

const Profile: NextPageWithLayout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isOpenWhyDialog, setIsOpenWhyDialog] = useState(false);
    const [isOpenBioDialog, setIsOpenBioDialog] = useState(false);
    const [isOpenHobbyDialog, setIsOpenHobbyDialog] = useState(false);

    const handleLogOut = () => {
        dispatch(userLogOut());
    };

    const handleOutstanding = () => {
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
    return (
        <>
            <HobbyDialog isOpen={isOpenHobbyDialog} onClose={handleCloseHobbyDialog} />
            <WhyDialog isOpen={isOpenWhyDialog} onClose={handleCloseWhyDialog} />
            <BioDialog isOpen={isOpenBioDialog} onClose={handleCloseBioDialog} />
            <section className="container bg-white with-navbar relative">
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
                                                className="w-full py-1 pl-2 flex justify-start items-center gap-3 rounded-md text-primary-50 button-2 bg-slate-100"
                                                onClick={handleLogOut}
                                            >
                                                <RiLogoutCircleRLine />
                                                <p>Đăng xuất</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="w-full py-1 pl-2 flex justify-start items-center gap-3  rounded-md text-primary-50 button-2 bg-slate-100"
                                                onClick={handleOutstanding}
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
                <div className="gap-4 flex-center-y">
                    <Image className="rounded-xl" src="/assets/images/avatar.png" alt="avatar" height={40} width={40} />
                    <div>
                        <h3 className="text-neutral-100">Johny Toàn,30t</h3>
                        <span className="opacity-50 body-2">“Muốn hẹn hò”</span>
                    </div>
                </div>

                <div className="my-8">
                    <div className="image-container">
                        <Image className="image" alt="post_image" layout="fill" src={'/assets/images/post.png'} />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <DoubleGroup title="Tại sao bạn lại ở đây" desc="Muốn hẹn hò" onClick={handleOpenWhyDialog} />
                    <DoubleGroup title="Giới thiệu bản thân" desc="Ăn cơm phải có canh" onClick={handleOpenBioDialog} />
                </div>

                <div className="flex flex-col gap-2 my-9">
                    <SingleGroup icon={<ChildrenIcon />} title="Trẻ con" desc="Không có" />
                    <SingleGroup icon={<AncoholIcon />} title="Rượu bia" desc="Không bao giờ" />
                    <SingleGroup icon={<GenderIcon />} title="Giới tính" desc="Giới tính thẳng" />
                    <SingleGroup icon={<ReligionIcon />} title="Tôn giáo" desc="Không" />
                    <SingleGroup icon={<EducationIcon />} title="Học vấn" desc="Không" />
                </div>

                <div>
                    <div className="flex justify-between mt-2 mb-4">
                        <h5 className="font-bold text-neutral-100">Sở thích</h5>
                        <button className="body-3 text-main-purple" onClick={handleOpenHobbyialog}>
                            Chỉnh sửa
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Tag className="bg-[#FFF0F0]" content="mua sắm" />
                        <Tag className="bg-[#FFF5ED]" content="cà phê" />
                        <Tag className="bg-[#EDF7FF]" content="du lịch" />
                        <Tag className="bg-[#E9FBF1]" content="đọc sách" />
                    </div>
                </div>
            </section>
        </>
    );
};
// Profile.protected = true;
Profile.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;
export default Profile;
