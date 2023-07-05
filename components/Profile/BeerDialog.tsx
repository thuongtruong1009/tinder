import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUpdateBeer } from '../../redux/actions/userActions';
import { selectInfo } from '../../redux/reducers/infoSlice';
import { selectUser } from '../../redux/reducers/userSlice';
import { toastError } from '../../utils/toast';
import Dialog from '../Dialog';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    beerId: string | undefined;
}

export default function BeerDialog({ isOpen, onClose, beerId }: Props) {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const sInfo = useAppSelector(selectInfo);

    const [beerOptions, setBeerOptions] = useState<IBeer[]>(sInfo.beers);
    const [value, setValue] = useState(beerOptions.find((item) => item._id === beerId) || beerOptions[0]);

    const handleClose = () => {
        try {
            onClose();
            if (!sUser.data?.info.beer || sUser.data.info.beer._id !== value._id) {
                dispatch(userUpdateBeer(value._id)).unwrap();
            }
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    return (
        <>
            <Dialog title="Bạn có hay uống sinh tố lúa mạch không?" isOpen={isOpen} onClose={handleClose}>
                <RadioGroup value={value} onChange={setValue} className="space-y-4 overflow-y-auto max-h-96">
                    {beerOptions.map((item) => (
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
