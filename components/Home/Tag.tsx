interface Props {
    className?: string;
    content: React.ReactNode;
}

export default function Tag({ className = '', content }: Props) {
    return (
        <div className={`${className} flex justify-between items-center px-4 py-1 rounded-3xl h-8`}>
            <p className="font-bold text-neutral-100 body-3">#{content}</p>
        </div>
    );
}
