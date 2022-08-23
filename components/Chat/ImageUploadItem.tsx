import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

interface Props {
    src: string;
    index: number;
    onRemove: (index: number) => () => void;
}

export default function ImageUploadItem({ index, src, onRemove }: Props) {
    return (
        <div className="relative flex-shrink-0">
            <div className="h-16 overflow-hidden rounded-md image-container">
                <Image className="image" src={src} alt="demo_img" layout="fill" />
            </div>
            <button
                className="p-1 text-white bg-red-500 rounded-full shadow-md absolute-center"
                onClick={onRemove(index)}
            >
                <IoMdClose />
            </button>
        </div>
    );
}
