import * as React from 'react';
import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={33} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#a)">
            <rect x={0.5} width={32} height={32} rx={16} fill="#7A838C" />
            <path
                d="M18.672 32V20.094h3.34l.442-4.169h-3.782l.006-2.086c0-1.088.103-1.67 1.665-1.67h2.087V8h-3.34c-4.01 0-5.423 2.022-5.423 5.423v2.502h-2.5v4.17h2.5V32H18.672Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id="a">
                <rect x={0.5} width={32} height={32} rx={16} fill="#fff" />
            </clipPath>
        </defs>
    </svg>
);

export default FacebookIcon;
