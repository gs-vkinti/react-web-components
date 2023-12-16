/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { FC, ReactElement, ReactNode } from 'react'
import Tippy from '@tippyjs/react'

export interface TooltipProps {
  children: ReactElement

  delay?: number | [number | null, number | null]
  placement?: string | undefined
  disabled?: boolean
  allowHTML?: boolean
  content?: string | ReactNode
  hideOnClick?: string
  interactive?: boolean
  onClickOutside?: (instance: any, event: Event) => void
  trigger?: string
  arrow?: boolean
  theme?: string
  appendTo?: string | Element
  visible?: boolean
}

const Tooltip: FC<TooltipProps> = props => {
  return (
    <Tippy
      arrow={false}
      interactive
      maxWidth='none'
      // @ts-ignore
      placement='bottom'
      popperOptions={{
        modifiers: [
          {
            name: 'tooltip',
            options: {
              fallbackPlacements: ['auto']
            }
          }
        ]
      }}
      css={styles}
      {...props}
    />
  )
}

export default Tooltip
