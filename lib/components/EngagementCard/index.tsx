/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { memo, FC } from 'react'
import cx from 'classnames'

import { EngagementCardProps } from '../../JOEngagement/JOEngagement.types'

const EngagementCard: FC<EngagementCardProps> = props => {
  const engTypeCn = cx('joe-engagement-card__view--type', {
    'joe-engagement-card__view--type-guide': props.type === 'guide'
  })

  return (
    <div css={styles()} onClick={() => props.setViewType('preview')}>
      <div className='joe-engagement-card'>
        <div className='joe-engagement-card__view'>
          <div className={engTypeCn}>{props.type}</div>
          <img src={props.image} className='joe-engagement-card__view--image' />
        </div>

        <div className='joe-engagement-card__info'>
          <div className='joe-engagement-card__info--label'>{props.name}</div>
          <div className='joe-engagement-card__info--environments'>
            {props.environments.map((environment: string, index: number) => (
              <div key={index}>
                {environment}{' '}
                {index !== props.environments.length - 1 && (
                  <div className='joe-engagement-card__info--environments-dot' />
                )}
              </div>
            ))}
          </div>
          <div className='joe-engagement-card__info--labels'>
            {props.labels.map((label: string, index: number) => (
              <div key={index} className='joe-engagement-card__info--labels-chip'>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(EngagementCard)
