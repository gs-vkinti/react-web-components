/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { FC, memo } from 'react'
import range from 'lodash/range'

import { EngagementCard } from '../../components'

type props = {
  setViewType: (type: string) => void
}
const EngagementsList: FC<props> = ({ setViewType }) => {
  return (
    <div css={styles()}>
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
              setViewType={setViewType}
            />
          )
        })}
      </div>
    </div>
  )
}

export default memo(EngagementsList)
