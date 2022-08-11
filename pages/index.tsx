import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import PhoneOTP from '../components/Auth/PhoneOTP';
import Button from '../components/Button';
import Background from '../components/Home';
import HomeComponent from '../components/Home/HomeComponent';
import Title from '../components/Home/Title';
import AppleIcon from '../components/Icons/AppleIcon';
import FacebookIcon from '../components/Icons/FacebookIcon';
import GoogleIcon from '../components/Icons/GoogleIcon';
import { UserContext } from '../context/userContext';
import { UserContextType } from '../types/context/user';
import { NextPageWithLayout } from '../types/global';

const Home: NextPageWithLayout = () => {
    const router = useRouter();
    const { savePhone } = useContext(UserContext) as UserContextType;
    const { register, handleSubmit } = useForm();
    const [phone, setPhone] = useState<any | undefined>();
    const [cookies, setCookie, removeCookie] = useCookies(['errMessage']);

    const onSubmit = async (data: any) => {
        const response = await fetch(`${process.env.LOGIN_WITH_PHONE_LOGIN}`, {
            method: 'POST',
            body: JSON.stringify({
                phone: phone,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errorResult = await response.json();
            alert(errorResult.error);
        } else {
            savePhone(phone);
            router.push('/auth/otp');
        }
    };
    console.log(cookies.errMessage);
    if (cookies.errMessage) {
        alert(cookies.errMessage);
        removeCookie('errMessage');
    }

    const loginWithGoogle = async () => {
        window.open(`${process.env.URL_LOGIN_WITH_GOOGLE}`, '_self');
    };

    const loginWithFacebook = () => {
        window.open(`${process.env.URL_LOGIN_WITH_FACEBOOK}`, '_self');
    };

    return (
        <>
            {/* <Background /> */}
            {/* <HomeComponent /> */}
            <PhoneOTP />
            {/* <section className="container">
                <Title
                    className="mb-4"
                    content={<h1 className="font-extrabold leading-10 text-h2 text-primary-50 font-secondary">Foxy</h1>}
                />
                <div className="mb-8 image-container">
                    <Image className="image" src="/assets/images/banner.png" alt="banner" layout="fill" />
                </div>
                <div className="mb-4 space-y-1">
                    <h3>Đăng nhập</h3>
                    <p className="text-neutral-40">Vui lòng chọn hình thức đăng nhập để tiếp tục sử dụng</p>
                </div>
                <Button className="mb-6" title="Đăng nhập bằng số điện thoại" type="secondary" block />
                <div className="space-y-2">
                    <p className="text-neutral-40 leading-[18px] text-center">Hoặc đăng nhập với:</p>
                    <div className="gap-8 flex-center">
                        <button onClick={loginWithFacebook}>
                            <FacebookIcon />
                        </button>
                        <button onClick={loginWithGoogle}>
                            <GoogleIcon />
                        </button>
                        <button>
                            <AppleIcon />
                        </button>
                    </div>
                </div>
            </section> */}
        </>
    );
};
export default Home;
