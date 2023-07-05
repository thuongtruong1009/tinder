import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUpdateBio, userUpdateHeight } from '../../redux/actions/userActions';
import { selectUser } from '../../redux/reducers/userSlice';
import { toastError } from '../../utils/toast';
import Button from '../Button';
import Dialog from '../Dialog';
import Input from '../Input';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

interface InputProps {
    height: string;
}

export default function HeightDialog({ isOpen, onClose }: Props) {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const [value, setValue] = useState(sUser.data?.info.height || 0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>();

    const onSubmit: SubmitHandler<InputProps> = async (data) => {
        try {
            await dispatch(userUpdateHeight(+data.height));
            onClose();
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    const handleClose = () => {
        onClose();
    };
    return (
        <>
            <Dialog title="Nhập chiều cao của bạn" isOpen={isOpen} onClose={onClose}>
                <form id="update-height" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Chiều cao(m)"
                        placeholder="Ví dụ: 1.8"
                        name="height"
                        register={register}
                        defaultValue={value.toString()}
                        option={{
                            pattern: {
                                value: /^(?!0\d)\d*(\.\d+)?$/,
                                message: 'Vui lòng chỉ nhập số',
                            },
                            required: {
                                value: true,
                                message: 'Vui lòng chiều cao',
                            },
                        }}
                        error={errors.height?.message}
                    />
                </form>
                <Button form="update-height" title="Lưu" block htmlType="submit" />
            </Dialog>
        </>
    );
}
