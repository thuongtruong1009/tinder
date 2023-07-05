import * as React from 'react';
import { SVGProps } from 'react';

const ChatOptionIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M44 12v18c0 2.72-1.78 5-4.26 5.74.16-.54.26-1.14.26-1.74V16c0-3.32-2.68-6-6-6H10c-.6 0-1.2.1-1.74.26A5.964 5.964 0 0 1 14 6h24c3.32 0 6 2.68 6 6Z"
            fill="#7A56FE"
        />
        <path
            opacity={0.35}
            d="M34 10H10a6 6 0 0 0-6 6v18c0 3.244 2.58 5.872 5.8 5.98l1.512 4.64c.468 1.436 2.296 1.854 3.344.766L19.832 40H34a6 6 0 0 0 6-6V16a6 6 0 0 0-6-6Z"
            fill="#7A56FE"
        />
    </svg>
);

export default ChatOptionIcon;
