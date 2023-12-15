/** @jsxImportSource @emotion/react */
import { styles } from './styles'

import { FC, useState, MouseEvent } from 'react'
import Popover from '@mui/material/Popover'

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
  const [anchorEl, setAnchorEl] = useState<null | Element>(null)

  const open = Boolean(anchorEl)

  const openPopover = (event: MouseEvent) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
              <SortIcon onClick={openPopover} />
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
              >
                Hello
              </Popover>
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
