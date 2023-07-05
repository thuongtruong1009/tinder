import Image from 'next/image';
import { FaHeart, FaCrown, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

type Props = {
    url: string;
    isDefault: boolean;
    isFavorite: boolean;
    isDefaultFull: boolean;
    isFavoriteFull: boolean;
    onFavorite: () => void;
    onDefault: () => void;
    onDelete: () => void;
};

export default function AlbumsImage({
    url,
    isDefault,
    isFavorite,
    isDefaultFull,
    isFavoriteFull,
    onDefault,
    onDelete,
    onFavorite,
}: Props) {
    const [isShowLayout, setIsShowLayout] = useState(false);

    const handleShowLayout = () => {
        setIsShowLayout(!isShowLayout);
    };

    return (
        <div onClick={handleShowLayout} className="relative overflow-hidden drop-shadow-md rounded-xl">
            {isFavorite && (
                <div className="absolute z-10 p-2 rounded-br-md bg-white/60">
                    <FaHeart fill="#FF5206" />
                </div>
            )}

            {isDefault && (
                <div className="absolute z-10 p-2 rounded-br-md bg-neutral-60/50">
                    <FaCrown fill="#ffd800" />
                </div>
            )}

            {isShowLayout && (
                <div className="absolute z-[11] w-full h-full bg-neutral-80/50 flex-center gap-y-12 flex-col">
                    {isDefaultFull ? (
                        isDefault ? (
                            <button>
                                <FaCrown size={24} fill="#fff" onClick={onDefault} />
                            </button>
                        ) : (
                            ''
                        )
                    ) : (
                        <button>
                            <FaCrown size={24} fill="#fff" onClick={onDefault} />
                        </button>
                    )}
                    {isFavoriteFull ? (
                        isFavorite ? (
                            <button>
                                <FaHeart size={24} fill="#fff" onClick={onFavorite} />
                            </button>
                        ) : (
                            ''
                        )
                    ) : (
                        <button>
                            <FaHeart size={24} fill="#fff" onClick={onFavorite} />
                        </button>
                    )}
                    <button>
                        <FaTrash size={24} fill="#fff" onClick={onDelete} />
                    </button>
                </div>
            )}

            <div className="w-full aspect-9/16 image-container">
                <Image className="object-cover image" alt="avatar" objectPosition="top" layout="fill" src={url} />
            </div>
        </div>
    );
}
