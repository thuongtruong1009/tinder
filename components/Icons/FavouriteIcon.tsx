import * as React from 'react';
import { SVGProps } from 'react';

const FavouriteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={27} height={28} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="m21.053 3.52-.093 5.053c-.013.694.427 1.614.987 2.027l3.306 2.507c2.12 1.6 1.774 3.56-.76 4.36l-4.306 1.346c-.72.227-1.48 1.014-1.667 1.747l-1.027 3.92c-.813 3.093-2.84 3.4-4.52.68l-2.346-3.8c-.427-.693-1.44-1.213-2.24-1.173l-4.454.226c-3.186.16-4.093-1.68-2.013-4.106l2.64-3.067c.493-.573.72-1.64.493-2.36l-1.36-4.32c-.786-2.533.627-3.933 3.147-3.107l3.933 1.294c.667.213 1.667.066 2.227-.347l4.107-2.96c2.226-1.587 4-.653 3.946 2.08Z"
            fill="#07C6FD"
        />
        <defs>
            <linearGradient id="a" x1={22.742} y1={-7.701} x2={0.017} y2={17.329} gradientUnits="userSpaceOnUse">
                <stop stopColor="#07C6FD" />
                <stop offset={1} stopColor="#199AFB" />
            </linearGradient>
        </defs>
    </svg>
);

export default FavouriteIcon;
