import * as React from 'react';
import { SVGProps } from 'react';

const AncoholIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            opacity={0.35}
            d="M8 10.667a4 4 0 0 1-4-4v-4c0-.737.597-1.333 1.333-1.333h5.334c.736 0 1.333.596 1.333 1.333v4a4 4 0 0 1-4 4Z"
            fill="#22313F"
        />
        <path
            d="M10 13.333C9.659 13.291 8.667 13 8.667 13v-2.394c-.218.037-.44.06-.667.06-.227 0-.45-.023-.667-.06V13s-.992.291-1.333.333c-.366.045-.667.299-.667.667 0 .368.298.666.667.666h4a.666.666 0 0 0 .667-.666c0-.368-.301-.622-.667-.667ZM4 2.667V6h8V2.667c0-.737-.597-1.333-1.333-1.333H5.333C4.597 1.333 4 1.93 4 2.667Z"
            fill="#22313F"
        />
    </svg>
);

export default AncoholIcon;
