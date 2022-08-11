import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../../types/global';
import Button from '../Button';
import Title from '../Home/Title';
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRightCircleIcon from '../Icons/ArrowRightCircleIcon';
import Key from '../Icons/KeyIcon';

const PhoneOTP: NextPageWithLayout = () => {
    const router = useRouter();
    return (
        <>
            <section className="container">
                <div className="relative h-screen">
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
                                pattern="^[0-9]*$"
                                maxLength={10}
                                minLength={10}
                                title="Only accept number and contain 6 numbers"
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

export default PhoneOTP;
