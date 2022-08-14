import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import Button from '../../components/Button';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import ArrowRightCircleIcon from '../../components/Icons/ArrowRightCircleIcon';
import PhoneOtpIcon from '../../components/Icons/PhoneOtpIcon';
import VNFlagIcon from '../../components/Icons/VietNamFlagIcon';
import APP_PATH from '../../constant/appPath';

interface Props {}

export default function LoginPhone(props: Props) {
    const inputRef = useRef(null);
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const handleClickBack = () => {
        router.push(APP_PATH.ROOT);
    };
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const handleSubmit = () => {
        const regex = /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g;
        if (regex.test(phone)) {
            alert('success');
        } else {
            alert('fail');
        }
        // router.push(APP_PATH.OTP);
    };
    return (
        <section className="container">
            <div className="relative h-screen">
                <Title
                    className="mb-[34px]"
                    content={
                        <button className="p-2" onClick={handleClickBack}>
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
                            Vui lòng nhập số điện thoại để đăng nhập và kết bạn tại Foxy
                        </p>
                    </div>
                    <div className="space-y-1 bg-neutral-5 rounded-[10px] py-2 px-4 flex-center-y gap-4">
                        <VNFlagIcon className="flex-shink-0" />
                        <input
                            value={phone}
                            onChange={handleChangePhone}
                            className="flex-1 bg-transparent"
                            type="text"
                            placeholder="Nhập số điện thoại"
                            ref={inputRef}
                        />
                    </div>
                </div>
                <Button
                    onClick={handleSubmit}
                    className="absolute left-0 bottom-4"
                    title="Xác thực"
                    Icon={<ArrowRightCircleIcon />}
                    block
                />
            </div>
        </section>
    );
}
