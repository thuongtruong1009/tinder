import Image from 'next/image';

interface Props {
    Icon: JSX.Element;
}

export default function CircleButton({ Icon }: Props) {
    return (
        <button className="flex justify-center items-center w-[54px] h-[54px] bg-white rounded-full drop-shadow-lg hover:cursor-pointer">
            {Icon}
        </button>
    );
}
