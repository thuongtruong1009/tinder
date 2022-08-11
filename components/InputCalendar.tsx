import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import CalendarIcon from './Icons/CalendarIcon';

interface Props {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    value?: string;
    onChange?: Dispatch<SetStateAction<string>>;
}

export default function InputCalendar({ value = '', onChange, name, label, placeholder, required }: Props) {
    const [input, setInput] = useState<string>(value);
    useEffect(() => {
        onChange && onChange(input);
    }, [input, onChange]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    return (
        <div className="relative flex flex-col gap-1 bg-neutral-5 py-2 px-[10px] rounded-lg">
            <label className="text-xs" htmlFor={name}>
                <span className="text-neutral-40">{label}</span>
                {required && <span className="text-[#FE5D5D]">*</span>}
            </label>
            <input
                value={input}
                onChange={handleChange}
                className="w-full bg-transparent"
                name={name}
                type="string"
                placeholder={placeholder}
            />
            <button className="absolute top">
                <CalendarIcon />
            </button>
        </div>
    );
}
