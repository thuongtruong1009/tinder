import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { UserContextType } from '../../types/context/user';
import { UserContext } from '../../context/userContext';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/redux';
import { userVerifyOTP } from '../../redux/actions/userActions';
import PhoneOTP from '../../components/Auth/PhoneOTP';
import InputOTP from '../../components/Auth/InputOTP';
import Button from '../../components/Button';
import ArrowRightCircleIcon from '../../components/Icons/ArrowRightCircleIcon';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import Title from '../../components/Home/Title';
import Key from '../../components/Icons/KeyIcon';

const OTP: NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [cookies, setCookie] = useCookies(['userEmail']);
    const { register, handleSubmit } = useForm();
    console.log('email cookie: ', cookies.userEmail);

    const { phone, userSignUp, saveJwtToken } = useContext(UserContext) as UserContextType;
    console.log('phone: ', phone);

    const onSubmit = async (data: any) => {
        console.log(data);

        let body = {};
        if (phone) {
            body = {
                phone,
            };
        } else if (cookies.userEmail) {
            body = {
                email: cookies.userEmail,
            };
        }
        await dispatch(
            userVerifyOTP({
                ...body,
                otp: data.otp,
            }),
        );
        // const response = await fetch(`${process.env.VERIFY_OTP_LOGIN}`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         ...body,
        //         otp: data.otp,
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // const result = await response.json();
        // if (!response.ok) {
        //     alert(result.error);
        // } else {
        //     console.log(result);
        //     // saveJwtToken(result.data.token);
        //     // router.push('/');
        // }
    };

    return (
        <>
            <section className="container">
                <div className="relative min-h-screen with-button">
                    <Title
                        className="mb-8"
                        content={
                            <button className="p-2">
                                <ArrowLeft />
                            </button>
                        }
                    />
                    <div className="space-y-6">
                        <div className="w-24 h-24 p-4 rounded-3xl image-container bg-neutral-5">
                            <Key />
                        </div>
                        <div>
                            <h4 className="mb-1">Mã xác thực</h4>
                            <p className="mb-6 text-caption-1 leading-caption-1 text-neutral-40">
                                Vui lòng nhập mã OTP được gửi về số điện thoại của bạn, để hoàn thành đăng nhập.
                            </p>
                            <InputOTP />

                            <div className="flex justify-end">
                                <button
                                    className="font-normal underline text-primary-40 text-caption-1 leading-caption-1 hover:cursor-pointer"
                                    onClick={() => router.push('/map')}
                                >
                                    Gửi lại OTP
                                </button>
                            </div>
                        </div>
                    </div>
                    <Button
                        className="absolute left-0 bottom-4"
                        title="Tiếp tục"
                        Icon={<ArrowRightCircleIcon />}
                        block
                    />
                </div>
            </section>
        </>
    );
};

export default OTP;
