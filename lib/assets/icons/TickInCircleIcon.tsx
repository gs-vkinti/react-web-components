import React from 'react'

export default function TickInCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
      <path fill='#0369E9' d='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z' />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.4}
        d='M8.5 12.5 11 15l5-5'
      />
    </svg>
  )
}
