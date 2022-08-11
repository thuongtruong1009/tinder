import * as React from 'react';
import { SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={14} height={9} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="m1.269 2.313 4.782 5.58a1.25 1.25 0 0 0 1.898 0l4.782-5.58A1.25 1.25 0 0 0 11.782.25H2.218a1.25 1.25 0 0 0-.95 2.063Z"
            fill="#A7ADB2"
        />
    </svg>
);

export default ArrowDownIcon;
