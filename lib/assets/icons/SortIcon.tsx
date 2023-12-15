import React from 'react'

export default function SortIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
      <path
        fill='#5F6C7A'
        d='M20.535 8.001a.7.7 0 0 1-.895 1.07l-.088-.073-2.551-2.516-2.554 2.517a.7.7 0 0 1-.904.067l-.086-.075a.7.7 0 0 1-.067-.903L13.464 8l3.045-3a.7.7 0 0 1 .897-.072l.086.072 3.043 3zM16.956 17.8a.7.7 0 0 1 .095 1.394l-.095.006h-13a.7.7 0 0 1-.095-1.394l.095-.006h13z'
      />
      <path
        fill='#5F6C7A'
        d='M17.656 14.5a.7.7 0 0 1-1.394.095l-.006-.095v-8a.7.7 0 0 1 1.393-.095l.007.095v8zm-8.7-8.7a.7.7 0 0 1 .095 1.394l-.095.006h-5a.7.7 0 0 1-.095-1.394l.095-.006h5zm3 6a.7.7 0 0 1 .095 1.394l-.095.006h-8a.7.7 0 0 1-.095-1.394l.095-.006h8z'
      />
    </svg>
  )
}