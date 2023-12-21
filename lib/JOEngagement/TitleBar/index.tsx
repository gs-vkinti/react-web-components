/** @jsxImportSource @emotion/react */
import { styles, popoverStyles } from './styles'

import { FC, useState, MouseEvent } from 'react'
import Popover from '@mui/material/Popover'
import cx from 'classnames'

import { ACTIVE_ENGAGEMENTS, SEARCH_BY_NAME, SORT_BY } from '../../text'
import { sortTypes } from '../const'

import { SearchField, Tooltip } from '../../components'
import { FilterIcon, SortIcon } from '../../assets/icons'

interface TitleBarProps {
  searchText: string
  setSearchText: (s: string) => void
  engagementCount: number
  sortType: string
  setSortType: (s: string) => void
  isFiltersApplied?: boolean
  openFilterBar: boolean
  setOpenFilterBar: (v: boolean) => void
}

const TitleBar: FC<TitleBarProps> = props => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null)

  const openPopover = (event: MouseEvent) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const sortIconCn = cx({ 'joe-title-bar__filters--icons-selected': Boolean(anchorEl) })
  const filterIconCn = cx({
    'joe-title-bar__filters--icons-selected': props.openFilterBar
  })

  const selectedSortTypeLabel = sortTypes.find(i => i.value === props.sortType)?.label || ''

  return (
    <div css={styles()}>
      <div className='joe-title-bar'>
        <div className='joe-title-bar__title'>
          {ACTIVE_ENGAGEMENTS} ({props.engagementCount})
        </div>
        <div className='joe-title-bar__filters'>
          <SearchField onChange={props.setSearchText} placeholder={SEARCH_BY_NAME} />
          <div className='joe-title-bar__filters--icons'>
            <div className={sortIconCn}>
              {Boolean(props.sortType) && <span />}

              <Tooltip
                content={
                  <div style={{ textAlign: 'left', whiteSpace: 'nowrap' }}>
                    <div>
                      {SORT_BY}: {selectedSortTypeLabel}
                    </div>
                  </div>
                }
                disabled={!props.sortType}
              >
                <div>
                  <SortIcon onClick={openPopover} />
                </div>
              </Tooltip>
            </div>
            <div className={filterIconCn}>
              {props.isFiltersApplied && <span />}
              <FilterIcon onClick={() => props.setOpenFilterBar(!props.openFilterBar)} />
            </div>
          </div>
        </div>
      </div>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <div css={popoverStyles()}>
          <div className='joe-sort-filter-popover'>
            {sortTypes.map((sortType, index) => {
              const itemCn = cx('joe-sort-filter-popover__item', {
                'joe-sort-filter-popover__item--selected': sortType.value === props.sortType
              })

              return (
                <div
                  key={index}
                  className={itemCn}
                  onClick={() => {
                    props.setSortType(sortType.value)
                    handleClose()
                  }}
                >
                  {sortType.label}
                </div>
              )
            })}
          </div>
        </div>
      </Popover>
    </div>
  )
}
export default TitleBar
