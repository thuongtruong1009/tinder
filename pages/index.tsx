import Image from 'next/image';
import InfoUser from '../components/Auth/InfoUser';
import LoginPhone from '../components/Auth/LoginPhone';
import Button from '../components/Button';
import Background from '../components/Home';
import Title from '../components/Home/Title';
import AppleIcon from '../components/Icons/AppleIcon';
import FacebookIcon from '../components/Icons/FacebookIcon';
import GoogleIcon from '../components/Icons/GoogleIcon';
import { NextPageWithLayout } from '../types/global';

const Home: NextPageWithLayout = () => {
    return (
        <>
            {/* <Background /> */}
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
                        <button>
                            <FacebookIcon />
                        </button>
                        <button>
                            <GoogleIcon />
                        </button>
                        <button>
                            <AppleIcon />
                        </button>
                    </div>
                </div>
            </section> */}
            {/* <LoginPhone /> */}
            <InfoUser />
        </>
    );
};
export default Home;
