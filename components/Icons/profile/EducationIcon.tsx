import * as React from 'react';
import { SVGProps } from 'react';

const EducationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9.048 11.021a2.001 2.001 0 0 1-2.097 0L2.667 8.385V12a2 2 0 0 0 2 2h6.666a2 2 0 0 0 2-2V8.385L9.048 11.02Z"
            fill="#22313F"
        />
        <path
            opacity={0.35}
            d="M6.952 1.645 1.359 5.086a1.464 1.464 0 0 0 0 2.494l5.592 3.442a2.002 2.002 0 0 0 2.097 0L14.64 7.58c.93-.572.93-1.922 0-2.494l-5.592-3.44a1.997 1.997 0 0 0-2.096 0Z"
            fill="#22313F"
        />
        <path
            d="M8 6.667c.736 0 1.333-.448 1.333-1 0-.553-.597-1-1.333-1s-1.333.447-1.333 1c0 .552.597 1 1.333 1Z"
            fill="#22313F"
        />
        <path d="m8.353 6.232 4.043-2.527c-.293-1.012-1.268-.78-1.268-.78L7.647 5.101l.706 1.13Z" fill="#22313F" />
    </svg>
);

export default EducationIcon;
