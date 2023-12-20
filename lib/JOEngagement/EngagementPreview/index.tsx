/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { styles } from './styles'

import { EngagementPreviewProps } from '../JOEngagement.types'
import Footer from '../Footer'
import TitleBar from './titlebar'
import Slideshow from './slideshow'

const EngagementPreview: FC<EngagementPreviewProps> = ({ engagement, exitPreview, selectEngagement }) => {
  return (
    <>
      <div css={styles()}>
        <div className='joe-preview'>
          <TitleBar
            title={engagement.name}
            description='Description is something short like create a Guide engagement for draft mode and add a badge
              step to it.'
            exitPreview={exitPreview}
          />
          <div className='joe-preview__content'>
            <Slideshow slides={engagement.images} />
            <div className='joe-preview__content__config'>
              <div className='joe-preview__content__config__title'>Schedule</div>
              <div className='joe-preview__content__config__row'>
                <div className='joe-preview__content__config__field'>
                  <div className='joe-preview__content__config__field--name'>Timezone</div>
                  <div className='joe-preview__content__config__field--value'>America/Los Angeles</div>
                </div>
                <div className='joe-preview__content__config__field'>
                  <div className='joe-preview__content__config__field--name'>From</div>
                  <div className='joe-preview__content__config__field--value'>04/04/2023 • 12:00 AM</div>
                </div>
                <div className='joe-preview__content__config__field'>
                  <div className='joe-preview__content__config__field--name'>To</div>
                  <div className='joe-preview__content__config__field--value'>04/05/2023 • 12:00 AM</div>
                </div>
              </div>

              <div className='joe-preview__content__config__row'>
                <div className='joe-preview__content__config__field'>
                  <div className='joe-preview__content__config__field--name'>Qualification Rule</div>
                  <div className='joe-preview__content__config__field--value'>
                    Once per visit : The user will see the engagement a single time across any number of
                    visits under the specified date range.
                  </div>
                </div>
              </div>
              <div className='joe-preview__content__config__row'>
                <div className='joe-preview__content__config__field'>
                  <div className='joe-preview__content__config__field--name'>Throttling</div>
                  <div className='joe-preview__content__config__field--value'>
                    No throttling settings applied.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer action={selectEngagement} secondaryAction={exitPreview} />
    </>
  )
}
export default EngagementPreview
