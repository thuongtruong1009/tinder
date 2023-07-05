interface Props {}

export default function Loading(props: Props) {
    return (
        <section className="container relative">
            <div className="absolute inset-0 bg-primary-50 flex-center">
                <p className="font-extrabold leading-10 pointer-events-none select-none text-neutral-0 text-h2 animate-bounce">
                    Foxy
                </p>
            </div>
        </section>
    );
}
