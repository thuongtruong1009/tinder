interface Props {
    title: string;
}

export default function Hobby({ title }: Props) {
    const random = Math.floor(Math.random() * 3);

    let bgColor = '';
    switch (random) {
        case 0:
            bgColor = 'bg-fuchsia-100';
            break;
        case 1:
            bgColor = 'bg-blue-100';
            break;
        case 2:
            bgColor = 'bg-orange-100';
            break;
        case 3:
            bgColor = 'bg-emerald-100';
            break;
    }

    const classCSS = 'gap-2 flex-center-y rounded-[32px] px-4 py-1 w-fit ' + bgColor;

    return (
        <div className={classCSS}>
            <span className="font-medium text-caption-1 leading-caption-1">#{title}</span>
        </div>
    );
}
