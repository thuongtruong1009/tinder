import Image from 'next/image';
import { BsCoin } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CloseIcon from '../../components/Icons/CloseIcon';
import { NextPageWithLayout } from '../../types/global';
import { useCallback, useEffect, useState } from 'react';
import giftApi from '../../apis/giftApi';
import GiftOption from '../../components/Gift/GiftOption';
import { useRouter } from 'next/router';
import APP_PATH from '../../constant/appPath';

const GiftPackage: NextPageWithLayout = () => {
    const router = useRouter();
    const [choiced, setChoiced] = useState<string>('');
    const [res, setRes] = useState<IGift[] | null>(null);

    const fetchData = useCallback(async () => {
        const data = await giftApi.getAllGifts();
        setRes((data.data as IGetAllGiftResponse).data.gifts);
        setChoiced((data.data as IGetAllGiftResponse).data.gifts[0]._id);
    }, []);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);

    return (
        <section className="relative min-h-screen bg-white container-np">
            <div className="text-white bg-main-purple">
                <nav className="flex items-center justify-between px-4 py-2">
                    <button onClick={() => router.push(APP_PATH.PROFILE)}>
                        <CloseIcon />
                    </button>
                    <p className="flex-center gap-1.5 rounded-2xl border-2 border-neutral-50 px-2 bg-yellow-500 shadow-md select-none">
                        <BsCoin />
                        <span>200</span>
                    </p>
                </nav>
                <div className="flex flex-col gap-5 py-6 text-center">
                    <h2 className="font-medium" style={{ textShadow: '1px 3px 3px black' }}>
                        Món quà
                    </h2>
                    <p className="body-3">Tặng cho bạn bè món quà đặc biệt</p>
                </div>
            </div>
            <div className="p-4 bg-white">
                <div className="grid grid-cols-2 gap-4 p">
                    {res?.map((item) => (
                        <GiftOption
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
            <div className="absolute bottom-0 left-0 w-full p-10 flex-center">
                <button className="bg-main-purple py-2 px-8 text-white w-[90%] rounded-3xl shadow-lg hover:bg-[#714fe9] flex-center gap-2 uppercase">
                    <AiOutlineShoppingCart /> Mua
                </button>
            </div>
        </section>
    );
};

// GiftPackage.protected = true;
export default GiftPackage;
