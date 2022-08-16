import Image from 'next/image';

interface Props {
    Icon: JSX.Element;
    onClick: () => void;
}

export default function CircleButton({ Icon, onClick }: Props) {
    return (
        <button
            className="shadow-md flex justify-center items-center w-[54px] h-[54px] bg-white rounded-full cursor-pointer"
            onClick={onClick}
        >
            {Icon}
        </button>
    );
}
