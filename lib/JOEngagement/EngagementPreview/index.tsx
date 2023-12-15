/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react'
import { styles } from './styles'

import { EngagementPreviewProps } from '../JOEngagement.types'
import Footer from '../Footer'
import TitleBar from './titlebar'
import Pagination from '../../components/Pagination'

const EngagementPreview: FC<EngagementPreviewProps> = ({ setViewType }) => {
  const [activePage, setActivePage] = useState<number>(1)
  return (
    <div css={styles()}>
      <div className='joe-preview'>
        <TitleBar
          title='Analytics Feature Showcase Spectacular Guide Engage'
          description='Description is something short like create a Guide engagement for draft mode and add a badge
              step to it.'
          setViewType={setViewType}
        />
        <div className='joe-preview__content'>
          <div className='joe-preview__content__slides'>
            <div className='joe-preview__content__slides__image'>
              <img alt='images' />
            </div>
            <Pagination activePage={activePage} countPage={4} setActivePage={setActivePage} />
          </div>
          <div className='joe-preview__content__config'>Configuration</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default EngagementPreview
