interface Props {
    name: string;
    id: string;
}

export default function RadioButton({ name, id }: Props) {
    return (
        <>
            <input className="radio" type="radio" name={name} id={id} />
        </>
    );
}
