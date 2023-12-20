/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react'
import { styles } from './styles'

import { EngagementPreviewProps } from '../JOEngagement.types'
import Footer from '../Footer'
import TitleBar from './titlebar'
import Pagination from '../../components/Pagination'

const EngagementPreview: FC<EngagementPreviewProps> = ({ engagement, exitPreview }) => {
  const [activePage, setActivePage] = useState<number>(1)
  return (
    <div css={styles()}>
      <div className='joe-preview'>
        <TitleBar
          title={engagement.name}
          description='Description is something short like create a Guide engagement for draft mode and add a badge
              step to it.'
          exitPreview={exitPreview}
        />
        <div className='joe-preview__content'>
          <div className='joe-preview__content__slides'>
            <div className='joe-preview__content__slides__image'>
              <img alt='images' src={engagement.images[activePage]} />
            </div>
            <Pagination
              activePage={activePage}
              countPage={engagement.images.length}
              setActivePage={setActivePage}
            />
          </div>
          <div className='joe-preview__content__config'>
            <div className='joe-preview__content__config__title'>Schedule</div>
            <div className='joe-preview__content__config__row'>
              <div className='joe-preview__content__config__field'>
                <div className='joe-preview__content__config__field__name'>Timezone</div>
                <div className='joe-preview__content__config__field__value'>America/Los Angeles</div>
              </div>
              <div className='joe-preview__content__config__field'>
                <div className='joe-preview__content__config__field__name'>From</div>
                <div className='joe-preview__content__config__field__value'>04/04/2023 • 12:00 AM</div>
              </div>
              <div className='joe-preview__content__config__field'>
                <div className='joe-preview__content__config__field__name'>To</div>
                <div className='joe-preview__content__config__field__value'>04/05/2023 • 12:00 AM</div>
              </div>
            </div>

            <div className='joe-preview__content__config__row'>
              <div className='joe-preview__content__config__field'>
                <div className='joe-preview__content__config__field__name'>Qualification Rule</div>
                <div className='joe-preview__content__config__field__value'>
                  Once per visit : The user will see the engagement a single time across any number of visits
                  under the specified date range.
                </div>
              </div>
            </div>
            <div className='joe-preview__content__config__row'>
              <div className='joe-preview__content__config__field'>
                <div className='joe-preview__content__config__field__name'>Throttling</div>
                <div className='joe-preview__content__config__field__value'>
                  No throttling settings applied.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default EngagementPreview
