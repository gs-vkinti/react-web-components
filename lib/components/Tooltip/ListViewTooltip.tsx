import { FC, memo } from 'react'

interface ListViewTooltipProps {
  items?: string[]
  defaultText?: string
}

const ListViewTooltip: FC<ListViewTooltipProps> = (props: ListViewTooltipProps) => {
  if (!props.items?.length) return props.defaultText

  return (
    <div style={{ textAlign: 'left' }}>
      {props.items.map((item: string, index: number) => {
        return <div key={index}>• {item}</div>
      })}
    </div>
  )
}

export default memo(ListViewTooltip)
