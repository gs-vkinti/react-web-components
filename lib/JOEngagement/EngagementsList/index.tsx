/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import range from 'lodash/range'

import { EngagementCard, EngagementSkeletonCard } from '../../components'
import { EngagementsListProps } from '../JOEngagement.types'

export default function EngagementsList(props: EngagementsListProps) {
  return (
    <div css={styles(props)}>
      <div className='joe-engagements-list'>
        {props.loadingEngagementsList
          ? range(9).map(i => <EngagementSkeletonCard key={i} />)
          : props.engagementsList.map((engagement, index: number) => {
              return (
                <div key={index} onClick={() => props.setSelectedEngagement(engagement)}>
                  <EngagementCard
                    isSelected={props.selectedEngagement?.id === engagement.id}
                    {...engagement}
                    openPreview={props.openPreview}
                  />
                </div>
              )
            })}
      </div>
    </div>
  )
}
