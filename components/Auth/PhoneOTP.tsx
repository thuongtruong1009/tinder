import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../../types/global';
import Button from '../Button';
import Title from '../Home/Title';
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRightCircleIcon from '../Icons/ArrowRightCircleIcon';
import Key from '../Icons/Key';

const PhoneOTP: NextPageWithLayout = () => {
    const router = useRouter();
    return (
        <>
            <section className="container">
                <Title
                    className="mb-[32px]"
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

                        <input
                            type="text"
                            className="rounded h-14 w-full mb-4 px-[10px] text-neutral-20 tracking-widest"
                            placeholder="••••••"
                        />

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
            </section>
        </>
    );
};

export default PhoneOTP;
