import Image from 'next/image';
import { BsCoin } from 'react-icons/bs';
import { VscDebugContinueSmall } from 'react-icons/vsc';
import CloseIcon from '../../components/Icons/CloseIcon';
import { NextPageWithLayout } from '../../types/global';
import CoinOption from '../../components/Gift/CoinOption';
import { useState } from 'react';

const GiftPackage: NextPageWithLayout = () => {
    const [choiced, setChoiced] = useState<string>('normal');
    return (
        <section className="container-np bg-white min-h-screen relative">
            <div className="bg-main-purple text-white">
                <nav className="flex justify-between items-center px-4 py-2">
                    <button>
                        <CloseIcon />
                    </button>
                    <p className="body-1 font-medium translate-x-5">Gift package</p>
                    <button className="flex-center gap-1.5 rounded-2xl border-2 border-neutral-50 px-2 bg-yellow-500 shadow-md">
                        <BsCoin />
                        <p>200</p>
                    </button>
                </nav>
                <div className="flex flex-col gap-5 py-10">
                    <div className="flex justify-center -space-x-3.5">
                        <div className="image-container w-10 h-10 rounded-full border-2 border-white z-10">
                            <Image className="image" src="/assets/images/post.png" alt="gifter_avatar" layout="fill" />
                        </div>
                        <div className="image-container w-10 h-10 rounded-full border-2 border-white z-20">
                            <Image
                                className="image"
                                src="/assets/images/avatar.png"
                                alt="gifter_avatar"
                                layout="fill"
                            />
                        </div>
                        <a
                            className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-600 rounded-full border-2 border-white hover:bg-gray-500 z-30"
                            href="#"
                        >
                            +10
                        </a>
                    </div>
                    <p className="text-center body-3">See who's already interested in you!</p>
                </div>
            </div>
            <div className="bg-white p-4">
                <div className="grid grid-cols-2 p gap-4">
                    {['normal', 'premium', 'pro', 'vip'].map((item, index) => (
                        <CoinOption
                            type={item}
                            price={index}
                            choiced={choiced}
                            key={index}
                            onClick={() => setChoiced(item)}
                        />
                    ))}
                </div>
            </div>
            <div className="text-xs text-neutral-60 gap-3 text-left p-5">
                <p>
                    <span className="text-red-500">*</span> Gifts package will be charged to your account through
                    notifications
                </p>
                <p>
                    <span className="text-red-500">*</span> All payment follow by our policy & services. Safely and
                    fastly!
                </p>
            </div>
            <div className="flex-center absolute w-full left-0 bottom-0 p-10">
                <button className="bg-main-purple py-2 px-8 text-white w-[90%] rounded-3xl shadow-lg hover:bg-[#714fe9] flex-center gap-2">
                    <VscDebugContinueSmall /> Continue
                </button>
            </div>
        </section>
    );
};

// GiftPackage.protected = true;
export default GiftPackage;
