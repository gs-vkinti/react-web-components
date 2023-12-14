import React from 'react'

export default function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='#5F6C7A'
        fillRule='evenodd'
        d='M5 3.709h14.003c.937 0 1.697.76 1.697 1.698v.583a1.7 1.7 0 01-.497 1.202L14.7 12.698v4.624a1.7 1.7 0 01-.66 1.346l-.13.09-2 1.268a1.7 1.7 0 01-2.61-1.435V12.7L3.804 7.259a1.7 1.7 0 01-.496-1.039L3.3 6.051V5.41A1.7 1.7 0 015 3.71zm14.003 1.4H5a.3.3 0 00-.3.3v.642a.3.3 0 00.089.213l5.704 5.648a.7.7 0 01.207.497v6.182a.3.3 0 00.46.253l2-1.268a.3.3 0 00.14-.254V12.41a.7.7 0 01.205-.495l5.707-5.712a.3.3 0 00.088-.212v-.583a.298.298 0 00-.297-.298z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}
