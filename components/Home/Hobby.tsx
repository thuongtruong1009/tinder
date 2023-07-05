interface Props {
    title: string;
}

export default function Hobby({ title }: Props) {
    const random = Math.floor(Math.random() * 10);
    const bg = [
        'bg-[#FFF0F0]',
        'bg-[#EDF7FF]',
        'bg-[#FFF5ED]',
        'bg-[#E9FBF1]',
        'bg-[#F3D6D6]',
        'bg-[#F9EDFF]',
        'bg-[#FFEDF6]',
        'bg-[#EDDEFF]',
        'bg-[#E4DAE4]',
        'bg-[#FFDEFC]',
    ];
    const classCSS = `gap-2 flex-center-y rounded-[32px] px-4 py-1 w-fit ${bg[random]}`;

    return (
        <div className={classCSS}>
            <span className="font-medium text-caption-1 leading-caption-1">#{title}</span>
        </div>
    );
}
