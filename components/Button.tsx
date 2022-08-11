import { ReactNode } from 'react';
import ArrowDownIcon from './Icons/ArrowDownIcon';
import ArrowRightCircleIcon from './Icons/ArrowRightCircleIcon';

interface Props {
    title?: string;
    size?: 'tiny' | 'small' | 'medium';
    type?: 'primary' | 'secondary';
    Icon?: JSX.Element;
    block?: boolean;
    className?: string;
}

export default function Button({ className = '', title, size = 'medium', type = 'primary', Icon, block }: Props) {
    const sizeClass = () => {
        switch (size) {
            case 'tiny':
                return 'btn-tn';
            case 'small':
                return 'btn-sm';
            case 'medium':
                return 'btn-md';
            default:
                return 'btn-md';
        }
    };
    const typeClass = () => {
        switch (type) {
            case 'primary':
                return 'btn-primary';
            case 'secondary':
                return 'btn-secondary';
            default:
                return 'btn-primary';
        }
    };
    return (
        <button className={`btn ${className} ${block && 'w-full'} ${sizeClass()} ${typeClass()}`}>
            <p className={`${Icon ? '' : 'text-center w-full'}`}>{title}</p>
            {Icon && Icon}
        </button>
    );
}
