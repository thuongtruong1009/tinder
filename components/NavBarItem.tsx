interface Props {
    Icon: JSX.Element;
    label: string;
    active?: boolean;
    IconActive: JSX.Element;
}

export default function NavBarItem({ Icon, label, IconActive, active }: Props) {
    return (
        <button className="flex-col-center gap-y-1 aspect-square">
            {active ? IconActive : Icon}
            <p className={`text-xs leading-4 ${active ? 'text-primary-50' : 'text-neutral-40'}`}>{label}</p>
        </button>
    );
}
