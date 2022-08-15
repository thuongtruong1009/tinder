import React from 'react';
import RadioCheckedIcon from '../Icons/profile/RadioCheckedIcon';
import StatusIcon from '../Icons/profile/StatusCupIcon';

interface Props {
    className?: string;
    title: string;
    icon: React.ReactNode;
    radioIcon: React.ReactNode;
    onClick?: () => void;
}

export default function StatusRadioList({ className = '', title, icon, radioIcon, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="bg-neutral-5 rounded-xl flex justify-between items-center py-2.5 px-2 font-bold text-neutral-100 cursor-pointer ease-linear hover:shadow-md"
        >
            <div className="flex gap-2">
                {icon}
                <h5>{title}</h5>
            </div>
            {radioIcon}
        </button>
    );
}
