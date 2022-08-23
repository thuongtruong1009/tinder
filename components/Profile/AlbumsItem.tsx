import Image from 'next/image';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

type Props = {
    firstImage?: boolean;
    anotherImages?: number;
    middleImage?: boolean;
    upLoad?: boolean;
    url: string;
    onClick?: () => void;
};

export default function AlbumsItem({ firstImage, anotherImages, middleImage, upLoad, url, onClick }: Props) {
    const [isShow, setIsShow] = useState(false);

    let classCSS = 'overflow-hidden rounded-xl aspect-square';
    if (firstImage) {
        classCSS += ' col-span-2 row-span-2';
    }

    const handleClick = () => {
        setIsShow(!isShow);
    };

    return (
        <>
            {(firstImage || middleImage) && (
                <div className={classCSS} onClick={onClick}>
                    <div className="image-container">
                        <Image className="image" alt="post_image" layout="fill" src={url} />
                    </div>
                </div>
            )}
            {anotherImages && (
                <div className="relative overflow-hidden rounded-xl aspect-square" onClick={onClick}>
                    <div className="absolute z-10 w-full h-full text-white bg-neutral-80/50 flex-center">
                        <span>+{anotherImages}</span>
                    </div>
                    <div className="image-container">
                        <Image className="image" alt="post_image" layout="fill" src={url} />
                    </div>
                </div>
            )}
            {upLoad && (
                <div className="relative overflow-hidden rounded-xl aspect-square" onClick={handleClick}>
                    {isShow && (
                        <div className="absolute z-10 w-full h-full bg-neutral-80/50 flex-center">
                            <button onClick={onClick}>
                                <FaTrash size={24} fill="#fff" />
                            </button>
                        </div>
                    )}
                    <div className="image-container">
                        <Image className="image" alt="post_image" layout="fill" src={url} />
                    </div>
                </div>
            )}
        </>
    );
}
