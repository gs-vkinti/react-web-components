/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { FC, memo, useState } from 'react'
import cx from 'classnames'

import Popover from '@mui/material/Popover'
import { EngagementCardProps } from '../../JOEngagement/JOEngagement.types'
import { TickInCircleIcon } from '../../assets/icons'
import { Tooltip, ListViewTooltip } from '../'
import HoverCard from './HoverCard'

const EngagementCard: FC<EngagementCardProps> = props => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null)

  const engTypeCn = cx('joe-engagement-card__view--type', {
    'joe-engagement-card__view--type-guide': props.type === 'guide',
    'joe-engagement-card__view--type-slider': props.type === 'slider',
    'joe-engagement-card__view--type-dialog': props.type === 'dialog'
  })

  const engagementCn = cx('joe-engagement-card', {
    'joe-engagement-card__selected': props.isSelected
  })

  const engagementViewCn = cx('joe-engagement-card__view', {
    'joe-engagement-card__view--selected': props.isSelected
  })

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div css={styles(props)}>
      <div className={engagementCn} onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <div className={engagementViewCn}>
          <div className={engTypeCn}>{props.type}</div>

          <img src={props.images[0]} className='joe-engagement-card__view--image' />

          {props.isSelected && (
            <div className='joe-engagement-card__view--tick-icon'>
              <TickInCircleIcon />
            </div>
          )}
        </div>

        <div className='joe-engagement-card__info'>
          <div className='joe-engagement-card__info--label'>{props.name}</div>
          <div className='joe-engagement-card__info--environments'>
            <div>{props.product}</div>
            <div className='joe-engagement-card__info--environments-dot' />
            <div>{props.channel}</div>
            <div className='joe-engagement-card__info--environments-dot' />
            <div> {props.environments.join(', ')} </div>
          </div>
          <div className='joe-engagement-card__info--labels'>
            {props.labels.slice(0, 2).map((label: string, index: number) => (
              <div key={index} className='joe-engagement-card__info--labels-chip'>
                {label}
              </div>
            ))}

            {props.labels.length > 2 && (
              <Tooltip content={<ListViewTooltip items={props.labels.slice(2)} />}>
                <div className='joe-engagement-card__info--labels-chip joe-engagement-card__info--labels-chip-additional'>
                  + {props.labels.length - 2}
                </div>
              </Tooltip>
            )}
          </div>
        </div>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        disableAutoFocus
        disableEnforceFocus
        slotProps={{ paper: { onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose } }}
      >
        <HoverCard {...props} />
      </Popover>
    </div>
  )
}

export default memo(EngagementCard)
