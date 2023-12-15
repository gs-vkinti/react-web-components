/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { styles } from './styles'

import { EngagementPreviewProps } from '../JOEngagement.types'
import Footer from '../Footer'
import TitleBar from './titlebar'

const EngagementPreview: FC<EngagementPreviewProps> = ({ setViewType }) => {
  return (
    <div css={styles()}>
      <div className='joe-preview'>
        <TitleBar
          title='Analytics Feature Showcase Spectacular Guide Engage'
          description='Description is something short like create a Guide engagement for draft mode and add a badge
              step to it.'
          setViewType={setViewType}
        />

        <Footer />
      </div>
    </div>
  )
}
export default EngagementPreview
