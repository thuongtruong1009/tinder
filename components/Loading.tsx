import Logo from './Icons/Logo';

interface Props {}

export default function Loading(props: Props) {
    return (
        <section className="container relative">
            <div className="absolute inset-0 bg-primary-50 flex-center">
                <Logo className="font-extrabold leading-10 pointer-events-none select-none  text-h2" />
            </div>
        </section>
    );
}
