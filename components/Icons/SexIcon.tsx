import * as React from 'react';
import { SVGProps } from 'react';

const SexIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13 16.82v5.68c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5.68c1.02.24 2.04.23 3 0Z" fill="#22313F" />
        <path
            d="M13.5 22h-4a1.5 1.5 0 1 1 0-3h4a1.5 1.5 0 1 1 0 3ZM22 1.5v3c0 .61-.37 1.15-.93 1.39-.18.07-.38.11-.57.11-.39 0-.77-.15-1.06-.44L19 5.12l-1.97 1.97a6.605 6.605 0 0 0-2.12-2.12L16.88 3l-.44-.44c-.43-.43-.56-1.07-.33-1.63.24-.56.78-.93 1.39-.93h3c.83 0 1.5.67 1.5 1.5Z"
            fill="#22313F"
        />
        <path
            opacity={0.35}
            d="M11.5 17A6.508 6.508 0 0 1 5 10.5C5 6.916 7.916 4 11.5 4S18 6.916 18 10.5 15.084 17 11.5 17Zm0-10C9.57 7 8 8.57 8 10.5S9.57 14 11.5 14s3.5-1.57 3.5-3.5S13.43 7 11.5 7Z"
            fill="#22313F"
        />
    </svg>
);

export default SexIcon;
