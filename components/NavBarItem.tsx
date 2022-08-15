import { useRouter } from 'next/router';

interface Props {
    Icon: JSX.Element;
    label: string;
    active?: boolean;
    IconActive: JSX.Element;
    href: string;
}

export default function NavBarItem({ Icon, label, IconActive, active, href }: Props) {
    const router = useRouter();
    const handleClick = () => {
        router.push(href);
    };
    return (
        <button className="flex-col-center gap-y-1 aspect-square" onClick={handleClick}>
            {active ? IconActive : Icon}
            <p className={`text-xs leading-4 ${active ? 'text-primary-50' : 'text-neutral-40'}`}>{label}</p>
        </button>
    );
}
