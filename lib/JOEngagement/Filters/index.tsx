/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { FC, memo, useMemo } from 'react'

import { getFilterDropdownsList } from '../utils'
import { FiltersBarProps } from '../JOEngagement.types'
import { FilterDropdown } from '../../components'

const Filters: FC<FiltersBarProps> = props => {
  console.log('props --', props)

  const filterDropdowns = useMemo(
    () => getFilterDropdownsList({ filterOptions: props.filterOptions }),
    [props.filterOptions]
  )

  return (
    <div css={styles()}>
      <div className='joe-filters-bar'>
        {filterDropdowns.map((filterDropdown, index) => {
          return <FilterDropdown key={index} index={index} {...filterDropdown} />
        })}
      </div>
    </div>
  )
}

export default memo(Filters)
