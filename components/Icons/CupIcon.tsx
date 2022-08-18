import * as React from 'react';
import { SVGProps } from 'react';

const CupIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            opacity={0.35}
            d="M38 18h-2v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v20a6 6 0 0 0 6 6h16a6 6 0 0 0 6-6h2a6 6 0 0 0 6-6v-6a6 6 0 0 0-6-6Zm2 12a2 2 0 0 1-2 2h-2V22h2a2 2 0 0 1 2 2v6Z"
            fill="url(#a)"
        />
        <path d="M20 4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0V4Z" fill="url(#b)" />
        <path d="M28 6a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0V6Z" fill="url(#c)" />
        <defs>
            <linearGradient id="a" x1={38.566} y1={5.108} x2={15.854} y2={37.903} gradientUnits="userSpaceOnUse">
                <stop stopColor="#FD79AF" />
                <stop offset={1} stopColor="#FD65B7" />
            </linearGradient>
            <linearGradient id="b" x1={19.396} y1={-0.541} x2={13.477} y2={2.783} gradientUnits="userSpaceOnUse">
                <stop stopColor="#FD79AF" />
                <stop offset={1} stopColor="#FD65B7" />
            </linearGradient>
            <linearGradient id="c" x1={27.396} y1={2.095} x2={22.408} y2={5.83} gradientUnits="userSpaceOnUse">
                <stop stopColor="#FD79AF" />
                <stop offset={1} stopColor="#FD65B7" />
            </linearGradient>
        </defs>
    </svg>
);

export default CupIcon;
