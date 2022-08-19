import * as React from 'react';
import { SVGProps } from 'react';

const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={10} height={11} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.708 1.155a1.03 1.03 0 0 0-1.413 0L5.006 4.307 1.717 1.155a1.03 1.03 0 0 0-1.4.012.929.929 0 0 0-.012 1.342L3.594 5.66.304 8.813a.93.93 0 0 0-.271.93.979.979 0 0 0 .713.684c.35.088.72-.012.971-.26l3.29-3.153 3.288 3.152a1.03 1.03 0 0 0 1.4-.012.929.929 0 0 0 .013-1.341L6.418 5.66l3.29-3.152a.93.93 0 0 0 0-1.354Z"
            fill="#888"
        />
    </svg>
);

export default CrossIcon;
