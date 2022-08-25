import Image from 'next/image';

interface Props {
    id: string;
    name: string;
    price: number;
    image: string;
    choiced: string;
    onClick?: (item: string) => void;
}

const GiftOption = ({ id, name, price, image, choiced, onClick }: Props) => {
    return (
        <div
            className={
                'flex-center flex-col text-center shadow-md shadow-gray-300/50 hover:shadow-gray-400/50 hover:cursor-pointer rounded-2xl border-2 p-4 ' +
                (id === choiced ? 'bg-yellow-400/10 border-yellow-500' : 'bg-white border-transparent')
            }
            onClick={() => onClick && onClick(name)}
        >
            <div className="w-20 h-20 min-w-12 min-h-12">
                <div className="w-full h-full bg-cover image-container rounded-xl">
                    <Image src={image} alt={`${name}_img`} layout="fill" />
                </div>
            </div>
            <h5 className="font-bold body-1 text-neutral-100">{name}</h5>
            <p className="italic text-red-500 body-3">${price}</p>
        </div>
    );
};

export default GiftOption;
