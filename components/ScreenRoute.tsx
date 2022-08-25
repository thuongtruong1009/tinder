import NotSupport from './NotSupport';

interface Props {
    children: React.ReactNode;
}

export default function ScreenRoute({ children }: Props) {
    if (typeof window !== 'undefined' && window.screen) {
        if (window.screen.width >= 768) {
            return <NotSupport />;
        }
    }
    return <>{children}</>;
}
