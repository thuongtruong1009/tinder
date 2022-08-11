import * as React from 'react';
import { SVGProps } from 'react';

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={28} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.466 6.752C1.463 3.217 4.712.627 8.554.627c2.113 0 3.962.893 5.438 2.183C15.47 1.52 17.318.627 19.43.627c4.023 0 7.396 2.841 8.215 6.63.152.582.214 1.171.204 1.751-.021 1.223-.334 2.4-.734 3.43-1.157 2.975-3.284 5.657-5.673 7.636-2.39 1.98-5.028 3.299-7.452 3.299-2.413 0-5.032-1.309-7.41-3.275-2.37-1.96-4.484-4.616-5.665-7.564a8.419 8.419 0 0 1-.45-5.782Z"
            fill="#F85C5C"
        />
    </svg>
);

export default HeartIcon;
