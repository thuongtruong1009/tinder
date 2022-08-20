import { useState } from 'react';
import Button from '../Button';
import Title from '../Home/Title';
import ArrowLeft from '../Icons/ArrowLeft';
import ProfileIcon from '../Icons/ProfileIcon';
import Input from '../Input';
import InputCalendar from '../InputCalendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputSelect from '../InputSelect';

interface Props {}

const GENDERS = [
    {
        value: 'male',
        label: 'Nam',
    },
    {
        value: 'female',
        label: 'Nữ',
    },
    {
        value: 'other',
        label: 'Khác',
    },
];

export default function InfoUser(props: Props) {
    const [input, setInput] = useState({
        name: '',
        email: '',
    });
    return (
        <section className="container bg-white">
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
                        <Input name="name" label="Họ tên" required placeholder="Ví dụ: Trần Ngọc Tâm" />
                        <Input name="email" label="Email" required placeholder="Ví dụ: tamtn@hehe.com" />
                        <InputCalendar name="birthday" label="Năm sinh" placeholder="Ví dụ: 20/11/1980" />
                        <InputSelect name="gender" label="Giới tính" options={GENDERS} />
                    </div>
                </div>
                <Button className="absolute left-0 bottom-4" title="Xong" block />
            </div>
        </section>
    );
}
