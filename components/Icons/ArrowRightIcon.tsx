import * as React from "react"
import { SVGProps } from "react"

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5em"
    height="1.5em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.16 12-4.815-4.94a1.229 1.229 0 0 1 0-1.707 1.156 1.156 0 0 1 1.663 0l5.647 5.794c.46.47.46 1.235 0 1.706l-5.647 5.793a1.156 1.156 0 0 1-1.663 0 1.229 1.229 0 0 1 0-1.706L15.16 12Z"
      fill="#D3D6D9"
    />
  </svg>
)

export default ArrowRightIcon
