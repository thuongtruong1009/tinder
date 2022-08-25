import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUpdateReligion } from '../../redux/actions/userActions';
import { selectUser } from '../../redux/reducers/userSlice';
import { toastError } from '../../utils/toast';
import Dialog from '../Dialog';
import ChatOptionIcon from '../Icons/ChatOptionIcon';
import CupIcon from '../Icons/CupIcon';
import KissFaceIcon from '../Icons/KissFaceIcon';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    religion: boolean | undefined;
}

const ReligionOptions = [
    {
        _id: 1,
        name: 'Có',
        value: true,
    },
    {
        _id: 2,
        name: 'Không',
        value: false,
    },
];

export default function ReligionDialog({ isOpen, onClose, religion }: Props) {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);

    const [value, setValue] = useState(ReligionOptions.find((item) => item.value === religion) || ReligionOptions[0]);
    const handleClose = () => {
        try {
            onClose();
            if (sUser.data && sUser.data.info.religion !== value.value)
                dispatch(userUpdateReligion({ religion: value.value })).unwrap();
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };
    return (
        <>
            <Dialog title="Tôn giáo?" isOpen={isOpen} onClose={handleClose}>
                <RadioGroup value={value} onChange={setValue} className="space-y-4">
                    {ReligionOptions.map((item) => (
                        <RadioGroup.Option
                            key={item._id}
                            value={item}
                            className="bg-neutral-5 rounded-xl py-[10px] px-2 flex-center-y gap-4 justify-between text-neutral-100 cursor-pointer"
                        >
                            {({ checked }) =>
                                checked ? (
                                    <>
                                        <div className="gap-2 flex-center-x">
                                            <p className="text-base font-bold leading-button-1">{item.name}</p>
                                        </div>
                                        <div className="relative flex-shrink-0 w-6 h-6 bg-transparent border-2 rounded-full border-primary-50 before:absolute-center before:w-[14px] before:h-[14px] before:bg-primary-50 before:rounded-full"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="gap-2 flex-center-x">
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
