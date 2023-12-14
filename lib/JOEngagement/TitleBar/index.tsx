/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { FC } from 'react'

import { ACTIVE_ENGAGEMENTS, SEARCH_BY_NAME } from '../../text'

import { SearchField } from '../../components'
import { FilterIcon, SortIcon } from '../../assets/icons'

interface TitleBarProps {
  searchText: string
  setSearchText: (s: string) => void
  isSearching: boolean
  engagementCount: number
  isFiltersApplied?: boolean
  isSortApplied?: boolean
}

const TitleBar: FC<TitleBarProps> = props => {
  return (
    <div css={styles()}>
      <div className='joe-title-bar'>
        <div className='joe-title-bar__title'>
          {ACTIVE_ENGAGEMENTS} ({props.engagementCount})
        </div>
        <div className='joe-title-bar__filters'>
          <SearchField
            onChange={props.setSearchText}
            placeholder={SEARCH_BY_NAME}
            isBusy={props.isSearching}
          />
          <div className='joe-title-bar__filters--icons'>
            <div>
              {props.isSortApplied && <span />}
              <SortIcon />
            </div>
            <div>
              {props.isFiltersApplied && <span />}
              <FilterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TitleBar
