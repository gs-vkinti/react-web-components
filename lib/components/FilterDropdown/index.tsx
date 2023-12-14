/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { memo, useState, FC } from 'react'
import cx from 'classnames'

import { FilterDropdownProps } from '../../JOEngagement/JOEngagement.types'
import { SmallEqualIcon, SmallDownChevronIcon } from '../../assets/icons'

const FilterDropdown: FC<FilterDropdownProps> = props => {
  const [openOptions, setOpenOptions] = useState(false)

  const joeFilterDropdownClassName = cx('joe-filter-dropdown', {
    'joe-filter-dropdown__selected': openOptions
  })

  const filterValue = 'All'

  return (
    <div css={styles()}>
      <div className={joeFilterDropdownClassName} onClick={() => setOpenOptions(!openOptions)}>
        <div className='joe-filter-dropdown__alphabet'>
          {String.fromCharCode('A'.charCodeAt(0) + props.index)}
        </div>

        <div className='joe-filter-dropdown__options'>
          <div className='joe-filter-dropdown__filter-label'>{props.label}</div>

          <SmallEqualIcon />

          <div className='joe-filter-dropdown__filter-value'>{filterValue}</div>

          <SmallDownChevronIcon />
        </div>
      </div>
    </div>
  )
}

export default memo(FilterDropdown)
