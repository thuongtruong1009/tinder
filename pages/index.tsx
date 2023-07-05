import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import Title from '../components/Home/Title';
import AppleIcon from '../components/Icons/AppleIcon';
import FacebookIcon from '../components/Icons/FacebookIcon';
import GoogleIcon from '../components/Icons/GoogleIcon';
import APP_PATH from '../constant/appPath';
import { useAppSelector } from '../hooks/redux';
import { selectUser } from '../redux/reducers/userSlice';
import { NextPageWithLayout } from '../types/global';
import Cookies from 'js-cookie';
import { toastError } from '../utils/toast';

const Home: NextPageWithLayout = () => {
    const router = useRouter();
    const sUser = useAppSelector(selectUser);
    if (sUser.isLogin) {
        router.push(APP_PATH.SURF);
        return null;
    }

    const cookies = Cookies.get();
    const errMessage = cookies.errMessage;
    if (errMessage) {
        toastError(errMessage);
        Cookies.remove('errMessage');
    }

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
            <section className="container bg-white">
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
