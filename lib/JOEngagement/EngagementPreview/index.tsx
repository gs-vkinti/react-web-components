/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { styles } from './styles'

import { FROM, QUALIFICATION_RULE, SCHEDULE, THROTTLING, TIMEZONE, TO } from '../../text'
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
          <div className='joe-preview__body'>
            <Slideshow slides={engagement.images} />
            <div className='joe-preview__config'>
              <div className='joe-preview__config--title'>{SCHEDULE}</div>
              <div className='joe-preview__config--row'>
                <div className='joe-preview__config--field'>
                  <div className='joe-preview__config--field__name'>{TIMEZONE}</div>
                  <div className='joe-preview__config--field__value'>America/Los Angeles</div>
                </div>
                <div className='joe-preview__config--field'>
                  <div className='joe-preview__config--field__name'>{FROM}</div>
                  <div className='joe-preview__config--field__value'>04/04/2023 • 12:00 AM</div>
                </div>
                <div className='joe-preview__config--field'>
                  <div className='joe-preview__config--field__name'>{TO}</div>
                  <div className='joe-preview__config--field__value'>04/05/2023 • 12:00 AM</div>
                </div>
              </div>

              <div className='joe-preview__config--row'>
                <div className='joe-preview__config--field'>
                  <div className='joe-preview__config--field__name'>{QUALIFICATION_RULE}</div>
                  <div className='joe-preview__config--field__value'>
                    Once per visit : The user will see the engagement a single time across any number of
                    visits under the specified date range.
                  </div>
                </div>
              </div>
              <div className='joe-preview__config--row'>
                <div className='joe-preview__config--field'>
                  <div className='joe-preview__config--field__name'>{THROTTLING}</div>
                  <div className='joe-preview__config--field__value'>No throttling settings applied.</div>
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
