import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUpdateEducation } from '../../redux/actions/userActions';
import { selectInfo } from '../../redux/reducers/infoSlice';
import { selectUser } from '../../redux/reducers/userSlice';
import { toastError } from '../../utils/toast';
import Dialog from '../Dialog';

interface Props {
    isOpen: boolean;
    educationId: string | undefined;
    onClose: () => void;
}

export default function EducationDialog({ isOpen, onClose, educationId }: Props) {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const sInfo = useAppSelector(selectInfo);

    const [educationOptions, setEducationOptions] = useState<IEducation[]>(sInfo.educations);
    const [value, setValue] = useState<IEducation>(
        educationOptions.find((item) => item._id === educationId) || educationOptions[0],
    );

    const handleClose = () => {
        try {
            onClose();
            if (!sUser.data?.info.education || sUser.data.info.education._id !== value._id) {
                dispatch(userUpdateEducation(value._id)).unwrap();
            }
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    return (
        <>
            <Dialog title="Cho mọi người biết học vấn của bạn?" isOpen={isOpen} onClose={handleClose}>
                <RadioGroup value={value} onChange={setValue} className="space-y-4 max-h-96 overflow-y-auto">
                    {educationOptions.map((item) => (
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
