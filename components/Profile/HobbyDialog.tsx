import { useEffect, useState } from 'react';
import Dialog from '../Dialog';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUpdateHobbies } from '../../redux/actions/userActions';
import { toastError } from '../../utils/toast';
import { selectUser } from '../../redux/reducers/userSlice';
import { infoGetAllHobbies } from '../../redux/actions/infoAction';
import { selectInfo } from '../../redux/reducers/infoSlice';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function HobbyDialog({ isOpen, onClose }: Props) {
    const dispatch = useAppDispatch();
    const sInfo = useAppSelector(selectInfo);
    const sUser = useAppSelector(selectUser);

    const [hobbies, setHobbies] = useState<IHobby[]>(sUser.data?.hobbies || []);
    const [hobbyOptions, setHobbyOptions] = useState<IHobby[]>(
        sInfo.hobbies.filter((hobby) => !hobbies.some((h) => h._id === hobby._id)),
    );

    const handleClick = (hobby: IHobby) => () => {
        const newHobbys = [...hobbies, hobby];
        setHobbies(newHobbys);

        const newHobbyOptions = hobbyOptions.filter((hobbyOption) => hobbyOption._id !== hobby._id);
        setHobbyOptions(newHobbyOptions);
    };

    const handleRemove = (hobby: IHobby) => () => {
        const newHobbys = hobbies.filter((hobbyItem) => hobbyItem._id !== hobby._id);
        setHobbies(newHobbys);
        const newHobbyOptions = [...hobbyOptions, hobby];
        setHobbyOptions(newHobbyOptions);
    };

    const handleSubmit = async () => {
        onClose();
        try {
            await dispatch(userUpdateHobbies(hobbies.map((hobby) => hobby._id))).unwrap();
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    useEffect(() => {
        async function getAllHobbies() {
            try {
                const response = await dispatch(infoGetAllHobbies()).unwrap();
                let results = response;
                results = results.filter((hobby) => !hobbies.some((hobbyItem) => hobbyItem._id === hobby._id));
                setHobbyOptions(results);
            } catch (error) {
                toastError((error as IResponseError).error);
            }
        }
        if (sInfo.hobbies.length === 0) {
            getAllHobbies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Dialog title="Sở thích" isOpen={isOpen} onClose={onClose}>
                <div className="space-y-2">
                    <div>
                        <h5>Sở thích của bạn</h5>
                        {hobbies.length > 0 ? (
                            <div className="flex flex-wrap gap-2 p-2 overflow-auto rounded-md bg-neutral-5 max-h-32">
                                {hobbies.map((hobby) => (
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
                        {sInfo.hobbies.length > 0 ? (
                            <div className="flex flex-wrap gap-2 p-2 overflow-auto rounded-md bg-neutral-5 max-h-32">
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
                <Button onClick={handleSubmit} block title="Lưu" type="secondary" className="mt-auto" />
            </Dialog>
        </>
    );
}
