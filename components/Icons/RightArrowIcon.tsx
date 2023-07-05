import * as React from 'react';
import { SVGProps } from 'react';

const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.752 17.648a1.2 1.2 0 0 1 0-1.697L12.703 12 8.752 8.048a1.2 1.2 0 1 1 1.696-1.697l4.8 4.8a1.2 1.2 0 0 1 0 1.697l-4.8 4.8a1.2 1.2 0 0 1-1.696 0Z"
            fill="#D3D6D9"
        />
    </svg>
);

export default RightArrowIcon;
