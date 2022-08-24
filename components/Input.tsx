import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
    label: string;
    placeholder: string;
    type?: 'text' | 'email';
    disabled?: boolean;
    name: string;
    register: UseFormRegister<any>;
    option?: RegisterOptions;
    error?: string;
    defaultValue?: string;
}

export default function Input({
    name,
    label,
    placeholder,
    type = 'text',
    register,
    option,
    disabled,
    error,
    defaultValue,
}: Props) {
    return (
        <div className="space-y-1">
            <div className="flex flex-col gap-1 bg-neutral-5 py-2 px-[10px] rounded-lg">
                <label className="text-xs" htmlFor={name}>
                    <span className="text-neutral-40">{label}</span>
                    {option?.required && <span className="text-[#FE5D5D]">*</span>}
                </label>
                <input
                    className="w-full bg-transparent"
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    {...register(name, { ...option })}
                />
            </div>
            {error && <p className="pl-2 text-xs font-medium text-red-500">{error}</p>}
        </div>
    );
}
