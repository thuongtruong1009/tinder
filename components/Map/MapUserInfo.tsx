import Image from 'next/image';
import InformationIcon from '../Icons/InformationIcon';
import LocationIcon from '../Icons/LocationIcon';

interface Props {
    avatar: string;
    name: string;
}

export default function MapUserInfo({ avatar, name }: Props) {
    return (
        <div className="absolute z-[400] flex-center-y bottom-[120px] inset-x-4 bg-white p-2 rounded-3xl gap-2">
            <div className="image-container w-[84px] aspect-square ">
                <Image src={avatar} className="image rounded-[20px]" alt="avatar" layout="fill" />
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-neutral-100">{name}, 22t</h2>
                <div className="py-[5px] px-2 flex-center-y gap-2 bg-neutral-5 rounded-[25px]">
                    <LocationIcon />
                    <span className="body-2">Cách 200m</span>
                </div>
                <button className="absolute p-1 rounded-lg top-4 right-4 ">
                    <InformationIcon fill="#F4F5F5" />
                </button>
            </div>
        </div>
    );
}
