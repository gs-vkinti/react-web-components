/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import { range, set } from 'lodash'
import cn from 'classnames'
import ChevronLeft from '../../assets/icons/ChevronLeft'
import ChevronRight from '../../assets/icons/ChevronRight'
import styles from './styles'
import { RICH_GRAY_50, RICH_GRAY_60 } from '../../styles/colors'
import { PaginationProps } from '../../JOEngagement/JOEngagement.types'

const Pagination: FC<PaginationProps> = ({ page, count, onChange }) => {
  const rightActive = page !== count
  const leftActive = page !== 1
  const cnIcon = (dir: string) =>
    cn('pagination__icon', {
      'pagination__icon--active': (dir === 'l' && leftActive) || (dir === 'r' && rightActive)
    })

  const cnValue = (value: number) =>
    cn('pagination__value', {
      'pagination__value--active': value === page
    })

  return (
    <div css={styles()}>
      <div className='pagination'>
        <span className={cnIcon('l')} onClick={e => leftActive && onChange(e, page - 1)}>
          <ChevronLeft color={leftActive ? RICH_GRAY_60 : RICH_GRAY_50} />
        </span>
        {range(count).map(i => (
          <span className={cnValue(i + 1)} key={i} onClick={e => onChange(e, i + 1)}>
            {i + 1}
          </span>
        ))}
        <span className={cnIcon('r')} onClick={e => rightActive && onChange(e, page + 1)}>
          <ChevronRight color={rightActive ? RICH_GRAY_60 : RICH_GRAY_50} />
        </span>
      </div>
    </div>
  )
}
export default Pagination
