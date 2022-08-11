import * as React from 'react';
import { SVGProps } from 'react';

const LocationFillIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M19 0a5 5 0 0 0-5 5c0 1.977 2.001 4.704 3.471 6.441a2.005 2.005 0 0 0 3.058 0C21.999 9.704 24 6.977 24 5a5 5 0 0 0-5-5Zm0 7.143a2.143 2.143 0 1 1 0-4.286 2.143 2.143 0 0 1 0 4.286Z"
            fill="#7A56FE"
        />
        <path
            opacity={0.35}
            d="m6.697 1.786-2.238 1.34A3 3 0 0 0 3 5.7v13.406c0 1.274 1.39 2.061 2.482 1.406l1.214-.727A2.77 2.77 0 0 1 8 19.395V1.397c-.453.02-.902.149-1.303.389ZM22.084 4.376c-.212-1.23-1.178-2.257-2.396-2.527A3.138 3.138 0 0 0 16.489 3H12v18h6a3 3 0 0 0 3-3V7.33a3.13 3.13 0 0 0 1.084-2.954Z"
            fill="#7A56FE"
        />
        <path
            d="M9.359 1.683A2.766 2.766 0 0 0 8 1.397v17.998a2.77 2.77 0 0 1 1.36.288L12 21V3L9.359 1.683Z"
            fill="#7A56FE"
        />
    </svg>
);

export default LocationFillIcon;
