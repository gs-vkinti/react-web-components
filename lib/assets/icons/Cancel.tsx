import React from 'react'

export default function CancelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
      <g stroke='#5F6C7A' strokeLinecap='round' strokeWidth={1.4}>
        <path d='m7 7 10 10M7 17 17 7' />
      </g>
    </svg>
  )
}
