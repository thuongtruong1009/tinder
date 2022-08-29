import Image from 'next/image';

interface Props {
    Icon: JSX.Element;
    IconLoading: JSX.Element;
    onClick: () => void;
    disabled?: boolean;
}

export default function CircleButton({ Icon, IconLoading, onClick, disabled }: Props) {
    return (
        <button
            className="shadow-md flex justify-center items-center w-[54px] h-[54px] bg-white rounded-full cursor-pointer disabled:opacity-70"
            onClick={onClick}
            disabled={disabled}
        >
            {disabled ? IconLoading : Icon}
        </button>
    );
}
