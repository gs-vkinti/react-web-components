import React from 'react'

export default function CheckboxCheckedDisabledIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
      <rect width={18} height={18} x={3} y={3} fill='#A6B9CC' rx={4} />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.6}
        d='m7.5 12.5 3 2.5 6-5.5'
      />
    </svg>
  )
}
