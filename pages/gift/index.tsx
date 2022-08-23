import Image from 'next/image';
import { BsCoin } from 'react-icons/bs';
import { VscDebugContinueSmall } from 'react-icons/vsc';
import CloseIcon from '../../components/Icons/CloseIcon';
import { NextPageWithLayout } from '../../types/global';
import CoinOption from '../../components/Gift/CoinOption';
import { useCallback, useEffect, useState } from 'react';
import giftApi from '../../apis/giftApi';

const GiftPackage: NextPageWithLayout = () => {
    const [choiced, setChoiced] = useState<string>('normal');
    const [res, setRes] = useState<IGift[] | null>(null);

    const fetchData = useCallback(async () => {
        const data = await giftApi.getAllGifts();
        setRes((data.data as IGetAllGiftResponse).data.gifts);
    }, []);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);

    return (
        <section className="container-np bg-white min-h-screen relative">
            <div className="bg-main-purple text-white">
                <nav className="flex justify-between items-center px-4 py-2">
                    <button>
                        <CloseIcon />
                    </button>
                    <button className="flex-center gap-1.5 rounded-2xl border-2 border-neutral-50 px-2 bg-yellow-500 shadow-md">
                        <BsCoin />
                        <p>200</p>
                    </button>
                </nav>
                <div className="flex flex-col gap-5 py-6 text-center">
                    <h2 className="font-medium">Gift package</h2>
                    <p className="body-3">See who's already interested in you!</p>
                </div>
            </div>
            <div className="bg-white p-4">
                <div className="grid grid-cols-2 p gap-4">
                    {res?.map((item) => (
                        <CoinOption
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            choiced={choiced}
                            image={item.image}
                            key={item._id}
                            onClick={() => setChoiced(item._id)}
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
