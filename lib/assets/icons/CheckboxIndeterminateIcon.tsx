import React from 'react'

export default function CheckboxIndeterminateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
      <rect width={18} height={18} x={3} y={3} fill='#0369E9' rx={4} />
      <path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.6} d='M8 12h8' />
    </svg>
  )
}
