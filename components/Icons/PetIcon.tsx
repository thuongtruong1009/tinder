import * as React from 'react';
import { SVGProps } from 'react';

const PetIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            fill="#22313F"
        />
        <path
            opacity={0.35}
            d="M16.724 13.065a.994.994 0 0 1-.792-.804 4.001 4.001 0 0 0-7.864 0 .99.99 0 0 1-.792.804 4.003 4.003 0 0 0-3.258 4.328C4.218 19.473 6.076 21 8.165 21h6.933c2.826 0 4.685-1.527 4.883-3.607a4.002 4.002 0 0 0-3.257-4.328Z"
            fill="#22313F"
        />
    </svg>
);

export default PetIcon;
