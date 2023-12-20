/** @jsxImportSource @emotion/react */
import { autoplayCarousel } from './styles'

import { FC, memo, useRef, useState, useEffect } from 'react'
import cx from 'classnames'

import { AutoplayCarouselProps } from '../../JOEngagement/JOEngagement.types'

const delay = 2500

const AutoplayCarousel: FC<AutoplayCarouselProps> = props => {
  const [index, setIndex] = useState<number>(0)
  const timeoutRef = useRef<number | null>(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => setIndex(prevIndex => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1)),
      delay
    )

    return () => resetTimeout()
  }, [index])

  return (
    <div css={autoplayCarousel(props)}>
      <div className='joe-autoplay-carousel'>
        <div
          className='joe-autoplay-carousel__wrapper'
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {props.images.map((url, index) => (
            <div className='joe-autoplay-carousel__wrapper--image' key={index}>
              <img key={index} src={url} />
            </div>
          ))}
        </div>

        {props.images.length > 1 && (
          <div className='joe-autoplay-carousel__dots'>
            {props.images.map((_, idx) => {
              const cnDot = cx('joe-autoplay-carousel__dots--dot', {
                'joe-autoplay-carousel__dots--dot-selected': index === idx
              })

              return <div key={idx} className={cnDot} onClick={() => setIndex(idx)} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(AutoplayCarousel)
