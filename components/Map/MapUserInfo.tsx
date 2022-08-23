import Image from 'next/image';
import InformationIcon from '../Icons/InformationIcon';
import LocationIcon from '../Icons/LocationIcon';

interface Props {
    data: IDataFindFriendsAroundResponse;
    onClick: () => void;
}

export default function MapUserInfo({ data, onClick }: Props) {
    return (
        <div className="absolute z-[400] flex-center-y bottom-[120px] inset-x-4 bg-white p-2 rounded-3xl gap-2">
            <div className="image-container w-[84px] aspect-square flex-shrink-0">
                <Image src={data.avatar} className="image rounded-[20px]" alt="avatar" layout="fill" />
            </div>
            <div className="flex flex-col gap-1 w-[calc(100%-136px)]">
                <h2 className="text-neutral-100">
                    <>
                        {data.name.lastName}, {data.age}t
                    </>
                </h2>
                <div>
                    <div className="py-[5px] px-2 inline-flex items-center gap-2 bg-neutral-5 rounded-[25px]">
                        <LocationIcon />
                        <span className="body-2">Cách {data.distance}m</span>
                    </div>
                </div>
                <button className="absolute p-1 rounded-lg top-4 right-4" onClick={onClick}>
                    <InformationIcon fill="#F4F5F5" />
                </button>
            </div>
        </div>
    );
}
