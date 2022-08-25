import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import ArrowRightCircleIcon from '../../components/Icons/ArrowRightCircleIcon';
import PhoneOtpIcon from '../../components/Icons/PhoneOtpIcon';
import VNFlagIcon from '../../components/Icons/VietNamFlagIcon';
import APP_PATH from '../../constant/appPath';
import { UserContextType } from '../../types/context/user';
import Cookies from 'js-cookie';
import { toastError, toastSuccess } from '../../utils/toast';
import authApi from '../../apis/authApi';
import { useAppDispatch } from '../../hooks/redux';
import { userSendOTPRegister } from '../../redux/actions/userActions';
import { UserContext } from '../../context/UserContext';

interface Props {}

export default function LoginPhone(props: Props) {
    const dispatch = useAppDispatch();
    const [loading, setIsLoading] = useState(false);
    const inputRef = useRef(null);
    const router = useRouter();

    const { phone, savePhone } = useContext(UserContext) as UserContextType;

    const handleClickBack = () => {
        router.push(APP_PATH.ROOT);
    };

    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        savePhone(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const regex = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
        if (regex.test(phone)) {
            const cookies = Cookies.get();
            const userEmail = cookies.userEmail;
            setIsLoading(true);
            if (userEmail) {
                try {
                    await dispatch(
                        userSendOTPRegister({
                            phone,
                            email: userEmail,
                        }),
                    );
                    setIsLoading(false);
                    Cookies.remove('userEmail');
                    toastSuccess('Verify phone successfully. Next enter OTP.');
                    router.push(APP_PATH.AUTH_OTP);
                } catch (error: any) {
                    toastError(error.error);
                    setIsLoading(false);
                }
            } else {
                try {
                    await authApi.loginWithPhone({ phone });
                    setIsLoading(false);
                    toastSuccess('Verify phone successfully. Next enter OTP.');
                    router.push(APP_PATH.AUTH_OTP);
                } catch (error: any) {
                    toastError(error.error);
                    setIsLoading(false);
                }
            }
        } else {
            toastError('Phone is incorrect!');
        }
    };

    return (
        <section className="container bg-white">
            <div className="relative h-screen">
                <Title
                    className="mb-[34px]"
                    content={
                        <button className="p-2" onClick={handleClickBack}>
                            <ArrowLeft />
                        </button>
                    }
                />
                <form className="space-y-6" id="phone" onSubmit={handleSubmit}>
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
                </form>
                <Button
                    className="absolute left-0 bottom-4"
                    title="Xác thực"
                    Icon={<ArrowRightCircleIcon />}
                    block
                    name="phone"
                    htmlType="submit"
                    disabled={loading}
                    form="phone"
                />
            </div>
        </section>
    );
}
