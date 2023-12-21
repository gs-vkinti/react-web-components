/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import EmptyBoxIcon from '../../assets/icons/EmptyBoxIcon'
import { NO_SAVED_ENGAGEMENT_TO_SELECT } from '../../text'
import { EngagementsListProps } from '../JOEngagement.types'
import { styles } from './styles'

const EmptyEngagementsList: FC<EngagementsListProps> = props => {
  return (
    <div css={styles(props as EngagementsListProps)}>
      <div className='joe-engagements-list joe-engagements-list--empty'>
        <div className='joe-engagements-list--empty__title'>{NO_SAVED_ENGAGEMENT_TO_SELECT}</div>
        <div className='joe-engagements-list--empty__emptybox-icon'>
          <EmptyBoxIcon />
        </div>
      </div>
    </div>
  )
}
export default EmptyEngagementsList
