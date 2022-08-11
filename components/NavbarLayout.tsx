import Navbar from './Navbar';

interface Props {
    children: React.ReactNode;
}

export default function NavbarLayout({ children }: Props) {
    return (
        <>
            {children}
            <Navbar />
        </>
    );
}
