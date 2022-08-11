import * as React from 'react';
import { SVGProps } from 'react';

const InformationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width={24} height={24} rx={8} fill={props.fill || '#fff'} />
        <path
            d="M14.667 17.333a.667.667 0 0 1-.667-.666V12c0-.737-.597-1.333-1.333-1.333H9.333a.667.667 0 0 0 0 1.333c.372 0 .667.299.667.667v4c0 .368-.29.666-.667.666a.667.667 0 0 0 0 1.333h5.334a.667.667 0 0 0 0-1.333Z"
            fill="#4E5A65"
        />
        <path opacity={0.35} d="M12 9.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#4E5A65" />
    </svg>
);

export default InformationIcon;
