import Logo from './Icons/Logo';

interface Props {}

export default function Loading(props: Props) {
    return (
        <section className="container relative">
            <div className="absolute inset-0 gap-4 bg-primary-50 flex-col-center">
                <Logo />
                <p className="font-extrabold leading-10 text-white pointer-events-none select-none text-h2">Foxy</p>
            </div>
        </section>
    );
}
