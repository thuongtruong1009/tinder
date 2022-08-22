import React from 'react';
import { RiCoinsFill } from 'react-icons/ri';
import { GiTwoCoins } from 'react-icons/gi';
import { BsCashCoin } from 'react-icons/bs';
import { SiBitcoin } from 'react-icons/si';

interface Props {
    type: string;
    price: number;
    choiced: string;
    onClick?: (item: string) => Function;
}

const CoinOption = ({ type, price, choiced, onClick }: Props) => {
    return (
        <div
            className={
                'flex-center flex-col text-center shadow-md shadow-gray-300/50 hover:shadow-gray-400/50 hover:cursor-pointer rounded-2xl border-2 p-4 ' +
                (type === choiced ? 'bg-yellow-400/10 border-yellow-500' : 'bg-white border-transparent')
            }
            onClick={() => onClick && onClick(type)}
        >
            <div className="text-yellow-500 text-3xl">
                {type === 'normal' && <RiCoinsFill />}
                {type === 'premium' && <GiTwoCoins />}
                {type === 'pro' && <BsCashCoin />}
                {type === 'vip' && <SiBitcoin />}
            </div>
            <h5 className="body-1 font-bold text-neutral-100">{type}</h5>
            <p className="body-3 text-neutral-80">${price}/month</p>
        </div>
    );
};

export default CoinOption;
