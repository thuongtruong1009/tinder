import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    /**
     * the html tag you want to create.
     * @default "section"
     */
    section: keyof JSX.IntrinsicElements;
    id: string;
    className: string;
}
const Portal: React.FC<Props> = (props) => {
    const { section, id, className, children, ...rest } = props;
    const el = document.createElement(section);
    const wrapper: React.RefObject<HTMLElement> = useRef(el);

    useEffect(() => {
        const current = wrapper.current as HTMLElement;
        if (!current) return;

        current.setAttribute('id', id);
        current.setAttribute('class', className);

        Object.keys(rest).forEach((attribute) => {
            const val: keyof typeof rest = rest[attribute as keyof typeof rest];
            current.setAttribute(attribute, val);
        });
        document.body.appendChild(current);

        return () => {
            document.body.removeChild(current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wrapper, id, className]);

    if (!wrapper.current) {
        return <>{null}</>;
    }

    return ReactDOM.createPortal(children, wrapper.current);
};

Portal.defaultProps = {
    section: 'section',
};

export default Portal;
