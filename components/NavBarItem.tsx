import { useRouter } from 'next/router';
import { toastError } from '../utils/toast';

interface Props {
    Icon: JSX.Element;
    label: string;
    active?: boolean;
    IconActive: JSX.Element;
    href?: string;
}

export default function NavBarItem({ Icon, label, IconActive, active, href }: Props) {
    const router = useRouter();
    const handleClick = () => {
        if (href) router.push(href);
        else toastError('Chức năng này chưa được phát triển');
    };
    return (
        <button className="flex-1 py-2 flex-col-center gap-y-2" onClick={handleClick}>
            {active ? IconActive : Icon}
            <p className={`text-xs leading-4 ${active ? 'text-primary-50' : 'text-neutral-40'}`}>{label}</p>
        </button>
    );
}
