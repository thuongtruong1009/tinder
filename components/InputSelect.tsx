import { Listbox } from '@headlessui/react';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import ArrowDownIcon from './Icons/ArrowDownIcon';

interface Props {
    name: string;
    label: string;
    required?: boolean;
    onChange?: Dispatch<SetStateAction<string>>;
    options: any[];
}

export default function InputSelect({ onChange, name, label, required, options }: Props) {
    //khong gan dc input
    const [input, setInput] = useState<any>(options[0]);

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
            <ArrowDownIcon className="absolute-center-y right-6" />
            <Listbox value={input} onChange={setInput}>
                <Listbox.Button className="text-left">{input.label}</Listbox.Button>
                <Listbox.Options className="absolute pt-[7px] inset-x-0 bg-neutral-5 shadow-md bottom-[calc(100%-5px)] rounded-md overflow-hidden">
                    {options.map((option) => (
                        <Listbox.Option
                            className="transition-all py-1 hover:bg-primary-50 hover:text-white px-[10px] cursor-pointer"
                            key={option.value}
                            value={option}
                        >
                            {option.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
}
