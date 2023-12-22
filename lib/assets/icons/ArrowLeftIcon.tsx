import React from 'react'

export default function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={14} height={12} fill='none' {...props}>
      <path
        stroke='#5F6C7A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.4}
        d='m6.5 1-5 5 5 5M1.5 6h11'
      />
    </svg>
  )
}
