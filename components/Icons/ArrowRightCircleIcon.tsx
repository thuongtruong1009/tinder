import * as React from 'react';
import { SVGProps } from 'react';

const ArrowRightCircleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 10c0 5.52-4.49 10-10 10l-.28-.004C4.33 19.848 0 15.426 0 10 0 4.49 4.48 0 10 0c5.51 0 10 4.49 10 10ZM8.02 6c-.29.3-.29.77.01 1.06L10.98 10l-2.95 2.94c-.3.29-.3.77-.01 1.06.3.3.77.3 1.06 0l3.49-3.47a.75.75 0 0 0 0-1.06L9.08 6a.704.704 0 0 0-.52-.22c-.2 0-.39.07-.54.22Z"
            fill="#fff"
        />
    </svg>
);

export default ArrowRightCircleIcon;
