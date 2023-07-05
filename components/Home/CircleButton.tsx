import Image from 'next/image';

interface Props {
    Icon: JSX.Element;
}

export default function CircleButton({ Icon }: Props) {
    return (
        <button className="shadow-md flex justify-center items-center w-[54px] h-[54px] bg-white rounded-full cursor-pointer">
            {Icon}
        </button>
    );
}
