/** @jsxImportSource @emotion/react */
import { popoverStyles } from './styles'

import { FC, memo } from 'react'
import cx from 'classnames'
import Button from '@mui/material/Button'

import { PREVIEW, EDIT } from '../../text'
import AutoplayCarousel from './AutoplayCarousel'
import { HoverCardProps } from '../../JOEngagement/JOEngagement.types'

const HoverCard: FC<HoverCardProps> = props => {
  const engTypeCn = cx('joe-engagement-card-popover__view--type', {
    'joe-engagement-card-popover__view--type-guide': props.type === 'guide',
    'joe-engagement-card-popover__view--type-slider': props.type === 'slider',
    'joe-engagement-card-popover__view--type-dialog': props.type === 'dialog'
  })

  return (
    <div css={popoverStyles()}>
      <div className='joe-engagement-card-popover'>
        <div className='joe-engagement-card-popover__view'>
          <div className={engTypeCn}>{props.type}</div>

          <div className='joe-engagement-card-popover__view--carousel'>
            <AutoplayCarousel {...props} />
          </div>
        </div>
        <div className='joe-engagement-card-popover__info'>
          <div className='joe-engagement-card-popover__info--label'>
            {props.name} {props.name} {props.name} {props.name}
          </div>

          <div className='joe-engagement-card-popover__info--button'>
            <Button variant='contained' onClick={props.openPreview}>
              {PREVIEW} / {EDIT}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(HoverCard)
