import * as React from "react"
import { SVGProps } from "react"

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.94 5.42-5.17-2.99c-.99-.57-2.54-.57-3.53 0L5.02 5.44c-2.07 1.4-2.19 1.61-2.19 3.84v5.43c0 2.23.12 2.45 2.23 3.87l5.17 2.99c.5.29 1.14.43 1.77.43.63 0 1.27-.14 1.76-.43l5.22-3.01c2.07-1.4 2.19-1.61 2.19-3.84V9.28c0-2.23-.12-2.44-2.23-3.86ZM12 15.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 8.75 12 8.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Z"
      fill="#22313F"
    />
  </svg>
)

export default SettingIcon
