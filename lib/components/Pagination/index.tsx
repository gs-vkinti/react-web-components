/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import { range, set } from 'lodash'
import cn from 'classnames'
import ChevronLeft from '../../assets/icons/ChevronLeft'
import ChevronRight from '../../assets/icons/ChevronRight'
import styles from './styles'
import { RICH_GRAY_50, RICH_GRAY_60 } from '../../styles/colors'
import { PaginationProps } from '../../JOEngagement/JOEngagement.types'

const Pagination: FC<PaginationProps> = ({ activePage, countPage, setActivePage }) => {
  const rightActive = activePage !== countPage
  const leftActive = activePage !== 1
  const cnIcon = (dir: string) =>
    cn('pagination__icon', {
      'pagination__icon--active': (dir === 'l' && leftActive) || (dir === 'r' && rightActive)
    })

  const cnValue = (value: number) =>
    cn('pagination__value', {
      'pagination__value--active': value === activePage
    })

  return (
    <div css={styles()}>
      <div className='pagination'>
        <span className={cnIcon('l')} onClick={() => leftActive && setActivePage(activePage - 1)}>
          <ChevronLeft color={leftActive ? RICH_GRAY_60 : RICH_GRAY_50} />
        </span>
        {range(countPage).map(i => (
          <span className={cnValue(i + 1)} key={i} onClick={() => setActivePage(i + 1)}>
            {i + 1}
          </span>
        ))}
        <span className={cnIcon('r')} onClick={() => rightActive && setActivePage(activePage + 1)}>
          <ChevronRight color={rightActive ? RICH_GRAY_60 : RICH_GRAY_50} />
        </span>
      </div>
    </div>
  )
}
export default Pagination
