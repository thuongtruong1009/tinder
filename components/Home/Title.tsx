interface Props {
    className?: string;
    content: React.ReactNode;
}

export default function Title({ className = '', content }: Props) {
    return <div className={`${className} py-[2px]`}>{content}</div>;
}
