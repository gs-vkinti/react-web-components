/** @jsxImportSource @emotion/react */

// @ts-ignore
import style from './joe-hover-card.scss?inline'

import { FC, useMemo } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import { NOTE, PX_ENGAGEMENT } from '../text'
import styles from './styles'
import Skeleton from './Skeleton'

interface JOEHoverCardProps {
  container: any
  title?: string
  image?: string
  engagementId: string
}

const JOEHoverCard: FC<JOEHoverCardProps> = ({ container, ...props }) => {
  const cache = useMemo(
    () =>
      createCache({
        key: 'css',
        prepend: true,
        container
      }),
    [container]
  )
  return (
    <CacheProvider value={cache}>
      <style type='text/css'>{style}</style>
      <div css={styles()}>
        <div className='joe-hover-card'>
          <div className='joe-hover-card__title'>{PX_ENGAGEMENT}</div>
          <div className='joe-hover-card__body'>
            {' '}
            {props.engagementId ? (
              <>
                <div className='joe-hover-card--image'>
                  <img alt='image' src={props.image} />
                </div>
                <div className='joe-hover-card--title'>{props.title}</div>
              </>
            ) : (
              <Skeleton />
            )}
            <div className='joe-hover-card--note'>{NOTE}</div>
          </div>
        </div>
      </div>
    </CacheProvider>
  )
}
export default JOEHoverCard
