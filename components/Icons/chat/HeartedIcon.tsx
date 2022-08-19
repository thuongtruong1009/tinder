import * as React from 'react';
import { SVGProps } from 'react';

const HeartedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={14} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.316 3.183C.81 1.51 2.413.284 4.311.284c1.043 0 1.956.423 2.685 1.034C7.726.707 8.638.284 9.682.284c1.986 0 3.652 1.345 4.056 3.138.076.276.106.554.1.829-.01.578-.164 1.136-.361 1.622-.572 1.409-1.622 2.678-2.802 3.615-1.18.937-2.483 1.56-3.68 1.56-1.192 0-2.485-.618-3.659-1.549-1.17-.927-2.214-2.185-2.798-3.58a3.832 3.832 0 0 1-.222-2.736Z"
            fill="red"
        />
    </svg>
);

export default HeartedIcon;
