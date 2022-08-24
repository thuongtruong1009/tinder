import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { VscLoading } from 'react-icons/vsc';
import Button from '../../components/Button';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import UploadImageIcon from '../../components/Icons/UploadImageIcon';
import Input from '../../components/Input';
import InputCalendar from '../../components/InputCalendar';
import NavbarLayout from '../../components/NavbarLayout';
import AlbumsItem from '../../components/Profile/AlbumsItem';
import APP_PATH from '../../constant/appPath';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUpdateCommonInfo } from '../../redux/actions/userActions';
import { selectUser } from '../../redux/reducers/userSlice';
import { NextPageWithLayout } from '../../types/global';
import { toastError } from '../../utils/toast';

interface InputProps {
    name: string;
}

const UpdateCommonInfo: NextPageWithLayout = () => {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const router = useRouter();

    const [imageFile, setImageFile] = useState<File>();
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [imgUrl, setImgUrl] = useState<string>(sUser.data?.avatar || '');
    const [birthday, setBirthday] = useState<Date>(new Date(sUser.data?.birthday || '2001-01-01'));

    const uploadBtnRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>();

    const handleClick = () => {
        if (uploadBtnRef.current) {
            uploadBtnRef.current.click();
        }
    };

    const handleFileInput = (e: any) => {
        const file: File = e.target.files[0];
        if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
            toastError(file.name + ' không phải kiểu ảnh được phép tải lên.');
        } else {
            setImageFile(file);
            setImgUrl(URL.createObjectURL(file));
        }
    };

    const handleRemove = () => {
        setImageFile(undefined);
        setImgUrl('');
    };

    const onSubmit: SubmitHandler<InputProps> = async (data) => {
        try {
            if (imgUrl && data.name && birthday) {
                const formData = new FormData();
                if (imageFile) {
                    formData.append('avatar', imageFile);
                }
                if (data.name !== sUser.data?.name.firstName + ' ' + sUser.data?.name.lastName) {
                    formData.append('name', data.name);
                }
                if (birthday.toISOString() !== sUser.data?.birthday) {
                    formData.append('birthday', birthday.toISOString());
                }

                //Check formData has value
                if (formData.has('avatar') || formData.has('name') || formData.has('birthday')) {
                    setIsLoading(true);
                    await dispatch(userUpdateCommonInfo(formData)).unwrap();
                } else {
                    toastError('Bạn chưa cập nhật gì');
                }
                router.push(APP_PATH.PROFILE);
            }
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    return (
        <section className="container bg-white">
            <div className="relative h-screen with-navbar">
                <Title
                    className="mb-[34px]"
                    content={
                        <button className="p-2" onClick={() => router.push(APP_PATH.PROFILE)}>
                            <ArrowLeft />
                        </button>
                    }
                />
                <div className="space-y-6">
                    <form className="flex flex-col gap-4" id="first-update" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex-center">
                            {imgUrl ? (
                                <div className="w-1/3">
                                    <AlbumsItem key={imgUrl} url={imgUrl} upLoad onClick={() => handleRemove()} />
                                </div>
                            ) : (
                                <div
                                    onClick={handleClick}
                                    className="flex-col w-1/3 overflow-hidden border-2 border-dashed cursor-pointer text-neutral-100 border-sky-400 rounded-xl aspect-square flex-center gap-y-1"
                                >
                                    <UploadImageIcon />
                                    <span>Tải ảnh lên</span>
                                    <input
                                        type="file"
                                        name="albums"
                                        id="albums"
                                        multiple
                                        hidden
                                        accept="image/png, image/jpg, image/jpeg"
                                        ref={uploadBtnRef}
                                        onChange={handleFileInput}
                                    />
                                </div>
                            )}
                        </div>

                        <Input
                            label="Họ tên"
                            placeholder="Ví dụ: Trần Ngọc Tâm"
                            name="name"
                            register={register}
                            defaultValue={sUser.data?.name.firstName + ' ' + sUser.data?.name.lastName}
                            option={{
                                maxLength: {
                                    value: 30,
                                    message: 'Họ tên không được vượt quá 30 ký tự',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Họ tên không được ít hơn 6 ký tự',
                                },
                                required: {
                                    value: true,
                                    message: 'Vui lòng nhập họ tên',
                                },
                            }}
                            error={errors.name?.message}
                        />
                        <InputCalendar
                            name="birthday"
                            value={birthday}
                            onChange={setBirthday}
                            label="Năm sinh"
                            placeholder="Ví dụ: 20/11/1980"
                        />
                    </form>
                    {isloading ? (
                        <button className="w-full btn btn-md btn-primary flex-center">
                            <VscLoading className="animate-spin" />
                        </button>
                    ) : (
                        <Button form="first-update" title="Xong" block htmlType="submit" />
                    )}
                </div>
            </div>
        </section>
    );
};
UpdateCommonInfo.protected = true;
UpdateCommonInfo.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;

export default UpdateCommonInfo;
