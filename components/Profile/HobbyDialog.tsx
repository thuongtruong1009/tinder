import { useState } from 'react';
import Dialog from '../Dialog';
import { IoMdClose } from 'react-icons/io';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
interface Hobby {
    _id: number;
    name: string;
}
const HobbyArray = [
    {
        _id: 1,
        name: 'Ngủ',
    },
    {
        _id: 2,
        name: 'Du lịch',
    },
    {
        _id: 3,
        name: 'Ăn uống',
    },
    {
        _id: 4,
        name: 'Câu cá',
    },
    {
        _id: 5,
        name: 'Nấu ăn',
    },
    {
        _id: 6,
        name: 'Chạy bộ',
    },
];

export default function HobbyDialog({ isOpen, onClose }: Props) {
    const [hobbys, setHobbys] = useState<Hobby[]>([]);
    const [hobbyOptions, setHobbyOptions] = useState(HobbyArray);
    const handleClick = (hobby: Hobby) => () => {
        const newHobbys = [...hobbys, hobby];
        setHobbys(newHobbys);
        const newHobbyOptions = hobbyOptions.filter((hobbyOption) => hobbyOption._id !== hobby._id);
        setHobbyOptions(newHobbyOptions);
    };
    const handleRemove = (hobby: Hobby) => () => {
        const newHobbys = hobbys.filter((hobbyItem) => hobbyItem._id !== hobby._id);
        setHobbys(newHobbys);
        const newHobbyOptions = [...hobbyOptions, hobby];
        setHobbyOptions(newHobbyOptions);
    };

    const handleClose = () => {
        onClose();
    };
    return (
        <>
            <Dialog title="Sở thích" isOpen={isOpen} onClose={handleClose}>
                <div className="space-y-2">
                    <div>
                        <h5>Sở thích của bạn</h5>
                        {hobbys.length > 0 ? (
                            <div className="flex flex-wrap gap-2 p-2 overflow-auto rounded-md bg-neutral-5 max-h-24">
                                {hobbys.map((hobby) => (
                                    <button
                                        key={hobby._id}
                                        className="gap-2 px-2 py-1 text-white rounded-md flex-center-y bg-primary-50"
                                        onClick={handleRemove(hobby)}
                                    >
                                        {hobby.name}
                                        <IoMdClose />
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="py-4 text-center uppercase rounded-md bg-neutral-5">Trống</p>
                        )}
                    </div>
                    <div>
                        <h5>Chọn sở thích</h5>
                        {hobbyOptions.length > 0 ? (
                            <div className="flex flex-wrap gap-2 p-2 overflow-auto rounded-md bg-neutral-5 max-h-24">
                                {hobbyOptions.map((hobby) => (
                                    <button
                                        key={hobby._id}
                                        className="gap-2 px-2 py-1 text-white rounded-md flex-center-y bg-primary-50"
                                        onClick={handleClick(hobby)}
                                    >
                                        {hobby.name}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="py-4 text-center uppercase rounded-md bg-neutral-5">Trống</p>
                        )}
                    </div>
                </div>
            </Dialog>
        </>
    );
}
