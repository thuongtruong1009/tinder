import Image from 'next/image';

interface Props {
    id: string;
    name: string;
    price: number;
    image: string;
    choiced: string;
    onClick?: (item: string) => Function;
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
            <div className="min-w-12 min-h-12 w-20 h-20">
                <div className="image-container w-full h-full bg-cover rounded-xl">
                    <Image src={image} alt={`${name}_img`} layout="fill" />
                </div>
            </div>
            <h5 className="body-1 font-bold text-neutral-100">{name}</h5>
            <p className="body-3 text-red-500 italic">${price}</p>
        </div>
    );
};

export default GiftOption;
