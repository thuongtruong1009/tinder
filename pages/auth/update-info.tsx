import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import ProfileIcon from '../../components/Icons/ProfileIcon';
import Input from '../../components/Input';
import InputCalendar from '../../components/InputCalendar';
import InputSelect from '../../components/InputSelect';
import APP_PATH from '../../constant/appPath';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { genderGetAllGenders } from '../../redux/actions/genderAction';
import { userFirstUpdate } from '../../redux/actions/userActions';
import { selectUser } from '../../redux/reducers/userSlice';
import { NextPageWithLayout } from '../../types/global';
import { toastError } from '../../utils/toast';

interface InputProps {
    email: string;
    name: string;
}

interface IGenderOption {
    value: string;
    label: string;
}

const UpdateInfo: NextPageWithLayout = () => {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InputProps>({
        defaultValues: {
            email: sUser.data?.email || '',
        },
    });
    const [gender, setGender] = useState<any>();
    const [birthday, setBirthday] = useState<Date>(new Date());
    const [genders, setGenders] = useState<IGenderOption[]>();

    if (!sUser.data?.status.isFirstUpdate) {
        router.push(APP_PATH.SURF);
    }

    const onSubmit: SubmitHandler<InputProps> = async (data) => {
        try {
            if (sUser?.data?.email) {
                const { name } = data;
                await dispatch(userFirstUpdate({ name, birthday: birthday.toISOString(), gender: gender.value }));
            } else {
                const { name, email } = data;
                await dispatch(
                    userFirstUpdate({ email, name, birthday: birthday.toISOString(), gender: gender.value }),
                );
            }
            router.push(APP_PATH.SURF);
        } catch (error) {
            console.log('error: ', error);
            toastError((error as IResponseError).error);
        }
    };

    useEffect(() => {
        async function getGender() {
            try {
                const response = await dispatch(genderGetAllGenders()).unwrap();
                const result = response.map((gen) => ({ value: gen._id, label: gen.name }));
                setGenders(result);
            } catch (error) {
                toastError((error as IResponseError).error);
            }
        }
        getGender();
    }, [dispatch]);
    return (
        <section className="container">
            <div className="relative h-screen with-navbar">
                <Title
                    className="mb-[34px]"
                    content={
                        <button className="p-2">
                            <ArrowLeft />
                        </button>
                    }
                />
                <div className="space-y-6">
                    <div className="w-24 h-24 p-4 image-container rounded-3xl bg-neutral-5">
                        <ProfileIcon />
                    </div>
                    <div className="mb-6 space-y-1">
                        <h4 className="text-neutral-100">Thông tin cá nhân</h4>
                        {/* <p className="text-neutral-40 text-sm leading-[18px]">
                            Vui lòng nhập mã OTP được gửi về số điện thoại của bạn, để hoàn thành đăng nhập.
                        </p> */}
                    </div>
                    <form className="flex flex-col gap-4" id="first-update" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label="Họ tên"
                            placeholder="Ví dụ: Trần Ngọc Tâm"
                            name="name"
                            register={register}
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
                        <Input
                            name="email"
                            label="Email"
                            // value={sUser.data?.email ? sUser.data.email : email}
                            placeholder="Ví dụ: tamtn@hehe.com"
                            disabled={sUser.data?.email ? true : false}
                            register={register}
                            option={{
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Email không hợp lệ',
                                },
                                required: true,
                            }}
                            error={errors.email?.message}
                        />
                        <InputCalendar
                            name="birthday"
                            value={birthday}
                            onChange={setBirthday}
                            label="Năm sinh"
                            placeholder="Ví dụ: 20/11/1980"
                        />
                        {genders && (
                            <InputSelect name="gender" label="Giới tính" onChange={setGender} options={genders} />
                        )}
                    </form>
                </div>
                <Button form="first-update" className="absolute left-0 bottom-4" title="Xong" block htmlType="submit" />
            </div>
        </section>
    );
};

UpdateInfo.protected = true;

export default UpdateInfo;
