interface Props {
    title: string;
    Icon: JSX.Element;
}

export default function InfoComponent({ title, Icon }: Props) {
    return (
        <div className="gap-2 flex-center-y bg-neutral-5 rounded-[32px] px-2 py-1 w-fit ">
            {Icon}
            <span className="font-medium text-caption-1 leading-caption-1">{title}</span>
        </div>
    );
}
