import * as React from 'react';
import { SVGProps } from 'react';

const RadioUncheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z"
            fill="#fff"
            stroke="#A7ADB2"
            strokeWidth={2}
        />
    </svg>
);

export default RadioUncheckIcon;
