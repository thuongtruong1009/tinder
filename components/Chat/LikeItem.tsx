import Image from 'next/image';

interface Props {
    avatar: string;
    name: string;
}

export default function LikeItem({ avatar, name }: Props) {
    return (
        <div className="cursor-pointer w-[89px] rounded-lg shadow-md border border-slate-200">
            <div className="w-full overflow-hidden aspect-square image-container rounded-t-xl">
                <Image className="image" src={avatar} alt="avatar_img" layout="fill" />
            </div>
            <div className="py-2 text-xs text-center text-neutral-80">
                <span className="font-bold line-clamp-1">{name}</span>
            </div>
        </div>
    );
}
