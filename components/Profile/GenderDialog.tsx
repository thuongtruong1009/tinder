import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUpdateGender } from '../../redux/actions/userActions';
import { selectInfo } from '../../redux/reducers/infoSlice';
import { selectUser } from '../../redux/reducers/userSlice';
import { toastError } from '../../utils/toast';
import Dialog from '../Dialog';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    genderId: string | undefined;
}

export default function GenderDialog({ isOpen, onClose, genderId }: Props) {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const sInfo = useAppSelector(selectInfo);

    const [genderOptions, setGenderOptions] = useState<IGender[]>(sInfo.genders);
    const [value, setValue] = useState(genderOptions.find((item) => item._id === genderId) || genderOptions[0]);

    const handleClose = () => {
        try {
            onClose();
            if (!sUser.data?.gender || sUser.data.gender._id !== value._id) {
                dispatch(userUpdateGender(value._id)).unwrap();
            }
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    return (
        <>
            <Dialog title="Cho mọi người biết giới tính của bạn?" isOpen={isOpen} onClose={handleClose}>
                <RadioGroup value={value} onChange={setValue} className="space-y-4 max-h-96 overflow-y-auto">
                    {genderOptions.map((item) => (
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
