import ArrowRightIcon from '../Icons/ArrowRightIcon';

interface Props {
    className?: string;
    title: React.ReactNode;
    desc: React.ReactNode;
    icon: React.ReactNode;
    onClick?: () => void;
}
export default function SingleGroup({ icon, className = '', title, desc, onClick }: Props) {
    return (
        <button className={`${className} flex justify-between items-center py-[7px]`} onClick={onClick}>
            <div className="flex flex-row gap-1 item-end">
                <span>{icon}</span>
                <span className="font-bold text-neutral-100 body-3">{title}</span>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-neutral-40 body-3">{desc}</span>
                <ArrowRightIcon className="scale-75" />
            </div>
        </button>
    );
}
