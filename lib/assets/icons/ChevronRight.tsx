import { SVGProps } from 'react'

const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={6} height={10} fill='none' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.4}
      d='m1 9 4-4-4-4'
    />
  </svg>
)
export default ChevronRight
