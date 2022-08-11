import * as React from 'react';
import { SVGProps } from 'react';

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M18.835 13.148h-9.86l3.851 3.82a1.19 1.19 0 0 1 0 1.662c-.45.45-1.196.45-1.646 0l-5.854-5.823c-.435-.435-.435-1.212 0-1.646l5.854-5.823c.45-.45 1.196-.45 1.646 0 .217.233.342.53.342.823 0 .295-.124.605-.342.823l-3.85 3.835h9.86c.652 0 1.164.512 1.164 1.165 0 .636-.512 1.164-1.165 1.164Z"
            fill="#22313F"
        />
    </svg>
);

export default ArrowLeft;
