/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import range from 'lodash/range'

import { EngagementCard } from '../../components'
import { EngagementsListProps } from '../JOEngagement.types'

export default function EngagementsList(props: EngagementsListProps) {
  return (
    <div css={styles(props)}>
      <div className='joe-engagements-list'>
        {range(100).map(i => {
          return (
            <EngagementCard
              key={i}
              type='guide'
              name='Analytics Feature Showcase Spectacular Guide Engagement'
              environments={['Aptrinsic', 'Web App', 'Production']}
              labels={['Engage & Explore', 'Knowledge Center']}
              image=''
            />
          )
        })}
      </div>
    </div>
  )
}
