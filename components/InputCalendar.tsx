import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import CalendarIcon from './Icons/CalendarIcon';

interface Props {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    value?: Date;
    onChange?: Dispatch<SetStateAction<Date>>;
}

export default function InputCalendar({ value, onChange, name, label, placeholder, required }: Props) {
    const inputRef = useRef(null);
    const [input, setInput] = useState<Date>(value || new Date());
    useEffect(() => {
        onChange && onChange(input);
    }, [input, onChange]);

    const handleChange = (date: Date) => {
        setInput(date);
    };
    return (
        <>
            <div className="relative flex flex-col bg-neutral-5 py-2 px-[10px] rounded-lg">
                <label className="mb-1 text-xs" htmlFor={name}>
                    <span className="text-neutral-40">{label}</span>
                    {required && <span className="text-[#FE5D5D]">*</span>}
                </label>
                <ReactDatePicker className="bg-neutral-5" ref={inputRef} selected={input} onChange={handleChange} />
                <div className="right-[10px] absolute-center-y p-[10px] pointer-events-none">
                    <CalendarIcon />
                </div>
            </div>
            {!input && <p className="pl-2 text-xs font-medium text-red-500">Vui lòng nhập năm sinh</p>}
        </>
    );
}
