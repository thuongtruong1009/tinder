import Image from 'next/image';
import Button from '../Button';
import Title from '../Home/Title';
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRightCircleIcon from '../Icons/ArrowRightCircleIcon';
import PhoneOtpIcon from '../Icons/PhoneOtpIcon';
import VietNamFlagIcon from '../Icons/VietNamFlagIcon';

interface Props {}

export default function LoginPhone(props: Props) {
    return (
        <section className="container">
            <div className="relative h-screen">
                <Title
                    className="mb-[34px]"
                    content={
                        <button className="p-2">
                            <ArrowLeft />
                        </button>
                    }
                />
                <div className="space-y-6">
                    <div className="w-24 h-24 p-4 image-container rounded-3xl bg-neutral-5">
                        <PhoneOtpIcon />
                    </div>
                    <div className="mb-6 space-y-1">
                        <h4 className="text-neutral-100">Nhập số điện thoại để tiếp tục</h4>
                        <p className="text-neutral-40 text-sm leading-[18px]">
                            Vui lòng nhập số điện thoại để đăng nhập và mua sắm tại CLM
                        </p>
                    </div>
                    <div className="space-y-1 bg-neutral-5 rounded-[10px] py-2 px-4 flex-center-y gap-4">
                        <VietNamFlagIcon className="flex-shink-0" />
                        <input className="flex-1 bg-transparent" type="text" placeholder="Nhập số điện thoại" />
                    </div>
                </div>
                <Button className="absolute left-0 bottom-4" title="Xác thực" Icon={<ArrowRightCircleIcon />} block />
            </div>
        </section>
    );
}
