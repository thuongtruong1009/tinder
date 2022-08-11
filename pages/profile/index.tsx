import React from 'react';
import Title from '../../components/Home/Title';
import SettingIcon from '../../components/Icons/SettingIcon';
import Image from 'next/image';
import Tag from '../../components/Home/Tag';
import DoubleGroup from '../../components/Home/DoubleGroup';
import SingleGroup from '../../components/Home/SingleGroup';
import ChildrenIcon from '../../components/Icons/profile/ChildrenIcon';
import AncoholIcon from '../../components/Icons/profile/AncoholIcon';
import GenderIcon from '../../components/Icons/profile/GenderIcon';
import ReligionIcon from '../../components/Icons/profile/ReligionIcon';
import EducationIcon from '../../components/Icons/profile/EducationIcon';

const index = () => {
    return (
        <section className="container">
            <Title
                className="mb-2"
                content={
                    <div className="justify-between flex-center-y">
                        <h2 className="text-neutral-100">Tài khoản</h2>
                        <button className="p-2">
                            <SettingIcon />
                        </button>
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
                <DoubleGroup title='Tại sao bạn lại ở đây' desc='Muốn hẹn hò' />
                <DoubleGroup title='Giới thiệu bản thân' desc='Ăn cơm phải có canh' />
            </div>

            <div className="flex flex-col gap-2 my-9">
                <SingleGroup icon={<ChildrenIcon />} title='Trẻ con' desc='Không có' />
                <SingleGroup icon={<AncoholIcon />} title='Rượu bia' desc='Không bao giờ' />
                <SingleGroup icon={<GenderIcon />} title='Giới tính' desc='Giới tính thẳng' />
                <SingleGroup icon={<ReligionIcon />} title='Tôn giáo' desc='Không' />
                <SingleGroup icon={<EducationIcon />} title='Học vấn' desc='Không' />
            </div>

            <div>
                <div className="flex justify-between mt-2 mb-4">
                    <h5 className="font-bold text-neutral-100">Sở thích</h5>
                    <span className="body-3 text-main-purple">Chỉnh sửa</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Tag className="bg-[#FFF0F0]" content="mua sắm" />
                    <Tag className="bg-[#FFF5ED]" content="cà phê" />
                    <Tag className="bg-[#EDF7FF]" content="du lịch" />
                    <Tag className="bg-[#E9FBF1]" content="đọc sách" />
                </div>
            </div>
        </section>
    );
};

export default index;
