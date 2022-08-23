import * as React from 'react';
import { SVGProps } from 'react';

const SendIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M20.83 12a.875.875 0 0 0-.5-.79L8.573 5.64A.874.874 0 0 0 7.37 6.708l1.419 4.256L15.005 12l-6.217 1.036-1.42 4.256a.878.878 0 0 0 .213.895l.038.037a.875.875 0 0 0 .956.136L20.33 12.79A.877.877 0 0 0 20.83 12Z"
            fill="currentColor"
        />
    </svg>
);

export default SendIcon;
