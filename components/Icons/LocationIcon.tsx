import * as React from 'react';
import { SVGProps } from 'react';

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={10} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.688.958a4.593 4.593 0 0 1 4.69.039 4.887 4.887 0 0 1 2.288 4.177c-.033 1.694-.964 3.286-2.128 4.517A12.487 12.487 0 0 1 5.3 11.57a.783.783 0 0 1-.271.096.546.546 0 0 1-.26-.08 12.344 12.344 0 0 1-3.227-3.03A6.186 6.186 0 0 1 .333 5.09 4.77 4.77 0 0 1 2.688.958Zm.841 4.839c.245.604.824.998 1.465.998a1.56 1.56 0 0 0 1.122-.468c.298-.302.465-.713.463-1.141a1.615 1.615 0 0 0-.974-1.496 1.564 1.564 0 0 0-1.73.346 1.637 1.637 0 0 0-.346 1.76Z"
            fill="url(#a)"
        />
        <ellipse opacity={0.4} cx={5} cy={13} rx={3.333} ry={0.667} fill="url(#b)" />
        <defs>
            <linearGradient id="a" x1={7.833} y1={-3.582} x2={0.035} y2={22.549} gradientUnits="userSpaceOnUse">
                <stop stopColor="#7B61FF" />
                <stop offset={1} stopColor="#7537FA" />
            </linearGradient>
            <linearGradient id="b" x1={7.024} y1={11.873} x2={6.859} y2={15.213} gradientUnits="userSpaceOnUse">
                <stop stopColor="#7B61FF" />
                <stop offset={1} stopColor="#7537FA" />
            </linearGradient>
        </defs>
    </svg>
);

export default LocationIcon;
