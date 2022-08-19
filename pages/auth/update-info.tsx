import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
import { selectGender } from '../../redux/reducers/genderSlice';
import { selectUser } from '../../redux/reducers/userSlice';
import { NextPageWithLayout } from '../../types/global';

interface Props {}

// const GENDERS = [
//     {
//         value: 'male',
//         label: 'Nam',
//     },
//     {
//         value: 'female',
//         label: 'Nữ',
//     },
//     {
//         value: 'other',
//         label: 'Khác',
//     },
// ];

const UpdateInfo: NextPageWithLayout = (props: Props) => {
    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const sGender = useAppSelector(selectGender);
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState<any>();
    const [birthday, setBirthday] = useState<Date>(new Date());
    const [genders, setGenders] = useState<any>(sGender.data.map((gen) => ({ value: gen._id, label: gen.name })));

    if (!sUser.data?.status.isFirstUpdate) {
        router.push(APP_PATH.SURF);
    }

    const handleSubmit = () => {
        console.log('name: ', name);
        console.log('email: ', email);
        console.log('birthday: ', birthday);
        console.log('gender: ', gender);
    };

    async function getGender() {
        const response = await dispatch(genderGetAllGenders()).unwrap();
        const result = response.map((gen) => ({ value: gen._id, label: gen.name }));
        setGenders(result);
    }

    return (
        <section className="container">
            <div className="relative h-screen">
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
                        <p className="text-neutral-40 text-sm leading-[18px]">
                            Vui lòng nhập mã OTP được gửi về số điện thoại của bạn, để hoàn thành đăng nhập.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input
                            name="name"
                            label="Họ tên"
                            value={name}
                            onChange={setName}
                            required
                            placeholder="Ví dụ: Trần Ngọc Tâm"
                        />
                        <Input
                            name="email"
                            label="Email"
                            value={email}
                            onChange={setEmail}
                            required
                            placeholder="Ví dụ: tamtn@hehe.com"
                        />
                        <InputCalendar
                            name="birthday"
                            value={birthday}
                            onChange={setBirthday}
                            label="Năm sinh"
                            placeholder="Ví dụ: 20/11/1980"
                        />
                        <InputSelect name="gender" label="Giới tính" onChange={setGender} options={genders} />
                    </div>
                </div>
                <Button onClick={handleSubmit} className="absolute left-0 bottom-4" title="Xong" block />
            </div>
        </section>
    );
};

UpdateInfo.protected = true;

export default UpdateInfo;
