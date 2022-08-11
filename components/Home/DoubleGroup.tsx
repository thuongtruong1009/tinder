import ArrowRightIcon from '../Icons/ArrowRightIcon';

interface Props {
    className?: string;
    title: React.ReactNode;
    desc: React.ReactNode;
    onClick?: () => Function;
}
export default function DoubleGroup({ className = '', title, desc, onClick }: Props) {
    return (
        <button onClick={onClick} className={`${className} flex justify-between items-center py-2`}>
            <div className="flex flex-col gap-1">
                <h5 className="font-bold text-neutral-100">{title}</h5>
                <span className="text-neutral-60 body-3">{desc}</span>
            </div>
            <ArrowRightIcon />
        </button>
    );
}