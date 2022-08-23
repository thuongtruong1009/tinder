import * as React from 'react';
import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.061.939a1.498 1.498 0 0 0-2.118 0L8.009 5.872 3.076.94A1.498 1.498 0 0 0 .957 3.057l4.934 4.934-4.934 4.933a1.498 1.498 0 1 0 2.119 2.119l4.933-4.934 4.934 4.934a1.498 1.498 0 0 0 2.118-2.119l-4.933-4.933 4.933-4.934a1.498 1.498 0 0 0 0-2.118Z"
            fill="currentColor"
        />
    </svg>
);

export default CloseIcon;
