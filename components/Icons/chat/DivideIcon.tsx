import * as React from 'react';
import { SVGProps } from 'react';

const DivideIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={1} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#E9EAEC" d="M0 0h1v11.5H0z" />
    </svg>
);

export default DivideIcon;
