import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import Dialog from '../Dialog';
import ChatOptionIcon from '../Icons/ChatOptionIcon';
import CupIcon from '../Icons/CupIcon';
import KissFaceIcon from '../Icons/KissFaceIcon';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const WhyOptions = [
    {
        _id: 1,
        name: 'Muốn hẹn hò',
        Icon: <CupIcon />,
    },
    {
        _id: 2,
        name: 'Muốn tâm sự',
        Icon: <ChatOptionIcon />,
    },
    {
        _id: 3,
        name: 'Đang tìm một mối quan hệ mới',
        Icon: <KissFaceIcon />,
    },
];

export default function WhyDialog({ isOpen, onClose }: Props) {
    const [value, setValue] = useState(WhyOptions[0]);
    const handleClose = () => {
        onClose();
    };
    return (
        <>
            <Dialog title="Cho mọi người biết lý do bạn ở đây?" isOpen={isOpen} onClose={handleClose}>
                <RadioGroup value={value} onChange={setValue} className="space-y-4">
                    {WhyOptions.map((item) => (
                        <RadioGroup.Option
                            key={item._id}
                            value={item}
                            className="bg-neutral-5 rounded-xl py-[10px] px-2 flex-center-y gap-4 justify-between text-neutral-100 cursor-pointer"
                        >
                            {({ checked }) =>
                                checked ? (
                                    <>
                                        <div className="gap-2 flex-center-x">
                                            {item.Icon}
                                            <p className="text-base font-bold leading-button-1">{item.name}</p>
                                        </div>
                                        <div className="relative flex-shrink-0 w-6 h-6 bg-transparent border-2 rounded-full border-primary-50 before:absolute-center before:w-[14px] before:h-[14px] before:bg-primary-50 before:rounded-full"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="gap-2 flex-center-x">
                                            {item.Icon}
                                            <p className="text-base font-bold leading-button-1">{item.name}</p>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 bg-transparent border-2 rounded-full border-neutral-40"></div>
                                    </>
                                )
                            }
                        </RadioGroup.Option>
                    ))}
                </RadioGroup>
            </Dialog>
        </>
    );
}
