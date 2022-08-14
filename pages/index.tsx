import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import Title from '../components/Home/Title';
import AppleIcon from '../components/Icons/AppleIcon';
import FacebookIcon from '../components/Icons/FacebookIcon';
import GoogleIcon from '../components/Icons/GoogleIcon';
import APP_PATH from '../constant/appPath';
import { NextPageWithLayout } from '../types/global';

const Home: NextPageWithLayout = () => {
    const router = useRouter();
    const loginWithGoogle = () => {
        window.open(`${process.env.URL_LOGIN_WITH_GOOGLE}`, '_self');
    };
    const loginWithFacebook = () => {
        window.open(`${process.env.URL_LOGIN_WITH_FACEBOOK}`, '_self');
    };
    const handleClickPhone = () => {
        router.push(APP_PATH.AUTH_PHONE);
    };
    return (
        <>
            <section className="container">
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
                <Button title="Đăng nhập bằng số điện thoại" type="secondary" block onClick={handleClickPhone} />
                <div className="py-6 space-y-2">
                    <p className="text-neutral-40 leading-[18px] text-center">Hoặc đăng nhập với:</p>
                    <div className="gap-8 flex-center">
                        <button onClick={loginWithFacebook}>
                            <FacebookIcon />
                        </button>
                        <button onClick={loginWithGoogle}>
                            <GoogleIcon />
                        </button>
                        <button disabled>
                            <AppleIcon />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;
