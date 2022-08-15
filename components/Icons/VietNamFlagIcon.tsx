import * as React from 'react';
import { SVGProps } from 'react';

const VNFlagIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={40} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M37.015.896H2.993A2.993 2.993 0 0 0 0 3.889v20.223a2.993 2.993 0 0 0 2.993 2.992h34.014A2.993 2.993 0 0 0 40 24.112V3.889A2.981 2.981 0 0 0 37.015.896Z"
            fill="#FF4B55"
        />
        <path
            d="m20.324 6.186 1.844 5.532 5.83.047c.328 0 .46.422.195.61l-4.689 3.461 1.759 5.556c.101.313-.258.57-.524.375l-4.735-3.383-4.743 3.39c-.266.188-.618-.07-.524-.374l1.758-5.556-4.688-3.462c-.266-.195-.125-.61.195-.61l5.83-.046 1.844-5.532c.11-.32.547-.32.648-.008Z"
            fill="#FFE15A"
        />
    </svg>
);

export default VNFlagIcon;
