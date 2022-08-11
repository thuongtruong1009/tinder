import * as React from 'react';
import { SVGProps } from 'react';

const EducationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M13.572 16.532a3.002 3.002 0 0 1-3.145 0L4 12.577V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5.423l-6.428 3.955Z"
            fill="#22313F"
        />
        <path
            opacity={0.35}
            d="M10.428 2.468 2.04 7.63c-1.394.858-1.394 2.883 0 3.741l8.388 5.162c.964.593 2.18.593 3.145 0l8.388-5.162c1.394-.858 1.394-2.883 0-3.741l-8.388-5.162a2.996 2.996 0 0 0-3.144 0Z"
            fill="#22313F"
        />
        <path d="M12 10c1.105 0 2-.672 2-1.5S13.105 7 12 7s-2 .672-2 1.5.895 1.5 2 1.5Z" fill="#22313F" />
        <path d="m12.53 9.348 6.064-3.79c-.439-1.518-1.902-1.17-1.902-1.17L11.47 7.652l1.06 1.696Z" fill="#22313F" />
    </svg>
);

export default EducationIcon;
